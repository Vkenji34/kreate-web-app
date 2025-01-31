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
    <div className="flex flex-col items-center px-4 pb-8">
      <UserAvatar src={profilePictureUrl} isVerified />

      <div className="mt-4 flex items-center gap-2">
        <h1 className="text-2xl font-bold text-foreground">{username}</h1>
        <BadgeCheck className="h-6 w-6 text-primary" />
      </div>

      <div className="mt-2 flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-12">
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">
            {compactNumberFormatter.format(followerCount)}
          </div>
          <div className="text-muted-foreground">followers</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">
            {compactNumberFormatter.format(bundleCount)}
          </div>
          <div className="text-muted-foreground">bundles</div>
        </div>
      </div>

      <div className="mt-6 flex w-full gap-4">
        <Button variant="muted" className="flex-1">
          Follow
        </Button>
        <Button variant="muted" className="flex-1">
          Share
        </Button>
      </div>
    </div>
  );
};
