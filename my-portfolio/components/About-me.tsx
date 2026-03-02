import { CardLanguageStudying } from "@/components/Cards/CardLanguageStudying";
import { CardFrameworkStudying } from "@/components/Cards/CardFrameworkStudying";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col w-full p-3 pt-[70px] mt-6 mb-6
      justify-center items-center"
    >
      <div className="mb-5">
        <h1 className="text-3xl text-[#2D2D2D] font-[Georgia] font-bold">
          Sobre Mim
        </h1>
      </div>
      <div>
        <p className="max-w-xl max-sm:text-sm text-xl max-sm:text-justify text-center  text-[#2D2D2D] font-[Arial] opacity-80 mx-auto">
          Estudo linguagens Front-end, com o intuito de aprimorar minhas
          habilidades como programador e está sempre atualizando meus
          conhecimentos nas tecnologias que estão mais em alta no mercado de
          trabalho.
        </p>
      </div>
      <div className=" flex justify-center max-sm:flex-col gap-4">
        <CardLanguageStudying />
        <CardFrameworkStudying />
      </div>
    </div>
  );
}
