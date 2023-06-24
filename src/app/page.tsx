import heroImage from "@/assets/hero-image.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="absolute top-0">
        <div className="relative">
          <Image
            src={heroImage}
            alt="Hero image"
            className="object-cover object-center  w-full aspect-1 sm:aspect-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </div>

        <div className="absolute w-full top-40 sm:top-60 flex justify-center flex-col">
          <h2 className="text-zinc-100 font-black text-4xl sm:text-5xl text-center uppercase w-72 sm:w-100 mx-auto [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Beautiful Games, Intense Realities
          </h2>
          <p className="text-zinc-200 text-center mt-6 text-sm sm:text-lg w-72 sm:w-100 mx-auto">
            Welcome to Game Masters, here you find the best games to start your
            new journey! Click bellow to browse all games.
          </p>

          <Link
            href="./games"
            role="button"
            className="text-sm sm:text-base p-2 sm:p-3 rounded-lg text-white bg-cyan-800 mx-auto mt-7 hover:bg-cyan-700"
          >
            Browse all games
          </Link>
        </div>
      </div>
    </div>
  );
}
