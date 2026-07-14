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
      <div>
        <p className="max-sm:text-sm text-xl max-sm:text-justify text-center  text-[#2D2D2D] font-[Arial] opacity-80 mx-auto">
          Atualmente venho estudando linguagens Front-end e Designer de UI/UX,
          com foco em desenvolvimento web. Busco sempre aprender novas
          tecnologias e aprimorar minhas habilidades como programador. Sou
          apaixonado por criar interfaces intuitivas e funcionais, e estou
          sempre em busca de desafios que me permitam crescer profissionalmente.
          Hoje em dia venho estudando e criando projetos com o Next.js e
          utilizando junto a ele o framework TailwindCSS. Tenho interesse em me
          tornar um desenvolvedor Full Stack me tornando um profissional
          completo e capaz de atuar em todas as etapas do desenvolvimento de
          software.
        </p>
      </div>
      <div className=" flex justify-center max-sm:flex-col gap-4">
        <CardLanguageStudying />
        <CardFrameworkStudying />
      </div>
    </div>
  );
}
