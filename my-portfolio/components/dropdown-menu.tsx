import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="font-bold text-sm border-2 border-[#CC0000] p-1 rounded-md">Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-[#CC0000]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"#about"} className="w-full text-white p-1">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#projects"} className="w-full text-white p-1">Projects</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#experience"} className="w-full text-white p-1">Experience</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#contacts"} className="w-full text-white p-1">Contacts</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}