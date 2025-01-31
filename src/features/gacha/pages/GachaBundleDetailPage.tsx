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

const GachaBundleDetailPage = () => {
  return (
    <PageContainer withFooter={false}>
      <SectionContainer className="relative" minFullscreen>
        <div className="my-6 flex items-center gap-2">
          <UserAvatar isVerified src="" className="size-16" />
          <Link href="/kitsunee">
            <p className="text-lg font-semibold">Kitsunee</p>
          </Link>
        </div>
        <h1 className="text-3xl font-bold">Kitsu Office Set Y2K</h1>

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

        {/* Action Buttons */}
        <div className="container bottom-0 left-0 right-0 flex max-w-screen-md gap-4 bg-background p-4 lg:pb-8">
          <Button className="flex flex-1 items-center">
            10 <PiggyBank className="ml-1 inline" /> for 15 spin
          </Button>
          <Button className="flex-1">
            1 <PiggyBank className="ml-1 inline" /> for 1 spin
          </Button>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default GachaBundleDetailPage;
