import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();



// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    fileAttachment: f({
        image: {
            maxFileSize: "16MB",
            maxFileCount: 5,
        },
        pdf: {
            maxFileSize: "16MB",
            maxFileCount: 5,
        }
    })

        .onUploadComplete(async ({ metadata, file }) => {
            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return {
                fileUrl: file.url
            }
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
