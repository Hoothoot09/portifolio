import { CardMyProjects } from "./Cards/CardMyProjects";

export default function MyProjects() {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto p-4">
      <h1>Projetos em Destaques</h1>
      <p>Meus trabalhos e projetos pessoais mais recentes.</p>
      <CardMyProjects />
    </div>
  );
}
