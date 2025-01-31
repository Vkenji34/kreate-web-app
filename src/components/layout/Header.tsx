import { Coins } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import kreateLogoFull from "~/assets/kreate_full.png";
import { Button } from "~/components/ui/button";

export const Header = () => {
  return (
    <header className="mb-4 mt-2 flex h-16 items-center justify-between p-4">
      <Link href="/" className="h-full">
        <Image
          src={kreateLogoFull}
          alt="Kreate logo"
          className="h-full w-fit"
        />
      </Link>

      <Button variant="muted" size="sm">
        <Coins />
        10
      </Button>
    </header>
  );
};
