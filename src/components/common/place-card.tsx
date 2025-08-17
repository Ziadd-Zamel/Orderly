import Image from "next/image";
import { FavoriteButton } from "./shared-buttons";
import { Card, CardContent } from "../ui/card";
import { Link } from "@/i18n/routing";

type Place = {
  id: number;
  productImg: string;
  restaurantImg: string;
  name: string;
};

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={"/restaurants/id"} className="w-full max-w-[300px] mx-auto mt-10">
      <Card className="relative h-[260px] rounded-[30px]">
        <CardContent className="h-full p-0">
          <Image
            src={place.productImg}
            alt="Meal Name"
            fill
            // loading="lazy"
            className="object-cover rounded-[30px]"
          />

          {/* Restaurant Info & Favorite Button */}
          <div className="w-[85%] py-2.5 px-3 flex gap-3 items-center justify-between bg-white rounded-3xl absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 shadow">
            {/* Restaurant Image & Name */}
            <div className="flex items-center justify-center gap-2">
              <div className="size-10 rounded-full relative border-2 overflow-hidden">
                <Image
                  src={place.restaurantImg}
                  alt="Restaurant Image"
                  fill
                  loading="lazy"
                  className="object-cover"
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
    </Link>
  );
}
