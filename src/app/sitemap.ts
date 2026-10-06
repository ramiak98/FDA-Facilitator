import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/service-details";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/industries", "/about", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
    })),
    ...serviceDetails.map((d) => ({
      url: `${site.url}/services/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
