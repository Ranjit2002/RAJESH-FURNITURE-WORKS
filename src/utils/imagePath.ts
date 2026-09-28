/**
 * Utility to resolve image paths correctly across both local development (localhost)
 * and production deployment (such as GitHub Pages with repository subpath).
 */
export function getAssetPath(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  // Avoid duplicating basePath if already prepended
  if (basePath && (normalizedSrc === basePath || normalizedSrc.startsWith(`${basePath}/`))) {
    return normalizedSrc;
  }

  return `${basePath}${normalizedSrc}`;
}
