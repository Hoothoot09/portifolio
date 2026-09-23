import { CardTodoList } from "./Cards/CardTodoList";
import { CardAzevedoStore } from "./Cards/CardAzevedoStore";

export default function MyProjects() {
  return (
    <div
      id="projects"
      className="flex flex-col w-full p-3 pt-[70px] max-sm:mt-0 mt-6 mb-6 justify-center items-center bg-[#E0E0E0]"
    >
      <div className="mb-5">
        <h1 className="max-sm:text-2xl text-3xl text-center text-[#2D2D2D] font-[Georgia] font-bold">
          Projetos em Destaque
        </h1>
      </div>
      <p className="max-sm:text-sm text-xl text-justify text-[2D2D2D] font-[Arial] opacity-80 w-full mb-8 px-35">
        Aqui estão alguns dos meus projetos mais recentes, desenvolvidos da
        ideia ao deploy. Cada projeto reflete minhas habilidades em
        desenvolvimento web, design de interfaces e resolução de problemas, com
        foco em criar experiências pensadas para o usuário e código funcional,
        organizado e durável. Sinta-se à vontade para explorar os projetos,
        conferir as demos ao vivo e conhecer mais sobre cada resultado.
      </p>
      <div className="flex max-lg:flex-col w-full justify-center gap-10 max-sm:mb-3 mb-6">
        <div>
          <CardTodoList />
        </div>
        <div>
          <CardAzevedoStore />
        </div>
      </div>
    </div>
  );
}
