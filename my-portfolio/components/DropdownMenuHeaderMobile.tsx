"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="min-sm:hidden">
        <Image src={"/menu.svg"} width={24} height={24} alt={"Menu"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10 bg-[#CC0000] mt-0 mr-1">
        <DropdownMenuGroup>
          <Link href={"#about"} className="w-full text-white">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link href={"#projects"} className="w-full text-white">
            <DropdownMenuItem>Projects</DropdownMenuItem>
          </Link>
          <Link href={"#experience"} className="w-full text-white">
            <DropdownMenuItem>Experience</DropdownMenuItem>
          </Link>
          <Link href={"#contacts"} className="w-full text-white">
            <DropdownMenuItem>Contacts</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
