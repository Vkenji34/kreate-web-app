import { CheckCircle, type LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

type MonetizationFeatureCardProps = {
  points: string[];
  Icon: LucideIcon;
  iconContainerClassName?: string;
  title: string;
  description: string;
};

export const MonetizationFeatureCard = (
  props: MonetizationFeatureCardProps,
) => {
  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <div
        className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-xl",
          props.iconContainerClassName,
        )}
      >
        <props.Icon className="size-10 text-white" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-foreground">{props.title}</h3>
      <p className="text-muted-foreground">
        {props.description}
      </p>
      <ul className="mt-4 space-y-2">
        {props.points.map((point, index) => (
          <li key={index} className="flex items-center text-muted-foreground">
            <CheckCircle
              className="mr-2 size-4 text-green-500"
              strokeWidth={3}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
