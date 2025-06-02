import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/file.svg',
      href: '/file.svg'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('antialiased', montserrat.className)}
      >
        {children}
      </body>
    </html>
  );
}
