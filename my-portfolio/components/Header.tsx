import Link from "next/link";
import { DropdownMenuHeader } from "./DropdownMenuHeaderMobile";

export default function Header() {
return (
<header className="fixed p-3 w-full items-center border-b border-gray-300">
  <div className="flex justify-between">
   <Link href={"/"} className="max-sm:text-lg font-bold text-[#2D2D2D]">Andrei Soares</Link>
   <div className="flex gap-2">
     <DropdownMenuHeader/>
   </div>
  </div>
</header>
)
}