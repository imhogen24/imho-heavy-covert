import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import {NotionRenderer} from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import bookmarkPlugin from '@notion-render/bookmark-plugin'
import React from 'react'
import Image from 'next/image';
import { TimerIcon } from 'lucide-react';
import BackButton from '../../_components/back-button';

export default async function Page({params}: {params:{slug: string}}){
  const post = await fetchBySlug(params.slug);
  console.log(post);

  if(!post){
    return <div>Post not found</div>
  }
  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  })

  renderer.use(hljsPlugin({}))
  renderer.use(bookmarkPlugin(undefined))
  const html =  await renderer.render(...blocks);

  return (
    <div className='w-full p-10 flex items-center gap-10 flex-col min-h-dvh'>
        <BackButton/>
        <h1 className='mx-auto text-center text-3xl font-[family-name:var(--font-machina)] max-w-2xl '>
            {post.properties.Title.title[0].plain_text}
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

             <span>{post.properties.Created.created_time.split("T")[0]}</span>
        </div>

        <div className="prose dark:prose-invert max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: html}}>

        </div>
    </div>
  )
}
