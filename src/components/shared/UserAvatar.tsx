import { BadgeCheck, User } from "lucide-react";
import { cn } from "~/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

type UserAvatarProps = {
  src: string;
  alt?: string;
  isVerified?: boolean;
  className?: string;
  containerClassName?: string;
  verifiedBadgeClassName?: string;
};

export const UserAvatar = (props: UserAvatarProps) => {
  const alt = props.alt ?? "Profile Picture";

  return (
    <div className={cn("relative", props.containerClassName)}>
      <div
        className={cn(
          "h-32 w-32 overflow-hidden rounded-full border-4",
          props.className,
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
            "absolute bottom-0 right-0 rounded-full bg-primary p-1",
            props.verifiedBadgeClassName,
          )}
        >
          <BadgeCheck className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
};
