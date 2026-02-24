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
    <Card className="flex flex-col gap-4 mt-6 border border-[#d2d2d2] p-4 rounded-lg bg-white shadow-md max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2D2D2D] font-[Georgia] font-bold">
          Designer UI/UX
        </CardTitle>
        <CardDescription className="text-lg text-[#2D2D2D] font-[Arial] opacity-80">
          Estou aprimorando minhas habilidades com reponsividade, design e
          usabilidade, focando em criar interfaces intuitivas e atraentes. Para
          qualquer tipo de usuários.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2 mt-2">
        <Badge className="mt-2 text-[#2D2D2D] font-[Arial] bg-[#B4A76C] rounded-xl">
          Tailwind CSS
        </Badge>
      </CardContent>
    </Card>
  );
}
