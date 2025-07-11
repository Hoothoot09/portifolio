"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function DropdownMenuHeader() {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="min-md:hidden">
        <Image src={"/menu.svg"} width={24} height={24} alt={"Menu"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10 bg-[#CC0000] mt-0 mr-1">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e) => {
              handleClick(e, "about");
            }}
            className="text-white"
          >
            About
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              handleClick(e, "projects");
            }}
            className="text-white"
          >
            Projects
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              handleClick(e, "experience");
            }}
            className="text-white"
          >
            Experience
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={(e) => {
              handleClick(e, "contacts");
            }}
            className="text-white"
          >
            Contacts
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
