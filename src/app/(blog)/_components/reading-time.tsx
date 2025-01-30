function estimateReadingTime(html: string) {
  // Strip HTML tags
  const plainText = html.replace(/<[^>]+>/g, "");

  // Count words
  const wordCount = plainText.trim().split(/\s+/).length;

  // Assume average reading speed: 200 words per minute
  const readingSpeed = 200;

  // Calculate reading time in minutes
  const readingTime = Math.ceil(wordCount / readingSpeed);

  return `${readingTime}`;
}

export default estimateReadingTime;
