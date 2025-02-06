'use client'
import { useState } from "react";
import Image from 'next/image'
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
    src: string;
    alt: string;
    priority?: boolean;
    sizes?: string;
}

export const ImageWithSkeleton = ({
    src,
    alt,
    priority = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: ImageWithSkeletonProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden">
            {/* Skeleton */}
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-neutral-700 dark:to-neutral-600",
                    "animate-pulse",
                    isLoading ? "opacity-100" : "opacity-0"
                )}
            />

            {/* Image */}
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className={cn(
                    "rounded-xl object-cover transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100"
                )}
                priority={priority}
                onLoadingComplete={() => setIsLoading(false)}
            />
        </div>
    );
};
