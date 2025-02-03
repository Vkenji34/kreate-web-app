import { PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { UserAvatar } from "~/components/shared/UserAvatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { toRupiah } from "~/utils/toRupiah";

const GachaBundleDetailPage = () => {
  const title = "Kitsu Office Set Y2K";
  const username = "Kitsune";

  const photoCount = 10
  const pricePerPull = 10000

  return (
    <PageContainer>
      <SectionContainer className="relative" minFullscreen padded>
        {/* Info Section */}
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-bold">{title}</h1>

          <Link
            href={"/" + username}
            className="mt-1 flex w-full items-center justify-center gap-x-1"
          >
            <UserAvatar
              src=""
              className="size-5"
              imageContainerClassName="border"
            />
            <span className="text-primary">{username}</span>
          </Link>

          <div className="flex gap-3 justify-center items-center text-muted mt-3">
            <span>{photoCount} Photos</span>
            <span>•</span>
            <span>{toRupiah(pricePerPull)}/pull</span>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative mt-4 overflow-hidden rounded-3xl border-2 border-primary p-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl lg:aspect-video">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kreate_Gacha-4wnvWt7foOvq7XjQs4QPwchpv4qFY6.png"
              alt="Gacha Item"
              fill
              className="object-cover"
              unoptimized
            />
            <Badge className="absolute right-4 top-4 text-sm font-medium">
              Rare
            </Badge>
          </div>
        </div>

        <Button variant="link" className="w-fit mx-auto text-muted mt-3">Lihat Semua</Button>

        <Button size="lg" className="mt-4">Pull Gacha for {toRupiah(pricePerPull)}</Button>

        {/* Tabs */}
        <Tabs defaultValue="description" className="my-6 pb-10">
          <TabsList className="flex items-center justify-center">
            <div className="flex w-full items-center justify-center border-b border-muted">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="rarity">Rarity</TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="description">
            <p className="leading-relaxed text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum tellus at erat suscipit, fermentum scelerisque risus
              faucibus. Sed tincidunt nec eros non dapibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Id totam ullam nam
              veritatis iure modi sunt, voluptatum repellendus architecto quos
              deleniti odit commodi explicabo accusamus. Dolor sit ipsam,
              obcaecati nemo, reiciendis adipisci modi dolore quaerat sint neque
              ducimus porro perferendis provident quia cum accusantium velit
              vero iste expedita nam dolorem voluptatibus. Repudiandae quam
              sapiente quia nihil cupiditate culpa omnis autem. Officiis qui
              provident cupiditate, laboriosam repellat dolorum voluptates
              aperiam vero animi sequi recusandae nobis saepe eligendi laborum
              tempore quae dolore perspiciatis illo consequuntur ipsa quidem quo
              eveniet iste exercitationem! Vitae sed illo beatae commodi nihil
              deleniti corporis cupiditate rem pariatur!
            </p>
          </TabsContent>

          <TabsContent value="rarity">
            <div className="grid grid-cols-4 gap-4">
              <p className="text-foreground">Legendary (3%)</p>
              <Progress
                value={3}
                className="col-span-3"
                indicatorClassName="bg-yellow-500"
              />
              <p className="text-foreground">Rare (12%)</p>
              <Progress
                value={12}
                className="col-span-3"
                indicatorClassName="bg-blue-500"
              />
              <p className="text-foreground">Uncommon (35%)</p>
              <Progress
                value={35}
                className="col-span-3"
                indicatorClassName="bg-green-500"
              />
              <p className="text-foreground">Common (50%)</p>
              <Progress
                value={50}
                className="col-span-3"
                indicatorClassName="bg-gray-500"
              />
            </div>
          </TabsContent>
        </Tabs>

      </SectionContainer>
    </PageContainer>
  );
};

export default GachaBundleDetailPage;
