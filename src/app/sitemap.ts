import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khakikoala.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified },
    { url: `${siteUrl}/product`, lastModified },
    { url: `${siteUrl}/pricing`, lastModified },
    { url: `${siteUrl}/about`, lastModified },
    { url: `${siteUrl}/contact`, lastModified },
    { url: `${siteUrl}/legal/privacy`, lastModified },
    { url: `${siteUrl}/legal/terms`, lastModified },
  ];
}
