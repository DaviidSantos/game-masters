import { Logo } from "@/components/logo";
import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className={`${inter.className} min-h-screen w-screen bg-zinc-950`}>
        <Logo />
        {children}
      </body>
    </html>
  );
}
