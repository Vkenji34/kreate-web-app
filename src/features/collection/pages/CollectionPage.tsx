import React from "react";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { CollectionCard } from "../components/CollectionCard";

const CollectionPage = () => {
  return (
    <PageContainer>
      <SectionContainer className="relative" minFullscreen padded>
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-bold mb-10">My Collection</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 justify-center">
            <CollectionCard title="Kitsu Office Set Y2K" price={0} itemCount={0} itemOwned={0} />
            <CollectionCard title="Kitsu Office Set Y2K" price={0} itemCount={0} itemOwned={0} />
            <CollectionCard title="Kitsu Office Set Y2K" price={0} itemCount={0} itemOwned={0} />
            <CollectionCard title="Kitsu Office Set Y2K" price={0} itemCount={0} itemOwned={0} />
            <CollectionCard title="Kitsu Office Set Y2K" price={0} itemCount={0} itemOwned={0} />
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default CollectionPage;
