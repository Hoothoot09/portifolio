import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h1>Vamos Trabalhar Juntos!</h1>
      <p>
        Estou sempre interessados em novas oportunidades para me desafiar e me
        desenvolver minhas habilidades.
      </p>
      <div>
        <Link href={"/"}>
          <button>
            <Image src={"/"} alt="/" width={1} height={1} />
            andreicarvalho1370@gmail.com
          </button>
        </Link>
        <Link href={"/"}>
          <button>
            <Image src={"/"} alt="/" width={1} height={1} />
            Baixar Curriculo
          </button>
        </Link>
      </div>
    </div>
  );
}
