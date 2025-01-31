import { Badge } from "lucide-react";
import Image from "next/image";

type BundleCardProps = {
  coverImageUrl?: string;
  title: string;
  price: number;
};

export const BundleCard = (props: BundleCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-card shadow-xl">
      <div className="relative aspect-square">
        <Image
          src={props.coverImageUrl ?? ""}
          unoptimized
          alt={props.title}
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-foreground">{props.title}</h3>
        <div className="mt-1 flex items-center">
          <span className="text-foreground">{props.price}</span>
          <Badge className="ml-1 h-4 w-4 text-foreground" />
        </div>
      </div>
    </div>
  );
};
