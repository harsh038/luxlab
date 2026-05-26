import type { MetadataRoute } from "next";
import { categories, listings, locations } from "@/lib/data";

const baseUrl = "https://aureluxe.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/listings", "/pricing", "/blog", "/dashboard", "/admin"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const listingRoutes = listings.map((listing) => ({
    url: `${baseUrl}/listings/${listing.slug}`,
    lastModified: new Date()
  }));

  const locationRoutes = locations.map((location) => ({
    url: `${baseUrl}/luxury-homes/${location.toLowerCase().replaceAll(" ", "-")}`,
    lastModified: new Date()
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/${category.toLowerCase().replaceAll(" ", "-")}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...listingRoutes, ...locationRoutes, ...categoryRoutes];
}
