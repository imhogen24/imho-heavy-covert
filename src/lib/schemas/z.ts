import { z } from "zod";

import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(5000, "Message cannot exceed 5000 characters"),
  files: UploadedFilesSchema,
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

/**
 * Form-input shape: fields with a zod `.default()` are optional before parsing.
 * `useForm` needs this as its input generic, with the parsed type as its output.
 */
export type ContactFormInput = z.input<typeof ContactFormSchema>;
