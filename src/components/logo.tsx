import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="py-3 w-11/12 mx-auto">
      <Link
        href={"./"}
        className={`text-zinc-100 tracking-tighter text-xl font-black`}
      >
        Game Masters
      </Link>
    </div>
  );
};
