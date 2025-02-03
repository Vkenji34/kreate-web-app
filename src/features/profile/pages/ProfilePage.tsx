import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { ProfileSection } from "../components/ProfileSection";
import { BundleCard } from "../components/BundleCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { UserDonationSection } from "../components/UserDonationSection";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <ProfileSection
          username="Kitsunee"
          bundleCount={7}
          followerCount={10100}
          profilePictureUrl=""
          tags={["streamer", "cosplayer"]}
        />
      </SectionContainer>

      <SectionContainer minFullscreen className="relative">
        <Tabs defaultValue="gacha">
          <TabsList className="sticky top-0 z-10 flex items-center justify-center bg-background lg:mb-4">
            <div className="flex w-full items-center justify-center border-b border-muted">
              <TabsTrigger value="gacha">Gacha</TabsTrigger>
              <TabsTrigger value="tip">Tip</TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="gacha" className="mt-4 px-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {new Array(10).fill(null).map((_, index) => (
                <Link href={`/gacha/bundle/${index}`} key={index}>
                  <BundleCard
                    key={index}
                    price={10000}
                    title="Kitsunee Y2K Photoshoot"
                    itemCount={10}
                  />
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent className="mt-0" value="tip">
            <UserDonationSection />
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageContainer>
  );
};

export default ProfilePage;
