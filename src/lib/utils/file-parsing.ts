import { type FileAttachment } from "@/types/form-preview";

/**
 * Parses a file attachment string into a structured object
 *
 * @param fileString - String in format "url,filename" or just a URL
 * @returns FileAttachment object with url and name properties
 *
 * @example
 * ```typescript
 * parseFileAttachment("https://example.com/file.pdf,Important Document.pdf")
 *
 * parseFileAttachment("https://example.com/file.pdf")
 * ```
 */
export function parseFileAttachment(fileString: string): FileAttachment {
  try {
    // Split by comma to separate URL and filename
    const parts = fileString.split(",");

    if (parts.length >= 2) {
      // First part is URL, second part is filename
      return {
        url: parts[0].trim(),
        name: parts[1].trim(),
      };
    }

    // Fallback: extract filename from URL
    const url = fileString.trim();
    const name = url.split("/").pop() || "Attachment";

    return { url, name };
  } catch (error) {
    console.error("Error parsing attachment:", fileString);
    return {
      url: "#",
      name: "Invalid attachment format",
    };
  }
}

/**
 * Checks if a section has any meaningful content to display
 *
 * @param fields - Array of field values to check
 * @returns true if any field has non-empty content
 */
export function hasSectionContent(
  fields: (string | boolean | string[] | number | Date | undefined)[]
): boolean {
  return fields.some((field) => {
    if (Array.isArray(field)) return field.length > 0;
    if (field instanceof Date) return true; // Dates are always considered meaningful
    if (typeof field === "number") return !isNaN(field);
    return field !== undefined && field !== "" && field !== false;
  });
}
