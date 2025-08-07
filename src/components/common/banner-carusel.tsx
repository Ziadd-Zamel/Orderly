import React, { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const Images = [
  "/assets/Images/banner.png",
  "/assets/Images/banner.png",
  "/assets/Images/banner.png",
];

export default function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div className="w-full max-w-6xl overflow-hidden box-container py-10">
      <Carousel className="w-screen" setApi={setApi}>
        <CarouselContent className="flex">
          {Images.map((Img, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="relative w-screen h-[400px]">
                <Image src={Img} alt={`Banner ${index}`} fill className="object-cover" priority />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className=" flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot w-4 h-2 rounded-sm border-2 transition-all duration-200".concat(
              index === selectedIndex
                ? " embla__dot--selected bg-custom-orange w-16 "
                : " bg-gray-300 hover:border-main",
            )}
          />
        ))}
      </div>
    </div>
  );
}
