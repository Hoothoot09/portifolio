'use client'

import Link from "next/link"
import React, { useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuHeader() {
  const [open, setOpen] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="font-bold text-sm border-2 border-[#CC0000] p-1 rounded-md">Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-[#CC0000]">
        <DropdownMenuGroup>
          <Link href={"#about"} className="w-full text-white">
            <DropdownMenuItem>
             About
            </DropdownMenuItem>
          </Link>
          <Link href={"#projects"} className="w-full text-white">
            <DropdownMenuItem>
             Projects
            </DropdownMenuItem>
          </Link>
          <Link href={"#experience"} className="w-full text-white">
            <DropdownMenuItem>
             Experience
            </DropdownMenuItem>
          </Link>
          <Link href={"#contacts"} className="w-full text-white">
            <DropdownMenuItem>
             Contacts
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}