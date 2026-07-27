import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contacts" className="flex flex-col w-full p-2 bg-[#E0E0E0]">
      <h1 className=" max-sm:text-2xl text-3xl text-center text-[#2D2D2D] font-[Georgia] font-bold mt-4 mb-4">
        Vamos Trabalhar Juntos!
      </h1>
      <p className="max-sm:text-sm text-xl max-sm:text-justify text-center text-[#2D2D2D] font-[Arial] opacity-80 mb-8">
        Estou sempre aberto a novas oportunidades e desafios. Se você está
        procurando um desenvolvedor dedicado e apaixonado por criar soluções
        inovadoras, não hesite em entrar em contato comigo. Estou ansioso para
        ouvir sobre seu projeto e discutir como posso contribuir para o seu
        sucesso.
      </p>
      <div className="flex max-md:flex-col w-full min-lg:px-96 items-center gap-3 mb-5">
        <Link
          href={"mailto:andreicarvalho1370@gmail.com"}
          className="flex w-full items-center justify-center bg-[#CC0000] hover:bg-[#990000] border border-[#CC0000] text-white font-[Arial] p-2 rounded-md gap-2"
        >
          <Image
            src={"/envelope-white.svg"}
            alt="white envelope icon"
            width={18}
            height={18}
          />
          andreicarvalho1370@gmail.com
        </Link>
      </div>
    </div>
  );
}
