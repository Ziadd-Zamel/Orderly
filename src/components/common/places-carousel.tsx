import PlaceCard from "@/components/common/place-card";
import {
  Carousel,
  CarouselContent,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type Place = {
  id: number;
  ProductImg: string;
  RestaurantImg: string;
  name: string;
};

export default function PlacesCarousel({ Places, title }: { Places: Place[]; title: string }) {
  return (
    <div className="flex items-center justify-center w-full  ">
      <Carousel className="w-full mx-auto max-w-[1200px]">
        <div className="bg-[#F1F1F199] pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-4 sm:pr-8 md:pr-12 lg:pr-14 xl:pr-16 rounded-4xl pb-5">
          <CarouselHeader className="text-center font-semibold text-2xl sm:text-3xl py-6 sm:py-8 md:py-10">
            {title}
          </CarouselHeader>
          <CarouselContent className="mx-auto items-center -ml-2 md:-ml-4">
            {Places.map((place) => {
              return (
                <CarouselItem
                  key={place.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3  min-h-[350px] flex justify-center"
                >
                  <PlaceCard place={place} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 xl:-left-7 size-10 xl:size-16" />
          <CarouselNext className="right-2 sm:right-4  xl:-right-7 size-10 xl:size-16" />
        </div>
      </Carousel>
    </div>
  );
}
