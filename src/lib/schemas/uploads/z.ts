import { z } from "zod";

/**
 * An uploaded file as the dropzones record it: `<UploadThing URL>,<file name>`.
 * Only UploadThing-hosted URLs are accepted, so a submission can't smuggle
 * arbitrary links into the admin emails and the database.
 */
const UPLOADED_FILE =
  /^https:\/\/(utfs\.io|[a-z0-9]+\.ufs\.sh)\/f\/[^,\s]+(,.+)?$/;

// The `fileAttachment` route allows 5 images and 5 PDFs per upload.
export const UploadedFilesSchema = z
  .array(
    z
      .string()
      .max(500, { error: "File attachment URL is too long" })
      .regex(UPLOADED_FILE, { error: "Invalid file attachment" }),
  )
  .max(10, { error: "You can attach at most 10 files" })
  .default([]);
