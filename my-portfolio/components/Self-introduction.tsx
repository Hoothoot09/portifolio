"use client";

import Image from "next/image";
import Link from "next/link";

export default function SelfIntroduction() {
  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-lg:flex items-center justify-center min-md:gap-10 min-lg:gap-20 max-sm:py-0 py-10 min-xl:px-30">
      <div className="min-md:flex min-sm:flex-wrap min-md:flex-col">
        <div className="flex gap-1 items-center">
          <Image
            src="/localization.svg"
            alt="localization icon"
            width={12}
            height={12}
          />
          <span className="text-[#2D2D2D] font-[Roboto]">Salvador, BA</span>
        </div>
        <h1 className="text-[#2D2D2D] font-[Georgia] font-bold max-sm:text-3xl text-4xl pb-7">
          Desenvolvedor Front-End &{" "}
          <span className="text-[#990000] font-[Georgia]">Designer UI/UX</span>
        </h1>
        <p className="text-[#2D2D2D] opacity-80 max-sm:text-sm max-sm:text-justify text-xl font-[Arial] max-sm:pb-4 pb-6">
          Sou um desenvolvedor Front-End e Designer UI/UX, estou à procura de
          uma oportunidade no mercado de trabalho, estou 2 anos programando e
          desenvolvendo projetos pessoais, visando sempre a melhoria contínua
          das minhas habilidades. Meu objetivo é aplicar meus conhecimentos em
          novos projetos, contribuindo para novas ideias e soluções inovadoras,
          em busca de acrescentar valor à empresa e para equipe.
        </p>
        <div className="min-lg:flex gap-3 max-lg:items-center">
          <button
            onClick={(e) => {
              handleClick(e, "projects");
            }}
            className="flex max-lg:w-full w-60 border rounded-md justify-center items-center gap-2 p-2 bg-[#CC0000] hover:bg-[#990000] text-white font-[Arial] cursor-pointer group"
          >
            Ver meu trabalho
            <Image
              src="/arrow-right.svg"
              alt="arrow right icon"
              width={12}
              height={12}
              className="transition-transform duration-300 group-hover:translate-x-3"
            />
          </button>
          <Link
            href="mailto:andreicarvalho1370@gmail.com"
            className="flex max-lg:w-full w-60 border rounded-md justify-center items-center p-2 gap-2 max-lg:mt-3 text-[#2D2D2D] font-[Arial]"
          >
            <Image
              src="/envelope-gray-dark.svg"
              alt="envelope"
              width={16}
              height={16}
            />
            Entre em Contato
          </Link>
        </div>
        <div className="flex max-md:gap-5 gap-7 max-md:mt-4 mt-7 max-lg:justify-center">
          <Link
            href="https://github.com/Hoothoot09?tab=overview&from=2025-05-01&to=2025-05-13"
            className="p-1.5 rounded-md hover:bg-gray-50"
          >
            <Image
              src="/github-mark.svg"
              alt="Github icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrei-soares/"
            className="p-1.5 rounded-md hover:bg-gray-50"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="mailto:andreicarvalho1370@gmail.com"
            className="p-1.5 rounded-md hover:bg-gray-50"
          >
            <Image
              src="/envelope-gray-dark.svg"
              alt="envelope"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute w-70 h-70 bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-full blur-3xl opacity-20"></div>
        <div className="relative w-70 h-70 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/me.jpg"
            width={300}
            height={300}
            alt="Andrei Soares"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
