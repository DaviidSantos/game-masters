import { Logo } from "@/components/logo";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import gamesImage from "@/assets/home-image.png";

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
      <body className={`${inter.className} min-h-screen bg-zinc-900`}>
        <Logo />
        
        {children}
      </body>
    </html>
  );
}
