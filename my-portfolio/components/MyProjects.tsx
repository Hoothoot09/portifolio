import { CardTodoList } from "./Cards/CardTodoList";
import { CardAzevedoStore } from "./Cards/CardAzevedoStore";

export default function MyProjects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center max-w-7xl mx-auto p-4 pt-[53px]"
    >
      <div className="mb-5">
        <h1 className="text-3xl text-center text-[#2D2D2D] font-bold">
          Projetos em Destaques
        </h1>
      </div>
      <p className="text-xl text-[2D2D2D] opacity-80 max-w-xl mb-6">
        Meus trabalhos e projetos pessoais mais recentes.
      </p>
      <div className="mb-5">
        <CardTodoList />
      </div>
      <div>
        <CardAzevedoStore />
      </div>
    </div>
  );
}
