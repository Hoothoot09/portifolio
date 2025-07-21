import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#2D2D2D] p-2 min-lg:px-80">
      <div className="min-lg:flex min-lg:justify-between">
        <h2 className="text-2xl text-center text-white font-bold py-10">
          Andrei Soares
        </h2>
        <div className="flex justify-center items-center min-lg:gap-3 gap-6">
          <Link
            href={
              "https://github.com/Hoothoot09?tab=overview&from=2025-05-01&to=2025-05-13"
            }
            className="p-3 hover:bg-[#E0E0E0]/20 rounded-md"
          >
            <Image
              src={"/github-white.svg"}
              alt="white github icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/andrei-soares/"}
            className="p-3 hover:bg-[#E0E0E0]/20 rounded-md"
          >
            <Image
              src={"/linkedin-white.svg"}
              alt="white linkedin icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href={"mailto:andreicarvalho1370@gmail.com"}
            className="p-3 hover:bg-[#E0E0E0]/20 rounded-md"
          >
            <Image
              src={"/envelope-white.svg"}
              alt="white envelope"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center text-white/70 mt-4 mb-4 border-t border-white/20 pt-8">
          © 2025 Andrei Soares. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
