import Image from "next/image";

export default function SelfIntroduction() {
  return (
    <div>
      <div className="flex gap-1 items-center">
       <Image src="/localization.svg" alt="localization icon" width={12} height={12}/>
       <span className="text-[#2D2D2D]">Salvador, BA</span>
      </div>
      <div>
        <h1 className="text-[#2D2D2D] font-bold text-4xl">Desenvolvedor Front-End & <span className="text-[#990000]">Designer UI/UX</span></h1>
        <p>Sou um desenvolvedor Front-End e Designer UI/UX, estou à 1 ano meio programando, criando projetos pessoais para aprimorar minhas habilidades como programador. Procuro oportunidades para entrar no mercado de trabalho e me desenvolver profissionalmente.</p>
      </div>
    </div>
  )
}