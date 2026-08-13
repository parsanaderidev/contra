import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contra Labs - Powered by Contra",
  description:
    "The frontier human data and evaluation lab for creative AI. 1.5M+ verified creative experts setting the benchmark for style, tone, and taste with next-gen creative tools.",
  icons: {
    icon: "https://framerusercontent.com/images/ad9QMg1dkuNLiP0Zn1VXueDGkyQ.png",
    apple:
      "https://framerusercontent.com/images/9ANKERnU5bj7N9zrZCqn050hFMQ.png",
  },
  openGraph: {
    type: "website",
    title: "Contra Labs - Powered by Contra",
    description:
      "The frontier human data and evaluation lab for creative AI. 1.5M+ verified creative experts setting the benchmark for style, tone, and taste with next-gen creative tools.",
    images: [
      "https://framerusercontent.com/assets/3VWbqj3oSlaixwW5FS0stUsdR7g.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contra Labs - Powered by Contra",
    description:
      "The frontier human data and evaluation lab for creative AI. 1.5M+ verified creative experts setting the benchmark for style, tone, and taste with next-gen creative tools.",
    images: [
      "https://framerusercontent.com/assets/3VWbqj3oSlaixwW5FS0stUsdR7g.png",
    ],
  },
  alternates: {
    canonical: "https://contralabs.com/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-redirect-timezone="1">
      <body>{children}</body>
    </html>
  );
}