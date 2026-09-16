import { CardLanguageStudying } from "@/components/Cards/CardLanguageStudying";
import { CardFrameworkStudying } from "@/components/Cards/CardFrameworkStudying";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col w-full p-3 pt-[70px] max-sm:mt-0 mt-6 mb-6
      justify-center items-center"
    >
      <div className="mb-5">
        <h1 className="max-sm:text-2xl text-3xl text-[#2D2D2D] font-[Georgia] font-bold">
          Sobre Mim
        </h1>
      </div>
      <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:px-2 px-35">
        <p className="max-sm:text-sm text-xl text-justify text-[#2D2D2D] font-[Arial] opacity-80 mx-auto">
          Atualmente, venho aprimorando meus conhecimentos em desenvolvimento
          Front-End e Design de UI/UX, buscando constantemente aprender novas
          tecnologias e aperfeiçoar minhas habilidades como programador. Tenho
          como objetivo evoluir continuamente, colocando em prática os
          conhecimentos adquiridos por meio do desenvolvimento de projetos
          pessoais.
        </p>
        <p className="max-sm:text-sm text-xl text-justify  text-[#2D2D2D] font-[Arial] opacity-80 mx-auto mt-4">
          Sou apaixonado por criar interfaces intuitivas e funcionais utilizando
          o Tailwind CSS, com foco em proporcionar uma experiência positiva aos
          usuários. No momento, concentro meus estudos e projetos principalmente
          em React, Next.js e TypeScript, utilizando essas tecnologias para
          desenvolver soluções que me permitam aplicar meus conhecimentos,
          explorar novos conceitos e enfrentar desafios que contribuam para o
          meu crescimento profissional.
        </p>
      </div>
      <div className=" flex justify-center max-sm:flex-col gap-4">
        <CardLanguageStudying />
        <CardFrameworkStudying />
      </div>
    </div>
  );
}
