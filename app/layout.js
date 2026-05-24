import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Fusivox",
  description: "Software development company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className={font.className}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}