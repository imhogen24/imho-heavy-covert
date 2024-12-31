'use client'
import * as React from "react"
import { Loader, Paperclip } from "lucide-react"
import { UploadButton } from "@/lib/uploadthing";

export function CustomUploadButton() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
      content={{
        button({ ready }) {
            if (ready) return  (
            <div className="flex items-center justify-center">
              <Paperclip
                size={20}
                color={ready ? "#FAFAFA" : "#FAFAFA/50"}
                className="p-0"
              />
            </div>
          )
          return <Loader className="animate-spin" />;
        },

        // allowedContent({ ready, fileTypes, isUploading }) {
        //     if (!ready) return "Checking what you allow";
        //     if (isUploading) return "Seems like stuff is uploading";
        //     return `Stuff you can upload: ${fileTypes.join(", ")}`;
        //   },
      }}
      appearance={{
        container: "w-fit p-0 m-2",
        button: ({ ready }) => `
          bg-primary
          hover:bg-[#ef7d00]
          rounded-xl
          transition-colors
          w-fit
          py-2
          px-3
          h-8
          ${!ready ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `
      }}
    />
  )
}
