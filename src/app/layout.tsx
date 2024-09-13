import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "links",
  description: "social links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10  -translate-x-1/2"
          src="/gradient-background-top.webp"
          alt=""
          role="presentation"
          priority
        />
        <Footer/>
      </body>
    </html>
  );
}
