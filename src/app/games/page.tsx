"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/card";
import useApi from "../hooks/useApi";
import { SearchBar } from "@/components/searchbar";
import Loading from "../loading";
import { Pagination } from "@/components/pagination";
import Select from "react-tailwindcss-select";
import Image from "next/image";
import homeImage from "@/assets/1017509.jpg";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  plataform: string;
  publisher: string;
  developer: string;
  release_date: Date;
  freetogame_profile_url: string;
}

export interface Genre {
  label: string;
  value: string;
}

export default function Games() {
  const {
    data: games,
    error,
    errorMessage,
    isFetching,
  } = useApi<Game[]>(
    "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/"
  );

  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [gameTitle, setGameTitle] = useState("");
  const [genres, setGenres] = useState<Genre[]>([
    { label: "Select genre", value: "Select genre" },
  ]);
  const [genre, setGenre] = useState(genres[0]);

  const changeGenre = (value: any) => {
    setGenre(value);
    if (games) {
      setFilteredGames(games?.filter((game) => game.genre === value?.value));
    }
  };

  useEffect(() => {
    if (games) {
      setFilteredGames(games);
      const uniqueGenres: Genre[] = Array.from(
        new Set(games.map((item) => item.genre))
      ).map((genre) => ({ label: genre, value: genre }));

      setGenres([...genres, ...uniqueGenres]);
    }
  }, [games]);

  useEffect(() => {
    if (games) {
      setFilteredGames(
        games.filter((game) =>
          game.title.toLowerCase().includes(gameTitle.toLowerCase())
        )
      );
    }
  }, [gameTitle]);

  const currentPageGames = filteredGames.slice(firstIndex, lastIndex);

  return (
    <div>
      <div className="relative">
        <Image
          src={homeImage}
          alt="Hero image"
          className="object-cover object-center  w-full aspect-1 sm:aspect-2"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
      </div>
      <div className="w-full absolute top-16 flex justify-center flex-col">
        <SearchBar setGameTitle={setGameTitle} />
        <div className="pb-5 w-10/12 max-w-[1124px] mx-auto flex z-50 justify-end">
          <div className="w-[300px] rounded-md">
            <Select
              onChange={changeGenre}
              value={genre}
              options={genres}
              primaryColor={"amber"} 
            />
          </div>
        </div>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <h4 className="text-zinc-100 font-black text-2xl text-center uppercase w-72 sm:w-100 mx-auto [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                {errorMessage}
              </h4>
            ) : (
              <div className="md:w-10/12 max-w-[1124px] mx-auto flex flex-col md:grid grid-cols-3 gap-5 lg:gap-x-24 gap-y-10">
                {currentPageGames?.map((game) => (
                  <div key={game.id} className="flex justify-center">
                    <Card
                      id={game.id}
                      title={game.title}
                      short_description={game.short_description}
                      thumbnail={game.thumbnail}
                      genre={game.genre}
                      key={game.id}
                    />
                  </div>
                ))}
              </div>
            )}
            {error ? (
              <></>
            ) : (
              <Pagination
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalCards={filteredGames.length}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
