import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import React from "react";
import Image from "next/image";
import { TimerIcon } from "lucide-react";
import BackButton from "../../_components/back-button";
import PostNotFound from "../../_components/post-not-found";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchBySlug(slug);

  if (!post) {
    return <PostNotFound />;
  }

  // Type guard to ensure we have title property
  if (
    !("properties" in post) ||
    !("Title" in post.properties) ||
    post.properties.Title.type !== "title" ||
    !post.properties.Title.title[0]
  ) {
    return <div>Invalid post data</div>;
  }

  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));
  const html = await renderer.render(...blocks);

  const title = post.properties.Title.title[0].plain_text;
  const createdTime = post.created_time;

  return (
    <div className="max-w-screen overflow-x-hidden p-5 md:p-10 flex items-center gap-5 md:gap-10 flex-col min-h-dvh">
      <div className="flex flex-col gap-5 items-center">
        <BackButton />
        <h1 className="px-5 mx-auto text-center text-xl font-bold md:text-3xl max-w-2xl ">
          {title}
        </h1>

        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            src={"/logos/footer-logo.png"}
            height={20}
            width={20}
            alt="image"
          />
          <span className="text-xs text-muted-foreground">IMHO Team</span>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto flex justity-between">
        <span className="flex-1 flex flex-row justify-start items-center gap-1">
          <TimerIcon size={16} className="my-auto text-muted-foreground" />
          <p className="my-auto text-xs text-muted-foreground">3 mins read</p>
        </span>

        <span className="text-xs text-muted-foreground">
          {createdTime.split("T")[0]}
        </span>
      </div>

      <div
        className="prose dark:prose-invert max-w-full p-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBySlug(slug);

  if (
    !post ||
    !("properties" in post) ||
    !("Title" in post.properties) ||
    post.properties.Title.type !== "title"
  ) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: post.properties.Title.title[0]?.plain_text || "Blog Post",
  };
}
