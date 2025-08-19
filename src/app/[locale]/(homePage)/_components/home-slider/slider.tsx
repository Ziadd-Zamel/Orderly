"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselHeader,
} from "../../../../../components/ui/carousel";
import { DotButton, useDotButton } from "./dots";
import { useTranslations } from "next-intl";

const Images = [
  "/assets/Images/banner.png",
  "/assets/Images/banner.png",
  "/assets/Images/banner.png",
];

export default function HomeSlider() {
  // Translation
  const t = useTranslations();

  // States
  const [api, setApi] = useState<CarouselApi>();

  // Hooks
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div className="relative z-20 box-container my-14 lg:my-20">
      {/* Carousel component */}
      <Carousel className="w-full" setApi={setApi}>
        <CarouselHeader className="text-center text-zinc-800 font-semibold text-2xl sm:text-3xl py-4 lg:py-6 xl:py-8">
          {t("offers-for-you")}
        </CarouselHeader>
        <CarouselContent className="flex px-1">
          {Images.map((Img, index) => (
            <CarouselItem key={index} className="w-full rounded-4xl overflow-hidden cursor-grab">
              <div className="relative w-full h-[200px] md:h-[300px] xl:h-[400px]">
                <Image
                  src={Img}
                  alt={`Banner ${index}`}
                  fill
                  className="object-fill"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots for navigation */}
      <div className=" flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot w-4 h-3 rounded-sm cursor-pointer transition-all duration-200 ".concat(
              index === selectedIndex
                ? " embla__dot--selected bg-custom-orange  genz:bg-gradient w-16"
                : " bg-gray-300 hover:border-main",
            )}
          />
        ))}
      </div>
    </div>
  );
}
