import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Graph Explorer | @samdevrel",
  description: "Explore Lens Protocol social graphs. View profiles, followings, and posts on-chain.",
  keywords: ["Lens Protocol", "social graph", "Farcaster", "Web3 social", "NFT profile"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
