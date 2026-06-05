import type { MetadataRoute } from "next";
import { SITE_URL } from "./site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow everyone, including AI assistants' crawlers
      // (GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Google-Extended, etc.)
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
