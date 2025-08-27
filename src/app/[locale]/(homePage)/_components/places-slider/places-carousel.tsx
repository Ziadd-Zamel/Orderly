import PlaceCard from "@/components/common/place-card";
import {
  Carousel,
  CarouselContent,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";
type Place = {
  id: number;
  productImg: string;
  restaurantImg: string;
  name: string;
};

export default function PlacesCarousel({ places, title }: { places: Place[]; title: string }) {
  const locale = useLocale();

  return (
    <div className="box-container w-full my-10">
      <Carousel
        className="w-full mx-auto"
        opts={{ align: "start", direction: locale === "ar" ? "rtl" : "ltr" }}
      >
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="relative z-20 bg-[#F1F1F199]/50 px-4 sm:px-8 xl:px-20 rounded-4xl pb-8"
        >
          <CarouselHeader className="text-center text-zinc-800 font-semibold text-2xl sm:text-3xl py-8 ">
            {title}
          </CarouselHeader>
          <CarouselContent className="mx-auto items-center pb-10">
            {places.map((place) => {
              return (
                <CarouselItem
                  key={place.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center cursor-pointer"
                >
                  <PlaceCard place={place} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0 right-auto rtl:right-0 rtl:left-auto -translate-x-1/2 rtl:translate-x-1/2 size-10 md:size-12 xl:size-16 rtl:rotate-180" />
          <CarouselNext className="right-0 left-auto rtl:left-0 rtl:right-auto translate-x-1/2 rtl:-translate-x-1/2 size-10 md:size-12 xl:size-16 rtl:rotate-180" />
        </div>
      </Carousel>
    </div>
  );
}
