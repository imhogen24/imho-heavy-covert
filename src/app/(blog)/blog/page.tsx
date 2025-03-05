
import { gradientText } from "@/app/(home)/_compoennts/modules/hero/hero-text";
import { fetchPages } from "@/lib/notion";
import { cn } from "@/lib/utils";
import { Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ImageWithSkeleton } from "../_components/skeleton";
import { Metadata } from "next";


export const revalidate = 60;
export const metadata: Metadata = {
  title: "Blog",
  description: "Explore the latest articles, insights, and stories from our blog, covering technology, innovation, and industry trends.",
  keywords: ["Blog", "Technology", "Innovation", "Articles", "Industry Trends"],
}
const BlogPage = async () => {
  const posts = await fetchPages();


  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-2 border-b muted-border">
        <div className="p-8 flex justify-start items-center">
          <h1
            className={cn(
              "text-xl max-w-lg md:text-3xl lg:text-5xl font-[family-name:var(--font-machina)]",
            )}
          >
            From Our
            <span className={cn(gradientText, "leading-tight")}> Blog</span>
          </h1>
        </div>

        <div className="flex justify-center items-center border-l muted-border border-dashed bg-gray-50 dark:bg-neutral-900 p-8">
          <Rss size={100} strokeWidth={0.5} absoluteStrokeWidth />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.results.map((post: any, index) => {
          return (
            <Link
              href=
              {`/blog/${post.properties.slug.rich_text[0].plain_text.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`}
              key={post.id}
              className={cn(
                "flex flex-col gap-5 p-8 w-full h-full hover:bg-gray-50 dark:hover:bg-neutral-900",
                "muted-border",
              )}
            >
              <div className="flex flex-col gap-5 w-full h-1/3">
                <span className="text-sm text-muted-foreground">
                  {post.properties.published_date.date.start.split("T")[0]}
                </span>
                <h1 className="text-2xl font-semibold line-clamp-3">
                  {post.properties.Title.title[0].plain_text}
                </h1>
              </div>

              <ImageWithSkeleton
                src={post.properties.cover_image.url}
                alt={post.properties.Title.title[0].plain_text}
                priority={index < 6}
              />

              <div>
                <p className="text-muted-foreground">
                  <Balancer ratio={0.0} preferNative={false}>
                    <span className="line-clamp-3">
                      {post.properties.Summary.rich_text[0].plain_text}
                    </span>
                  </Balancer>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;