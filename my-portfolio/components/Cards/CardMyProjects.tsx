import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function CardMyProjects() {
  return (
    <Card className="border-[#D2D2D2] rounded-lg shadow-lg">
      <CardHeader>
        <div>
          <Image src="/" alt="Imagem do projeto" width={230} height={130} />
          <div className="flex justify-end mt-2 gap-3">
            <Link href={"/"}>
              <button className="bg-[#C50000] rounded-md p-2">
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
            TodoList
          </h2>
        </div>
        <p className="text-lg text-[#2D2D2D] opacity-80">
          Site desenvolvido para que usuários possam listar suas tarefas, que
          precisam ser realizadas diáriamente.
        </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div>
          <Badge>React</Badge>
          <Badge>CSS</Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
