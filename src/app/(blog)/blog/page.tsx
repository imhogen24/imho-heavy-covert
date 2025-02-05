import { gradientText } from "@/app/(root)/_compoennts/hero/hero-text";
import { fetchPages } from "@/lib/notion";
import { cn } from "@/lib/utils";
import { Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const BlogPage = async () => {
  const posts = await fetchPages();
  console.log(posts);
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
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
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

              <div>
                <Image
                  src={post.properties.cover_image.url}
                  height={100}
                  width={400}
                  alt="image"
                  className="rounded-xl"
                />
              </div>

              <div className="">
                <Balancer ratio={0.0} preferNative={false}>
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.properties.Summary.rich_text[0].plain_text}
                  </p>
                </Balancer>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
