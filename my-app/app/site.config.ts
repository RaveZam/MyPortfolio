// Single source of truth for SEO / identity.
// 👉 Replace SITE_URL with your exact custom domain (no trailing slash).
export const SITE_URL = "https://ravenzamora.com";

export const PERSON = {
  name: "Raven Zamora",
  firstName: "Raven",
  lastName: "Zamora",
  jobTitle: "Freelance Fullstack Developer",
  description:
    "IT student and freelance fullstack developer building live production systems — POS, ticketing, distribution, attendance, and booking platforms.",
  email: "runielle08@gmail.com",
  // Every profile that confirms it's the same person. Critical for Google's
  // Knowledge Graph and for AI models cross-referencing your identity.
  sameAs: [
    "https://github.com/RaveZam",
    "https://www.linkedin.com/in/raven-zamora/",
    "https://www.facebook.com/ravenzamoraa",
    "https://www.instagram.com/ravenzamora.dev/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "Expo",
    "Supabase",
    "PostgreSQL",
    "SQLite",
    "TypeScript",
    "Point of Sale Systems",
    "Full-stack Web Development",
  ],
} as const;
