import { CardTodoList } from "./Cards/CardTodoList";
import { CardAzevedoStore } from "./Cards/CardAzevedoStore";

export default function MyProjects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full mx-auto p-4 max-sm:pt-[65px] pt-[70px] bg-[#E0E0E0]"
    >
      <div className="mb-5">
        <h1 className="max-sm:text-2xl text-3xl text-center text-[#2D2D2D] font-[Georgia] font-bold">
          Projetos em Destaques
        </h1>
      </div>
      <p className="max-sm:text-sm text-xl text-center text-[2D2D2D] font-[Arial] opacity-80 max-w-xl mb-8">
        Meus trabalhos e projetos pessoais mais recentes.
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
