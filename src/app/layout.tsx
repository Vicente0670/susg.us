import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#117e2b",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://susg.us"),

  // UX
  title: "susg.us",
  description: "pretty much does everything i want",
  icons: "/favicon.ico",

  // Embed
  openGraph: {
    title: "susg.us",
    description: "pretty much does everything i want",
    images: "/favicon.png",
    authors: ["Vicente0670", "tookender"],
  },

  // SEO
  robots: "all",
  keywords: "susgus, susg.us, susg, suspicious gus, link, vicente0670, vicente 0670, vicente yt, vicente0670 yt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
