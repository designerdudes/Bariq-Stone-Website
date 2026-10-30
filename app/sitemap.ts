import { MetadataRoute } from "next"
import { GRANITE_VARIETIES } from "@/lib/granite-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bariqstone.com"

  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/packaging",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const productRoutes = GRANITE_VARIETIES.map((item) => ({
    url: `${baseUrl}/products/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...routes, ...productRoutes]
}
