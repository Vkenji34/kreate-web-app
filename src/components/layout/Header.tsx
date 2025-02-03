import Image from "next/image";
import Link from "next/link";
import kreateIcon from "~/assets/kreate_icon.png";
import { UserAvatar } from "../shared/UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="mb-4 mt-2 h-16 p-4">
      <div className="flex items-center justify-between w-full max-w-screen-lg h-full mx-auto">
        <Link href="/" className="h-full">
          <Image
            src={kreateIcon}
            alt="Kreate logo"
            className="h-full w-fit"
          />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar src="" className="size-8" imageContainerClassName="border-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuItem>My Collection</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
