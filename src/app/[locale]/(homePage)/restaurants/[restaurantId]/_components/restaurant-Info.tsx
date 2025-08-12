import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import GroupButton from "./group-button";
import { Link } from "@/i18n/routing";

export default function RestaurantInfo() {
  return (
    <div className="w-full box-container">
      {/* Mobile & Tablet Layout */}
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2 justify-center mb-2">
            Vinny&apos;s Pizza
            <ChevronRight size={25} className="flex-shrink-0" />
          </h2>
          <div className="flex items-center gap-1 justify-center">
            <Star fill="#FF9C00" className="size-6 text-custom-orange flex-shrink-0" />
            <span className="text-sm font-medium">4.8</span>
            <span className="text-gray-400 text-sm">(324 reviews)</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full max-w-sm gap-4">
          <GroupButton />

          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent rounded-full px-4 py-2.5 text-sm flex-1"
          >
            <Image
              src={"/assets/icons/bill.svg"}
              alt="bill icon"
              width={16}
              height={16}
              className="flex-shrink-0"
            />
            Call waiter
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center justify-between w-full gap-6">
        <div className="w-72">
          <GroupButton />
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <Link
            href={"/restaurants/name/details"}
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

        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent rounded-full px-12 py-4 whitespace-nowrap flex-shrink-0"
        >
          <Image
            src={"/assets/icons/bill.svg"}
            alt="bill icon"
            width={20}
            height={20}
            className="flex-shrink-0"
          />
          Need help? Call a waiter
        </Button>
      </div>
    </div>
  );
}
