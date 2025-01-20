// loading.tsx
import React from 'react'

const BlogSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 p-8 w-full h-full border-r border-b animate-pulse"
        >
          <div className="w-full h-1/3 space-y-3">
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>

          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogSkeleton
