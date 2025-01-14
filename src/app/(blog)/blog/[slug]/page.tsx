import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import bookmarkPlugin from '@notion-render/bookmark-plugin'
import React from 'react'
import Image from 'next/image';
import { TimerIcon } from 'lucide-react';
import BackButton from '../../_components/back-button';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await fetchBySlug(slug);

  if (!post) {
    return <div>Post not found</div>
  }

  // Type guard to ensure we have title property
  if (
    !('properties' in post) ||
    !('Title' in post.properties) ||
    post.properties.Title.type !== 'title' ||
    !post.properties.Title.title[0]
  ) {
    return <div>Invalid post data</div>
  }

  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  })

  renderer.use(hljsPlugin({}))
  renderer.use(bookmarkPlugin(undefined))
  const html = await renderer.render(...blocks);

  const title = post.properties.Title.title[0].plain_text;
  const createdTime = post.created_time;

  return (
    <div className='w-full p-10 flex items-center gap-10 flex-col min-h-dvh'>
        <BackButton/>
        <h1 className='mx-auto text-center text-3xl font-[family-name:var(--font-machina)] max-w-2xl '>
            {title}
        </h1>
        <div className='flex flex-row justify-center items-center gap-2'>
            <Image src={"/logos/footer-logo.png"} height={30} width={30} alt="image"/>
            <span className='text-sm'>IMHO Team</span>
        </div>
        <div className='w-full max-w-3xl mx-auto flex justity-between'>
             <span className='flex-1 inline-flex gap-2'>
                <TimerIcon/>
                <p>3 mins read</p>
             </span>

             <span>{createdTime.split("T")[0]}</span>
        </div>

        <div className="prose dark:prose-invert max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: html}}>
        </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchBySlug(slug);

  if (!post || !('properties' in post) || !('Title' in post.properties) || post.properties.Title.type !== 'title') {
    return {
      title: 'Blog Post'
    };
  }

  return {
    title: post.properties.Title.title[0]?.plain_text || 'Blog Post',
  }
}
