import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

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
        
      </head>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}