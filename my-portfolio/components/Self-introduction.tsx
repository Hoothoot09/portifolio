import Image from "next/image";
import Link from "next/link";

export default function SelfIntroduction() {
  return (
    <div>
      <div className="flex gap-1 items-center">
       <Image src="/localization.svg" alt="localization icon" width={12} height={12}/>
       <span className="text-[#2D2D2D]">Salvador, BA</span>
      </div>
      <div className="">
        <h1 className="text-[#2D2D2D] font-bold text-4xl pb-7">Desenvolvedor Front-End & <span className="text-[#990000]">Designer UI/UX</span></h1>
        <p className="text-[#2D2D2D] opacity-80 text-lg font-[Arial] pb-6">Sou um desenvolvedor Front-End e Designer UI/UX, estou à 1 ano meio programando, criando projetos pessoais para aprimorar minhas habilidades como programador. Procuro oportunidades para entrar no mercado de trabalho e me desenvolver profissionalmente.</p>
        <Link href="#projects"><button className="flex w-full gap-2 justify-center items-center bg-[#CC0000] text-white p-2 rounded-md">Ver meu trabalho <Image src="/arrow-right.svg" alt="arrow right icon" width={12} height={12}/></button></Link>
        <Link href="/"><button className="flex w-full border rounded-md justify-center gap-2 mt-3 p-1.5 text-[#2D2D2D]"><Image src="/envelope.svg" alt="envelope" width={16} height={16} />Entre em Contato</button></Link>
        <div className="flex gap-2 mt-4 justify-center items-center">
         <Link href="https://github.com/Hoothoot09?tab=overview&from=2025-05-01&to=2025-05-13"><button className=""><Image src="/github-mark.svg" alt="Github icon" width={24} height={24}/></button></Link>
         <Link href=""><button><Image src="" alt="" width={1} height={1}/></button></Link>
         <Link href=""><button><Image src="" alt="" width={1} height={1}/></button></Link>
        </div>
      </div>
    </div>
  )
}