import { z } from "zod";

import { email, requiredText } from "@/lib/schemas/fields/z";
import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

export const ContactFormSchema = z.object({
  name: requiredText(
    1,
    100,
    "Name is required",
    "Name cannot exceed 100 characters",
  ),
  email,
  message: requiredText(
    10,
    5000,
    "Message must be at least 10 characters long",
    "Message cannot exceed 5000 characters",
  ),
  files: UploadedFilesSchema,
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

/**
 * Form-input shape: fields with a zod `.default()` are optional before parsing.
 * `useForm` needs this as its input generic, with the parsed type as its output.
 */
export type ContactFormInput = z.input<typeof ContactFormSchema>;
