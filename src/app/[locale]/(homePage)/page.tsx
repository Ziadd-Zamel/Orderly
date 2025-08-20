import dynamic from "next/dynamic";
import Navbar from "@/components/layout/header";
import HeroSection from "./_components/hero-section/hero-section";
import { places } from "@/lib/constants/data.constant";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      <Navbar />
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
        <Image
          src={"/assets/vectors/garlic-vector.svg"}
          width={80}
          height={0}
          alt="Garlic vector"
          className="absolute top-0 start-[35%] -translate-y-1/2 z-10 opacity-"
          loading={"lazy"}
        />
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

// import ThemeSwitcher from "@/components/custom/theme-switcher";
// export default function page() {
//   return (
//     <main className="min-h-screen flex items-center justify-center">
//       <h1 className="text-4xl font-bold bg-main text-white genz:bg-gradient">Hello World</h1>
//       <ThemeSwitcher />
//     </main>
//   );
// }
