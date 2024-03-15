import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaGenerator } from "./meta";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> =>
  await metaGenerator();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-[1400px] mx-auto text-mobile sm:text-desktop">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
