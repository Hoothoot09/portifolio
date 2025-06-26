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
        <button className="font-bold text-sm border-2 border-[#990000] p-1 rounded-md hover:bg-[#E0E0E0]">Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-[#990000]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"#about"}>About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#projects"}>Projects</Link>      
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#experience"}>Experience</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#contacts"}>Contacts</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}