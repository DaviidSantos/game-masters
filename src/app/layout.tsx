import { Logo } from "@/components/logo";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Image from "next/image";
import gamesImage from "@/assets/home-image.png";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Game Masters",
  description: "Where all the best games are!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-zinc-950`}>
        <Logo />
        <div className="relative">
          <Image
            src={gamesImage}
            alt="Hero image"
            className="object-cover object-center  w-full aspect-1 sm:aspect-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
