export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!src.includes("res.cloudinary.com")) {
    // For non-Cloudinary URLs (local files, other CDNs), pass through with
    // width in the query so Next.js validation passes. Static file serving
    // ignores unknown query params.
    const sep = src.includes("?") ? "&" : "?";

    return `${src}${sep}w=${width}`;
  }

  const parts = src.split("/upload/");

  if (parts.length !== 2) return src;

  return `${parts[0]}/upload/w_${width},q_${quality ?? 75},f_auto/${parts[1]}`;
}
