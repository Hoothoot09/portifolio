// import Link from "next/link";
import { DropdownMenuHeader } from "./dropdown-menu";

export default function Header() {
return (
<header className="fixed p-3 w-full">
  <div className="flex justify-between">
   <h1 className="max-sm:text-lg font-bold">Andrei Soares</h1>
   <div className="flex gap-2">
     <DropdownMenuHeader/>
   </div>
  </div>
</header>
);
}