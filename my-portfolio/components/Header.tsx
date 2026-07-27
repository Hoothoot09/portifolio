"use client";

import Link from "next/link";
import { DropdownMenuHeader } from "./DropdownMenuHeaderMobile";

export default function Header() {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed w-full max-xl:px-5 px-30 py-4 items-center bg-white border-b border-gray-300 z-10">
      <div className="flex justify-between">
        <Link
          href={"/"}
          className="max-md:text-lg text-2xl text-[#2D2D2D] font-[Georgia] font-bold"
        >
          Andrei Soares
        </Link>
        <div className="flex justify-center items-center gap-10 max-lg:hidden">
          <button
            onClick={(e) => {
              handleClick(e, "about");
            }}
            className="p-1 text-xl text-[#2D2D2D]/70 font-[Arial] font-bold hover:text-[#CC0000] cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={(e) => {
              handleClick(e, "projects");
            }}
            className="p-1 text-xl text-[#2D2D2D]/70 font-[Arial] font-bold hover:text-[#CC0000] cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={(e) => {
              handleClick(e, "experience");
            }}
            className="p-1 text-xl text-[#2D2D2D]/70 font-[Arial] font-bold hover:text-[#CC0000] cursor-pointer"
          >
            Experiência
          </button>
          <button
            onClick={(e) => {
              handleClick(e, "contacts");
            }}
            className="p-1 text-xl text-[#2D2D2D]/70 font-[Arial] font-bold hover:text-[#CC0000] cursor-pointer"
          >
            Contato
          </button>
        </div>
        <div className="flex gap-2">
          <DropdownMenuHeader />
        </div>
      </div>
    </header>
  );
}
