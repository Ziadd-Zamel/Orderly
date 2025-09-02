import Link from "next/link";
import RestaurantBanner from "../../_components/restaurant-banner";
import { ChevronRight, Star } from "lucide-react";
import OpeningHours from "./opening-hour";
import Branches from "../../_components/branches";
import TestimonialsCarousel from "./testimonials-carousel";

export default function DetailsPage() {
  return (
    <div className="pb-20">
      <RestaurantBanner active />
      <div className="flex-center w-full">
        <div className="flex flex-1 flex-col items-center text-center">
          <Link
            href={"/restaurants/name"}
            className="flex items-center justify-center gap-2 text-4xl font-semibold"
          >
            Vinny&apos;s Pizza
            <ChevronRight size={25} className="flex-shrink-0" />
          </Link>
          <div className="mt-3 flex items-center justify-center gap-1">
            <Star fill="#FF9C00" className="text-custom-orange genz:hidden size-6" />
            <Star fill="#ad46ff" className="genz:block hidden size-6 text-purple-500" />
            <span className="font-medium">4.8</span>
            <span className="text-gray-400">(324 reviews)</span>
          </div>
        </div>
      </div>

      {/** Opening hours */}
      <OpeningHours />

      {/** All branches */}
      <Branches />

      {/** Customers carousel*/}
      <TestimonialsCarousel />
    </div>
  );
}
