import HeroContent from "../components/Home/HeroContent";
import NormalWrapper from "../components/UI/NormalWrapper";
import Image from "next/image";
import { Metadata } from "next";

export const metadata = {
  title: "libot - An online booking solution",
  description:
    "An online booking solution built for hotels to streamline your booking process with ZERO commission.",
};

export default function Home() {
  const heading = "Effortless Online Bookings.";
  const blurb = (
    <>
      An <b>online booking solution</b> built for <b>hotels</b> to streamline
      your booking process with <b>ZERO commission</b>.
    </>
  );
  const ctaBtnTxt = "Schedule A Demo";
  return (
    <main>
      <section className="bg-libot-yellow">
        <NormalWrapper>
          <HeroContent
            className="md:pt-20 pt-10 md:pb-20 hero-content"
            ctaBtnTxt={ctaBtnTxt}
            heading={heading}
            blurb={blurb}
          />
        </NormalWrapper>
      </section>
      <section className="bg-libot-lighter-yellow h-full md:py-16 py-10">
        <NormalWrapper>
          <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-8 md:space-y-0 space-y-4">
            <div className="bg-libot-green flex justify-center p-4 rounded-md">
              <Image
                alt="A 3d model of a small bedroom."
                src="/images/screen-1.jpg"
                width={700}
                height={700}
                className="rounded-md"
              />
            </div>
            <div className="space-y-6">
              <h2>Your Own Booking Engine</h2>
              <p>
                Cutting-edge software tailored for your property, boosting your
                online presence to attract more bookings on an international
                level.
              </p>
              <a
                className="bg-libot-yellow text-black transition-all hover:bg-libot-blue hover:text-white
                  rounded-full inline-block font-semibold text-center md:w-auto w-full
                  md:py-[.85rem] py-[.6rem] md:px-[2rem] px-[1rem]"
                href="mailto:workwithkozma@gmail.com"
              >
                Try FREE for 7 days
              </a>
            </div>
          </div>
        </NormalWrapper>
      </section>
      <section className="h-full bg-libot-light-yellow md:py-16 py-10">
        <NormalWrapper>
          <h2 className="text-center md:mb-10 mb-4">What libot has to offer</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 md:space-x-4 md:space-y-0 space-y-4">
            <div className="shadow-lg text-center space-y-2 rounded-md bg-white p-6">
              <h3>24/7 Accessibility</h3>
              <p>
                Guests can make reservations at any time of the day or night,
                even when your front desk is closed. This convenience can lead
                to more bookings, especially from travelers in different time
                zones.
              </p>
            </div>
            <div className="shadow-lg text-center space-y-2 rounded-md bg-white p-6">
              <h3>Time Savings</h3>
              <p>
                Faster bookings mean guests spend less time making reservations
                and more time enjoying their stay, contributing to an overall
                positive guest experience.
              </p>
            </div>
            <div className="shadow-lg text-center space-y-2 rounded-md bg-white p-6">
              <h3>Online Payments</h3>
              <p>
                Your online booking portal enables you to securely process
                payments for reservations. This security is essential for both
                you and your guests, instilling trust in the booking process.
              </p>
            </div>
          </div>
        </NormalWrapper>
      </section>
    </main>
  );
}
