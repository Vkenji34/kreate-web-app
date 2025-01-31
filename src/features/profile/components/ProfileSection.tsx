import { BadgeCheck } from "lucide-react";
import { UserAvatar } from "~/components/shared/UserAvatar";
import { Button } from "~/components/ui/button";
import { compactNumberFormatter } from "~/utils/formatter";

type ProfileSectionProps = {
  profilePictureUrl: string;
  username: string;
  tags: string[];
  followerCount: number;
  bundleCount: number;
};

export const ProfileSection = ({
  profilePictureUrl,
  username,
  tags,
  followerCount,
  bundleCount,
}: ProfileSectionProps) => {
  return (
    <div className="flex flex-col px-4 pb-8">
      <div className="flex items-center gap-4">
        <UserAvatar
          className="size-20 lg:size-24"
          src={profilePictureUrl}
          isVerified
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground">{username}</h1>
            <BadgeCheck className="h-6 w-6 text-primary" />
          </div>
          <div className="flex gap-2 lg:text-base text-sm">
            {/* <div className="flex gap-1">
              <span className="font-bold text-foreground">
                {compactNumberFormatter.format(followerCount)}
              </span>
              <span className="text-muted-foreground">followers</span>
            </div>
            <span>•</span> */}
            <div className="flex gap-1">
              <span className="font-bold text-foreground">
                {compactNumberFormatter.format(bundleCount)}
              </span>
              <span className="text-muted-foreground">Gacha Packs</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-6 flex w-full gap-4">
        <Button variant="muted" className="flex-1">
          Follow
        </Button>
        <Button variant="muted" className="flex-1">
          Share
        </Button>
      </div> */}
    </div>
  );
};
