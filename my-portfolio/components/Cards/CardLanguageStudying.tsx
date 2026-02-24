import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CardLanguageStudying() {
  return (
    <Card className="flex flex-col gap-4 mt-6 border border-[#d2d2d2] p-4 rounded-lg bg-white shadow-md max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2D2D2D] font-[Georgia] font-bold">
          Desenvolvimento Front-End
        </CardTitle>
        <CardDescription className="text-lg text-[#2D2D2D] font-[Arial] opacity-80">
          Estou me especializando em linguagens frontend como React, Next.js,
          TypeScript
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2 mt-2">
        <Badge className="mt-2 text-white font-[Arial] bg-[#C50000] rounded-xl">
          React
        </Badge>
        <Badge className="mt-2 text-[#2D2D2D] font-[Arial] bg-[#B4A76C] rounded-xl">
          Next.js
        </Badge>
        <Badge className="mt-2 text-white font-[Arial] bg-[#C50000] rounded-xl">
          TypeScript
        </Badge>
      </CardContent>
    </Card>
  );
}
