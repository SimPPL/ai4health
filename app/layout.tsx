import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ai4health.com"),
  title: "AI 4 Health",
  description: "Transforming Healthcare with Artificial Intelligence",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "AI 4 Health",
    description: "Transforming Healthcare with Artificial Intelligence",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AI 4 Health Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 4 Health",
    description: "Transforming Healthcare with Artificial Intelligence",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
