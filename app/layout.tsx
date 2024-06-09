import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Providers>
          <Navbar/>
          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
