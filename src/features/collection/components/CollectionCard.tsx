import Image from "next/image";

type CollectionCardProps = {
  coverImageUrl?: string;
  title: string;
  price: number;
  itemCount: number;
  itemOwned: number;
};

export const CollectionCard = (props: CollectionCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-card shadow-xl w-40 h-[213.5px] sm:w-48 sm:h-[256px] md:w-56 md:h-[300px]">
      <div className="relative aspect-square">
        <Image
          src={props.coverImageUrl ?? "https://placehold.co/600/png"}
          unoptimized
          alt={props.title}
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg">
          {props.title}
        </h3>
        <div className="mt-0 flex items-center flex-wrap">
          <span className="text-primary text-xs sm:text-sm md:text-base">
            {props.itemOwned}/{props.itemCount}
          </span>
          <span className="ml-1 text-muted text-xs sm:text-sm md:text-base">
            photos collected
          </span>
        </div>
      </div>
    </div>
  );
};
