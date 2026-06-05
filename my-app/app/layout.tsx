import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, PERSON } from "./site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${PERSON.name} — ${PERSON.jobTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s · ${PERSON.name}`,
  },
  description: PERSON.description,
  applicationName: `${PERSON.name} Portfolio`,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  keywords: [
    PERSON.name,
    "Raven Zamora developer",
    "fullstack developer Philippines",
    "Next.js developer",
    "freelance web developer",
    ...PERSON.knowsAbout,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title,
    description: PERSON.description,
    siteName: `${PERSON.name} Portfolio`,
    locale: "en_US",
    firstName: PERSON.firstName,
    lastName: PERSON.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: PERSON.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Person schema — the structured data Google's Knowledge Graph and
// AI assistants read to understand who you are and what you do.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  url: SITE_URL,
  jobTitle: PERSON.jobTitle,
  description: PERSON.description,
  email: `mailto:${PERSON.email}`,
  sameAs: PERSON.sameAs,
  knowsAbout: PERSON.knowsAbout,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
