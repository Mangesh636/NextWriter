import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NextWriter",
  description:
    "NextWriter is a modern platform for sharing ideas, discovering content, and engaging with a community of writers and readers.",
  keywords:
    "nextwriter, writing, blogging, content creation, posts, share ideas, follow creators, online writing platform",
  openGraph: {
    title: "NextWriter - Write, Share, Discover",
    description:
      "A modern platform for sharing ideas, discovering content, and engaging with a community of writers and readers.",
    type: "website",
    images: "/logo.jpg",
    url: "https://nextwriter.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextWriter - Write, Share, Discover",
    description:
      "A modern platform for sharing ideas, discovering content, and engaging with a community of writers and readers.",
    images: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased text-base font-normal", roboto.className)}
      >
        {children}
      </body>
    </html>
  );
}
