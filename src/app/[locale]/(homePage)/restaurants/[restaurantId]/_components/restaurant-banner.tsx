import { FavoriteButton } from "@/components/common/shared-buttons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RestaurantBanner({ active }: { active?: boolean }) {
  return (
    <div className="relative w-full h-[440px] mt-40 mb-32 box-container">
      <Image
        src={"/assets/Images/restaurant-banner.jpg"}
        alt="Banner"
        fill
        className="object-cover absolute inset-0 rounded-3xl sm:rounded-[90px]"
      />
      <div className="absolute inset-0 bg-black/40 rounded-[90px]" />
      <div
        className={cn(
          "rounded-full size-40 sm:size-64 flex-center absolute -bottom-[15%] sm:-bottom-[25%] left-1/2 transform -translate-x-1/2 ",
          active && "border-[#FF0000] border-1 genz:border-none ",
        )}
      >
        <div className="bg-white rounded-full size-36 sm:size-60 flex-center shadow-xl relative genz:border-[3px] genz:border-gradient">
          <Image
            src={"/assets/Images/restaurant-logo.svg"}
            alt="Restaurant Name"
            width={200}
            height={0}
            className=" w-28 sm:w-52 "
          />
          {active && (
            <Image
              src={"/assets/icons/fire.svg"}
              alt="Fire Icon"
              width={50}
              height={0}
              className="absolute bottom-1 right-1 genz:hidden"
            />
          )}
        </div>
      </div>
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10">
        <FavoriteButton />
      </div>
    </div>
  );
}
