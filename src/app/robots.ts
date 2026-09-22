import { MetadataRoute } from "next";
import { company } from "@/data/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = company.domain;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
