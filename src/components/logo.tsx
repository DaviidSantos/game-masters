import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="py-3 w-10/12 mx-auto z-50 absolute">
        <Link
          href={"./"}
          className={`text-zinc-100 tracking-tighter text-2xl font-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
        >
          Game Masters
        </Link>
      </div>
    </div>
  );
};
