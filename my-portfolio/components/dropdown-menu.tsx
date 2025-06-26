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
        <button>Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-6">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            About
          </DropdownMenuItem>
          <DropdownMenuItem>
            Projects
          </DropdownMenuItem>
          <DropdownMenuItem>
            Experience
          </DropdownMenuItem>
          <DropdownMenuItem>
            Contacts
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}