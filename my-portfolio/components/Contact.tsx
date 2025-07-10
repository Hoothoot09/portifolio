import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contacts" className="flex flex-col w-full p-2 bg-[#E0E0E0]">
      <h1 className="text-3xl text-center text-[#2D2D2D] font-bold mt-4 mb-4">
        Vamos Trabalhar Juntos!
      </h1>
      <p className="text-xl text-[#2D2D2D] opacity-80 mb-8">
        Estou sempre interessados em novas oportunidades para me desafiar e me
        desenvolver minhas habilidades.
      </p>
      <div className="flex flex-col w-full items-center gap-3">
        <Link
          href={"mailto:andreicarvalho1370@gmail.com"}
          className="w-full justify-center"
        >
          <button className="flex w-full items-center justify-center bg-[#CC0000] text-white p-2 rounded-md gap-2">
            <Image
              src={"/envelope-white.svg"}
              alt="white envelope icon"
              width={20}
              height={20}
            />
            andreicarvalho1370@gmail.com
          </button>
        </Link>
        <Link href={"/"} className="w-full">
          <button className="flex w-full justify-center items-center p-2 bg-white border border-[#B4A76C] text-[#B4A76C] rounded-md gap-2">
            <Image
              src={"/download-gold.svg"}
              alt="gold download icon"
              width={18}
              height={18}
            />
            Baixar Curriculo
          </button>
        </Link>
      </div>
    </div>
  );
}
