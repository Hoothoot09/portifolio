import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#2D2D2D] p-2">
      <h2 className="text-2xl text-center text-white font-bold py-10">
        Andrei Soares
      </h2>
      <div className="flex justify-center items-center gap-6">
        <Link href={"/"}>
          <button>
            <Image
              src={"/github-white.svg"}
              alt="white github icon"
              width={20}
              height={20}
            />
          </button>
        </Link>
        <Link href={"/"}>
          <button>
            <Image
              src={"/linkedin-white.svg"}
              alt="white linkedin icon"
              width={20}
              height={20}
            />
          </button>
        </Link>
        <Link href={"mailto:andreicarvalho1370@gmail.com"}>
          <button>
            <Image
              src={"/envelope-white.svg"}
              alt="white envelope"
              width={20}
              height={20}
            />
          </button>
        </Link>
      </div>
      <p className="text-center text-white/70 mt-4 mb-4 border-t border-white/20 pt-8">
        © 2025 Andrei Soares. Todos os direitos reservados.
      </p>
    </div>
  );
}
