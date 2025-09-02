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
    <Link href={"/restaurants/id"} className="group w-full">
      <Card className="relative h-[300px] rounded-[30px] bg-red-50 py-0">
        <CardContent className="h-full p-0">
          <div className="relative h-full w-full overflow-hidden rounded-[30px]">
            <Image
              src={place.productImg}
              alt="Place Name"
              fill
              // loading="lazy"
              className="object-cover duration-900 group-hover:scale-[1.1]"
            />
          </div>

          {/* Restaurant Info & Favorite Button */}
          <div className="absolute bottom-0 left-1/2 flex !max-w-[85%] min-w-4/5 -translate-x-1/2 translate-y-1/2 items-center justify-between gap-3 rounded-3xl bg-white px-3 py-2.5 shadow">
            {/* Restaurant Image & Name */}
            <div className="flex flex-1 items-center gap-2 overflow-hidden">
              <div className="circle relative size-10 shrink-0 overflow-hidden border-2">
                <Image
                  src={place.restaurantImg}
                  alt="Restaurant Image"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h2 className="truncate text-base font-medium text-zinc-700">
                {place.name} {"AAAAAA"}
              </h2>
            </div>

            {/* Favorite Button */}
            <FavoriteButton bgTheme="dark" className="shrink-0" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
