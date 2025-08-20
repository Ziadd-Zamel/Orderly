import Link from "next/link";
import RestaurantBanner from "./restaurant-banner";
import { ChevronRight, Star } from "lucide-react";
import OpeningHours from "./opening-hour";
import Branches from "./branches";
import CustomersCarousel from "./customers-carousel";

export default function DetailsPage() {
  return (
    <div className="pb-20">
      <RestaurantBanner active />
      <div className="flex-center w-full">
        <div className="flex-1 flex flex-col items-center text-center">
          <Link
            href={"/restaurants/name"}
            className="text-4xl font-semibold flex items-center gap-2 justify-center"
          >
            Vinny&apos;s Pizza
            <ChevronRight size={25} className="flex-shrink-0" />
          </Link>
          <div className="flex items-center gap-1 justify-center mt-3">
            <Star fill="#FF9C00" className="size-6 text-custom-orange " />
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
      <CustomersCarousel />
    </div>
  );
}
