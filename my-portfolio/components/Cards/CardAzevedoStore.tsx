import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function CardAzevedoStore() {
  return (
    <Card className="border-[#D2D2D2] rounded-lg shadow-lg">
      <CardHeader>
        <div>
          <Image src="/" alt="Imagem do projeto" width={230} height={130} />
          <div className="flex justify-end mt-2 gap-3">
            <Link href={"/"}>
              <button className="bg-[#CC0000] rounded-md p-2">
                <Image
                  src={"/arrow-up-right-from-square.svg"}
                  alt="arrow up right from square icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
            <Link href={"/"}>
              <button className="flex justify-center items-center bg-[#B4A76C] rounded-md p-2 ">
                <Image
                  src={"/github.svg"}
                  alt="GitHub icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h2 className="text-2xl text-center text-[#2D2D2D] font-bold">
            Azevedo Store
          </h2>
        </div>
        <p className="text-lg text-[#2D2D2D] opacity-80">
          Loja virtual desenvolvida para a venda de produtos voltado para o jogo
          CS:GO 2, nesse site os usuários poderiam comprar skins para modificar
          as suas armas.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap w-full justify-center gap-3">
          <Badge className="bg-[#CC0000] text-white rounded-xl">Next.js</Badge>
          <Badge className="bg-[#B4A76C] text-[#2D2D2D] rounded-xl">
            TypeScript
          </Badge>
          <Badge className="bg-[#CC0000] text-white rounded-xl">
            JavaScript
          </Badge>
          <Badge className="bg-[#B4A76C] text-[#2D2D2D] rounded-xl">
            TailWind CSS
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
