import NormalWrapper from "../../components/UI/NormalWrapper";
import Card from "../../components/Pricing/Card";
import { Metadata } from "next";

export const metadata = {
  title: "libot - Pricing",
  description:
    "Discover our transparent pricing plans for hassle-free booking! Choose the perfect plan to suit your needs and budget. Unlock a world of convenience and savings with our pricing options today.",
};

export default function page() {
  const basicFeatures = [
    "Direct Booking Webpage",
    "Admin dashboard",
    "New features",
    "Daily maintenance",
    "Capture online payments",
    "Customer support",
    "Cancel Anytime",
  ];

  const moreFeatures = [
    "Channel Manager",
    "Reports, statistics and analytics",
    "1-2 custom features",
    "Enhanced SEO",
  ];
  return (
    <main>
      <section className="bg-libot-green pb-8">
        <NormalWrapper className="pricing-content">
          <div className="text-center md:mb-12 mb-6">
            <h1 className="text-white">Pricing</h1>
          </div>
          <div className="grid lg:grid-cols-8 grid-cols-1 lg:space-x-6 space-y-6 lg:space-y-0">
            <Card
              key="pricing-1"
              pricePerMonth="1,500"
              priceCategory="Most Popular"
              priceTitle="Professional"
              features={basicFeatures}
              featureClasses="border-black"
              className="lg:col-span-3 col-span-1 bg-libot-lavender"
              checkFill="black"
              pillClasses="border-black"
              buttonClasses="hover:bg-libot-blue transition-all hover:text-white
          bg-libot-yellow"
            />
            <Card
              key="pricing-2"
              pricePerMonth="2,300"
              priceCategory="Coming Soon"
              priceTitle="Enterprise"
              features={basicFeatures}
              moreFeatures={moreFeatures}
              featureClasses="border-white"
              className="lg:col-span-5 col-span-1 bg-libot-black text-white"
              checkFill="white"
              pillClasses="border-white"
              buttonClasses="hover:bg-libot-blue transition-all text-black hover:text-white
          bg-libot-yellow"
            />
          </div>
        </NormalWrapper>
      </section>
    </main>
  );
}
