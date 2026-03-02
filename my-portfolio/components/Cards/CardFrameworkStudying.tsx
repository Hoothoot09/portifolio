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
          Estou aprimorando minhas habilidades com reponsividade, design e
          usabilidade, focando em criar interfaces intuitivas e atraentes. Para
          qualquer tipo de usuários.
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
