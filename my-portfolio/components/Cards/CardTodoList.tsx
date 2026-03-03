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

export function CardTodoList() {
  return (
    <div className="flex min-lg:w-[375px] h-full">
      <Card className="w-full group hover:shadow-xl transition-all duration-300 bg-white border-[#D2D2D2] pt-0">
        <div className="min-md:relative min-md:overflow-hidden">
          <Image
            src="/imagem-todolist.svg"
            alt="Imagem do projeto"
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-md"
          />
          <div className="min-md:absolute inset-0 bg-corporate-gray-dark/80 min-md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center max-sm:justify-end justify-center max-sm:mr-2 max-sm:mt-2 gap-4">
            <Link href={"https://todo-list-sigma-vert.vercel.app/"}>
              <button className="bg-[#CC0000] hover:bg-[#990000] rounded-md p-2 cursor-pointer">
                <Image
                  src={"/arrow-up-right-from-square.svg"}
                  alt="arrow up right from square icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
            <Link href={"https://github.com/Hoothoot09/TodoList"}>
              <button className="flex justify-center items-center bg-[#B4A76C] hover:bg-[#B4A76C]/90 rounded-md p-2 cursor-pointer">
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
            <CardTitle className="text-2xl text-center text-[#2D2D2D] font-[Georgia] font-bold">
              TodoList
            </CardTitle>
            <CardDescription className="text-[#2D2D2D] font-[Arial] opacity-70">
              Site desenvolvido para que usuários possam listar suas tarefas,
              que precisam ser realizadas diáriamente.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap w-full justify-center gap-3">
            <Badge className="bg-white border border-[#CC0000] text-[#CC0000] font-[Arial] rounded-xl">
              React
            </Badge>
            <Badge className="bg-white text-[#B4A76C] font-[Arial] border border-[#B4A76C] rounded-xl">
              JavaScript
            </Badge>
            <Badge className="bg-white border border-[#CC0000] text-[#CC0000] font-[Arial] rounded-xl">
              CSS
            </Badge>
            <Badge className="bg-white text-[#B4A76C] font-[Arial] border border-[#B4A76C] rounded-xl">
              HTML
            </Badge>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
