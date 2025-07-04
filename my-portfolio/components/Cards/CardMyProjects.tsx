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
    <Card>
      <CardHeader>
        <div>
          <Image src="/" alt="Imagem do projeto" width={250} height={130} />
          <div className="flex justify-end mt-2 gap-3">
            <Link href="/">
              <button className="bg-[#C50000] rounded-md p-2">
                <Image
                  src={"/arrow-up-right-from-square.svg"}
                  alt="arrow up right from square icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
            <button>GitHub</button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h2>TodoList</h2>
        <p>
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
