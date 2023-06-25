import React from "react";
import Image from "next/image";

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
    <div
      className="relative block rounded-md overflow-hidden bg-stone-900 max-w-[300px] h-[400px] shadow-sm shadow-black hover:scale-105 group border border-zinc-700"
    >
      <div className="relative">
        <Image
          src={thumbnail}
          alt={`Image of the game ${title}`}
          width={300}
          height={200}
          className="group-hover:opacity-90 gilt"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900"></div>
      </div>

      <div className="py-3 px-5">
        <h3 className="text-zinc-100 font-medium text-lg">{title}</h3>

        <p className="text-zinc-300 text-xs">{short_description}</p>
        <p className="text-zinc-300 text-xs absolute bottom-3">
          Genre: {genre}
        </p>
      </div>
    </div>
  );
};
