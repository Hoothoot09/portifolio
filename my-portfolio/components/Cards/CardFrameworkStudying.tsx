import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CardFrameworkStudying() {
  return (
    <Card className="flex flex-col gap-4 mt-6 border border-[#d2d2d2] max-md:p-3 p-4 rounded-lg bg-white shadow-md min-sm:w-[300px]">
      <CardHeader className="p-0">
        <CardTitle className="max-md:text-xl text-2xl text-[#2D2D2D] font-[Georgia] font-bold">
          Design UI/UX
        </CardTitle>
        <CardDescription className="max-md:text-sm text-md text-[#2D2D2D] font-[Arial] opacity-80">
          Meu principal objetivo é conseguir criar interface para todo tipo de
          usuários, com foco em acessibilidade e usabilidade, para que todos
          possam ter uma experiência agradável ao utilizar o sistema,
          independente de suas habilidades ou limitações, garantindo que todos
          tenham a mesma oportunidade de utilizar o sistema de forma eficiente e
          satisfatória, sem qualquer tipo de barreira ou dificuldade.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2 mt-2">
        <Badge className="mt-2 text-white font-[Arial] bg-[#C50000] rounded-xl">
          CSS
        </Badge>
        <Badge className="mt-2 text-[#2D2D2D] font-[Arial] bg-[#B4A76C] rounded-xl">
          Tailwind CSS
        </Badge>
      </CardContent>
    </Card>
  );
}
