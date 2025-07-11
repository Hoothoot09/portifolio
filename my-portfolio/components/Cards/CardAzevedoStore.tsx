import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function CardAzevedoStore() {
  return (
    <div className="flex md:flex-cols-2 lg:flex-cols-3 gap-8">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-[#D2D2D2] pt-0">
        <div className="relative overflow-hidden">
          <Image
            src="/"
            alt="Imagem do projeto"
            width={200}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="flex justify-end mt-2 gap-3">
            <Link href={"https://azevedo-store-sigma.vercel.app/"}>
              <button className="bg-[#CC0000] rounded-md p-2">
                <Image
                  src={"/arrow-up-right-from-square.svg"}
                  alt="arrow up right from square icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
            <Link href={"https://github.com/Hoothoot09/azevedo-store"}>
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
        <div className="bg-white">
          <CardHeader className="mb-4">
            <CardTitle className="text-2xl text-center text-[#2D2D2D] font-bold">
              Azevedo Store
            </CardTitle>
            <CardDescription className="text-[#2D2D2D] opacity-70">
              Loja virtual desenvolvida para a venda de produtos voltado para o
              jogo CS:GO 2, nesse site os usuários poderiam comprar skins para
              modificar as suas armas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap w-full justify-center gap-3">
            <Badge className="bg-[#CC0000] text-white rounded-xl">
              Next.js
            </Badge>
            <Badge className="bg-[#B4A76C] text-[#2D2D2D] rounded-xl">
              TypeScript
            </Badge>
            <Badge className="bg-[#CC0000] text-white rounded-xl">
              JavaScript
            </Badge>
            <Badge className="bg-[#B4A76C] text-[#2D2D2D] rounded-xl">
              TailWind CSS
            </Badge>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
