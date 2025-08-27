import dynamic from "next/dynamic";
import HeroSection from "./_components/hero-section/hero-section";
import { places } from "@/lib/constants/data.constant";
import { useTranslations } from "next-intl";
import HomeSlidersVectors from "./_components/home-slider/home-sliders-vectors";

const PlacesCarousel = dynamic(
  () => import("@/app/[locale]/(homePage)/_components/places-slider/places-carousel"),
);
const SliderVectors = dynamic(
  () => import("@/app/[locale]/(homePage)/_components/places-slider/slider-vectors"),
);
const HomeSlider = dynamic(
  () => import("@/app/[locale]/(homePage)/_components/home-slider/slider"),
);

const DownloadMobileApp = dynamic(
  () => import("./_components/download-mobile-app/download-mobile-app"),
);

const HowToWork = dynamic(() => import("./_components/how-to-work"));

export default function Home() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Top Rated Places */}
      <div className="relative">
        <PlacesCarousel places={places} title={t("top-rated-places")} />
        <SliderVectors />
      </div>

      {/* Home Slider */}
      <section className="relative">
        <HomeSlider />
        <HomeSlidersVectors />
      </section>

      {/* Top Rated Places */}
      <PlacesCarousel places={places} title={t("nearest-places")} />

      {/* How to work section */}
      <HowToWork />

      {/* Download Mobile App Section */}
      <div className="relative md:mt-28">
        <DownloadMobileApp />
      </div>
    </>
  );
}
