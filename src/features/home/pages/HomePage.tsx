import {
  BookHeart,
  Boxes,
  CheckCircle,
  Coins,
  Dices,
  HandCoins,
  PartyPopper,
  Wrench,
} from "lucide-react";
import { Header } from "~/components/layout/Header";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { MonetizationFeatureCard } from "../components/MonetizationFeatureCard";

const HomePage = () => {
  return (
    <PageContainer>
      <SectionContainer id="hero" className="pb-20 pt-8 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-5xl font-bold text-primary md:text-7xl">
                Konten Kamu Berharga
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Transform your passion into profit. Connect with your audience
                through exclusive content and meaningful interactions.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg text-white transition-all hover:opacity-90">
                  Get Started
                </button>
                <button className="rounded-full border border-indigo-200 px-8 py-4 text-lg text-indigo-600 transition-all hover:border-indigo-600">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6f08b7d1ec-0272dd1dd01d43367509.png"
                alt="3D illustration of a content creator workspace with neon lights, floating social media icons, and arcade-style elements, vibrant and modern style"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id="monetization-features"
        containerClassName="bg-primary/10"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-primary">
            Monetization Features
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <MonetizationFeatureCard
              title="Tipping"
              description="Receive direct support from your fans through one-time tips."
              iconContainerClassName="bg-gradient-to-r from-pink-500 to-rose-500"
              Icon={HandCoins}
              points={[
                "Receive direct support from your fans",
                "Reply directly to your fans' messages",
                "Competitive platform fees",
              ]}
            />
            <MonetizationFeatureCard
              title="Gacha System"
              description="Engage fans with exciting randomized rewards and exclusive
                  content drops."
              iconContainerClassName="bg-gradient-to-r from-purple-500 to-indigo-500"
              Icon={Dices}
              points={[
                "Custom reward pools",
                "Limited editions",
                "Physical photo prints for partner creators",
              ]}
            />
            <MonetizationFeatureCard
              title="NFT Collection"
              description="Create and sell unique digital collectibles to your dedicated
                  community."
              iconContainerClassName="bg-gradient-to-r from-blue-500 to-cyan-500"
              Icon={Boxes}
              points={["Easy minting", "Royalty tracking"]}
            />
            <MonetizationFeatureCard
              title="Personalized Content"
              description="Offer exclusive content and experiences to your most loyal supporters"
              iconContainerClassName="bg-gradient-to-r from-amber-500 to-orange-500"
              Icon={BookHeart}
              points={["One of a kind, unique content", "Secure storage"]}
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="creator-benefits" containerClassName="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground">
            Creator Benefits
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                  <Wrench className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Monetization Tools
                  </h3>
                  <p className="text-muted-foreground">
                    Set your own prices, create subscription tiers, and manage
                    your income streams efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <Coins className="text-violet-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Competitive Platform Fees
                  </h3>
                  <p className="text-muted-foreground">
                    We take care of our Kreators first, by offering low platform
                    fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <PartyPopper className="text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Engaging Ecosystem
                  </h3>
                  <p className="text-muted-foreground">
                    As a Kreator, you&apos;ll have access to a supportive
                    community where we can support and grow together.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6e1752eb5e-048108842d8eddb8e23a.png"
                alt="Modern dashboard UI showing creator analytics and earnings with neon accents and arcade-style elements"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id="testimonials"
        containerClassName="bg-white/50 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground">
            Creator Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Creator"
                className="mb-6 h-16 w-16 rounded-full"
              />
              <p className="mb-6 text-muted-foreground">
                &quot;Kreate has transformed how I connect with my audience. My
                earnings have increased by 300% since joining!&quot;
              </p>
              <div>
                <p className="font-bold text-foreground">Sarah Chen</p>
                <p className="text-gray-500">Digital Artist</p>
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="Creator"
                className="mb-6 h-16 w-16 rounded-full"
              />
              <p className="mb-6 text-muted-foreground">
                &quot;The platform&apos;s tools and community support have
                helped me build a sustainable career doing what I love.&quot;
              </p>
              <div>
                <p className="font-bold text-foreground">Mike Rodriguez</p>
                <p className="text-gray-500">Content Creator</p>
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Creator"
                className="mb-6 h-16 w-16 rounded-full"
              />
              <p className="mb-6 text-muted-foreground">
                &quot;Finally, a platform that truly understands creator needs.
                The earning potential is incredible!&quot;
              </p>
              <div>
                <p className="font-bold text-foreground">Lisa Wang</p>
                <p className="text-gray-500">Fitness Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="cta" className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-100 to-violet-100 p-12 text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Ready to Start Kreating?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join thousands of creators already earning on Kreate
            </p>
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg text-white transition-all hover:opacity-90">
              Get Started Now
            </button>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default HomePage;
