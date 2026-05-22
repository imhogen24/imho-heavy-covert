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
    return src;
  }

  const parts = src.split("/upload/");
  if (parts.length !== 2) return src;

  return `${parts[0]}/upload/w_${width},q_${quality ?? 75},f_auto/${parts[1]}`;
}
