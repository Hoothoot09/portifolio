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
    <div className="min-lg:flex items-center justify-center min-md:gap-10 min-lg:gap-20 min-xl:mr-10 py-10 min-xl:px-30">
      <div className="min-lg:flex min-md:flex-wrap min-md:flex-col">
        <div className="flex gap-1 items-center">
          <Image
            src="/localization.svg"
            alt="localization icon"
            width={12}
            height={12}
          />
          <span className="text-[#2D2D2D] font-[Roboto]">Salvador, BA</span>
        </div>
        <h1 className="text-[#2D2D2D] font-[Georgia] font-bold text-4xl pb-7">
          Desenvolvedor Front-End &{" "}
          <span className="text-[#990000] font-[Georgia]">Designer UI/UX</span>
        </h1>
        <p className="text-[#2D2D2D] opacity-80 text-xl font-[Arial] pb-6">
          Sou um desenvolvedor Front-End e Designer UI/UX, estou quase 2 anos
          programando, criando projetos pessoais para aprimorar minhas
          habilidades como programador. Estou em busca de oportunidades para
          entrar no mercado de trabalho e me desenvolver profissionalmente.
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
      <div className="relative mb-8">
        <div className="flex justify-center relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-full blur-3xl opacity-20"></div>
          <Image
            src="/me.png"
            alt="Andrei Soares"
            width={800}
            height={800}
            className="relative rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
