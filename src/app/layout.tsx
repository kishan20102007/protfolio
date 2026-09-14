import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Gunnireddy JaiKishanReddy | Full-Stack Web Developer & AI Creative Developer",
    template: "%s | Jai Kishanreddy",
  },
  description:
    "Portfolio of Gunnireddy JaiKishanReddy — Full-Stack Web Developer and AI Creative Developer building modern websites, landing pages, 3D web experiences, UI/UX designs, and AI-powered creative content.",
  keywords: [
    "Full-Stack Web Developer",
    "AI Creative Developer",
    "freelance web developer",
    "landing pages",
    "UI/UX design",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title:
      "Gunnireddy JaiKishanReddy | Full-Stack Web Developer & AI Creative Developer",
    description:
      "Portfolio of Gunnireddy JaiKishanReddy — Full-Stack Web Developer and AI Creative Developer building modern websites, landing pages, 3D web experiences, UI/UX designs, and AI-powered creative content.",
    siteName: site.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gunnireddy JaiKishanReddy | Full-Stack Web Developer & AI Creative Developer",
    description:
      "Portfolio of Gunnireddy JaiKishanReddy — Full-Stack Web Developer and AI Creative Developer building modern websites, landing pages, 3D web experiences, UI/UX designs, and AI-powered creative content.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
