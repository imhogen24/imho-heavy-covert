import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import React from "react";
import Image from "next/image";
import { TimerIcon } from "lucide-react";
import BackButton from "../../_components/back-button";
import PostNotFound from "../../_components/post-not-found";
import estimateReadingTime from "../../_components/reading-time";
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
  const strippedHtml = html.replace(/<[^>]+>/g, "");
  const readingTime = estimateReadingTime(strippedHtml);

  const title = post.properties.Title.title[0].plain_text;
  const createdTime = post.created_time;
  console.log(post)
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
          <p className="my-auto text-xs text-muted-foreground">
            {readingTime} mins read
          </p>
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

  // Handle missing or invalid post
  if (
    !post ||
    !("properties" in post) ||
    !("Title" in post.properties) ||
    post.properties.Title.type !== "title"
  ) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  // Extract post data for metadata
  const title = post.properties.Title.title[0]?.plain_text || "Blog Post";
  // Extract image if available
  let image = undefined;
  if (
    "cover_image" in post.properties &&
    post.properties.cover_image.type === "url" &&
    post.properties.cover_image.url
  ) {
    image = post.properties.cover_image.url;
  }

  // Extract description if available
  let description = "Blog post from IMHO team";
  if (
    "Description" in post.properties &&
    post.properties.Description.type === "rich_text" &&
    post.properties.Description.rich_text[0]
  ) {
    description = post.properties.Description.rich_text[0].plain_text;
  }



  // Extract tags if available
  let keywords = undefined;
  if (
    "Tags" in post.properties &&
    post.properties.Tags.type === "multi_select" &&
    post.properties.Tags.multi_select.length > 0
  ) {
    keywords = post.properties.Tags.multi_select.map((tag: any) => tag.name);
  }

  return {
    title: title,
    description: description.substring(0, 160),
    keywords: keywords,
    openGraph: {
      title: title,
      description: description.substring(0, 160),
      type: "article",
      publishedTime: post.created_time,
      url: `/blog/${slug}`,
      images: {
        image: image,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description.substring(0, 160),
      images: {
        image: image,
      },
    },

    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}