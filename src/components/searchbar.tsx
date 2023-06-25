import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export interface SeachbarProps {
  setGameTitle: (title: string) => void;
}

export const SearchBar = ({ setGameTitle }: SeachbarProps) => {
  const changeNomeProcura = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setGameTitle(e.currentTarget.value);
  };

  return (
    <div className="flex justify-center py-5">
      <div className="w-10/12 max-w-[1124px] relative">
        <input
          placeholder="Search game by the title..."
          type="text"
          className="w-full py-2 px-2 rounded-lg bg-stone-300 bg-opacity-20 border-stone-300 border text-white text-sm placeholder:text-white"
          onChange={changeNomeProcura}
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-zinc-200 absolute right-2 top-1.5" />
      </div>
    </div>
  );
};
