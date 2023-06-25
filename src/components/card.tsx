import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  genre: string;
}

export const Card = ({
  id,
  title,
  short_description,
  thumbnail,
  genre,
}: CardProps) => {
  return (
    <Link href={`${id}`} className="relative block rounded-md overflow-hidden bg-zinc-900 max-w-[300px] h-[375px] md:h-[325px] lg:h-[375px] shadow-sm shadow-black hover:scale-105 group">
      <div className="relative">
        <Image
          src={thumbnail}
          alt={`Image of the game ${title}`}
          width={300}
          height={200}
          className="group-hover:opacity-90 gilt"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
      </div>

      <div className="py-3 px-5">
        <h3 className="text-zinc-100 font-medium text-lg">{title}</h3>

        <p className="text-zinc-300 text-xs py-2">{short_description}</p>
        <p className="text-zinc-300 text-xs absolute bottom-5">Genre: {genre}</p>
      </div>
    </Link>
  );
};
