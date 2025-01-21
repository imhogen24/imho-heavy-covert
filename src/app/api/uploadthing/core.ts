import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
  messageAttachment: f({
    // Common document formats
    image: { maxFileSize: "8MB", maxFileCount: 5 },
    video: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // Basic validation
      if (!user) throw new UploadThingError("Unauthorized");

      // Return metadata
      return {
        userId: user.id,
        timestamp: new Date().toISOString(),
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code runs on your server after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File details:", {
        url: file.url,
        name: file.name,
        size: file.size,
        type: file.type,
        timestamp: metadata.timestamp,
      });

      // Return data to client
      return {
        uploadedBy: metadata.userId,
        uploadedAt: metadata.timestamp,
        fileUrl: file.url,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
