import Image from "next/image";
import { FavoriteButton } from "./shared-buttons";
import { Card, CardContent } from "../ui/card";

type Place = {
  id: number;
  ProductImg: string;
  RestaurantImg: string;
  name: string;
};
export default function PlaceCard({ place }: { place: Place }) {
  return (
    <div>
      <Card className="relative w-[260px] h-[260px]  bg-slate-100 rounded-[30px] mt-10">
        <CardContent className="px-5 pb-0 pt-12 h-full">
          <Image
            src={place.RestaurantImg}
            alt="Restaurant Name"
            fill
            loading="lazy"
            className="object-fit"
          />

          {/* Price & Favorite Button */}
          <div className="w-[85%] py-2.5 px-3 flex gap-3 items-center justify-between bg-white rounded-3xl absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2  shadow">
            {/* Price */}
            <div className="flex items-center justify-center gap-2">
              <div className="size-10 circle relative border-2 overflow-hidden">
                <Image
                  src={place.ProductImg}
                  alt="Product Image"
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <h2 className="text-base text-zinc-700 text-center font-medium font-poppins truncate">
                {place.name}
              </h2>
            </div>

            {/* Favorite Button */}
            <FavoriteButton bgTheme="dark" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
