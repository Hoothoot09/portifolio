import {Badge} from "@/components/ui/badge";

export default function AboutMe() {
  return (
    <div className="flex flex-col w-full p-3 mt-6 justify-center items-center">
     <div className="mb-5">
      <h1 className="text-3xl text-[#2D2D2D] font-bold">Sobre Mim</h1>
     </div>
     <div>
      <p className="max-w-xl text-xl text-[#2D2D2D] opacity-80 mx-auto">Estou à 1 ano e meio estudando sobre linguagens de Front-End, aprimorando e desenvolvendo minhas habilidades.</p>
     </div>
     <div className="flex flex-col gap-4 mt-6 border border-[#d2d2d2] p-4 rounded-lg bg-white shadow-md max-w-3xl">
      <div>
       <h3 className="text-2xl font-bold">Desenvolvimento Front-End</h3>
      </div>
      <div>
       <p className="text-lg text-[#2D2D2D] opacity-80">Especialista em React e Next.js. Aprendiz de TypeScript e Tailwind CSS.</p>
       <div className="flex flex-wrap gap-2 mt-2">
        <Badge className="mt-2 text-white bg-[#C50000] rounded-xl">React</Badge>
        <Badge className="mt-2 text-[#2D2D2D] bg-[#B4A76C] rounded-xl">Next.js</Badge>
        <Badge className="mt-2 text-white bg-[#C50000] rounded-xl">TypeScript</Badge>
        <Badge className="mt-2 text-[#2D2D2D] bg-[#B4A76C] rounded-xl">Tailwind CSS</Badge>
       </div>
      </div>
     </div>
    </div>
  );
}