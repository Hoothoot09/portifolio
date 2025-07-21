import { CardTodoList } from "./Cards/CardTodoList";
import { CardAzevedoStore } from "./Cards/CardAzevedoStore";

export default function MyProjects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full mx-auto p-4 pt-[70px] bg-[#E0E0E0]"
    >
      <div className="mb-5">
        <h1 className="text-3xl text-center text-[#2D2D2D] font-bold">
          Projetos em Destaques
        </h1>
      </div>
      <p className="text-xl text-center text-[2D2D2D] opacity-80 max-w-xl mb-8">
        Meus trabalhos e projetos pessoais mais recentes.
      </p>
      <div className="flex max-lg:flex-col w-full justify-center gap-10 mb-6">
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
