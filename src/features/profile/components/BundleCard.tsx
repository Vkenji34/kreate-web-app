import Image from "next/image";
import { toRupiah } from "~/utils/toRupiah";

type BundleCardProps = {
  coverImageUrl?: string;
  title: string;
  price: number;
  itemCount: number;
};

export const BundleCard = (props: BundleCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-card shadow-xl">
      <div className="relative aspect-square">
        <Image
          src={props.coverImageUrl ?? "https://placehold.co/600/png"}
          unoptimized
          alt={props.title}
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-foreground">{props.title}</h3>
        <div className="mt-1 flex items-center justify-between flex-wrap">
          <span className="text-muted">{props.itemCount} Photos</span>
          <span className="text-primary">{toRupiah(props.price)}</span>
        </div>
      </div>
    </div>
  );
};
