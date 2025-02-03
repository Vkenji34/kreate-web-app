import { BadgeCheck, User } from "lucide-react";
import { cn } from "~/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

type UserAvatarProps = {
  src: string;
  alt?: string;
  isVerified?: boolean;
  className?: string;
  imageContainerClassName?: string;
  verifiedBadgeClassName?: string;
};

export const UserAvatar = (props: UserAvatarProps) => {
  const alt = props.alt ?? "Profile Picture";

  return (
    <div className={cn("relative size-32", props.className)}>
      <div
        className={cn(
          "size-full overflow-hidden rounded-full border-4 border-border",
          props.imageContainerClassName,
        )}
      >
        <Avatar className="w-full h-full">
          <AvatarImage src={props.src} alt={alt} />
          <AvatarFallback>
            <User className="size-32 text-primary" />
          </AvatarFallback>
        </Avatar>
      </div>
      {props.isVerified && (
        <div
          className={cn(
            "absolute bottom-0 right-0 rounded-full bg-primary p-1 size-[calc(100%/2.5)]",
            props.verifiedBadgeClassName,
          )}
        >
          <BadgeCheck className="size-full text-white" />
        </div>
      )}
    </div>
  );
};
