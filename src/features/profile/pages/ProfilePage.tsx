import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { ProfileSection } from "../components/ProfileSection";
import { BundleCard } from "../components/BundleCard";

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

      <SectionContainer padded className="grid grid-cols-2 gap-4">
        <BundleCard price={3} title="Kitsunee Y2K Photoshoot" />
        <BundleCard price={3} title="Kitsunee Y2K Photoshoot" />
        <BundleCard price={3} title="Kitsunee Y2K Photoshoot" />
        <BundleCard price={3} title="Kitsunee Y2K Photoshoot" />
      </SectionContainer>
    </PageContainer>
  );
};

export default ProfilePage;
