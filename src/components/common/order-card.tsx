import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";

export default function OrderCard({ className }: { className?: string }) {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <div
      className={cn(
        "relative bg-gray-50 rounded-3xl px-3 sm:px-9 py-6 min-h-[90px] w-full mt-16 flex flex-col items-center sm:items-start ",
        className,
      )}
    >
      <Image
        src={"/assets/images/place-demo.png"}
        width={110}
        height={90}
        alt="Food"
        className="rounded-full sm:absolute sm:-top-[40%] shadow-xl"
      />
      <div className="bg-[#FFEBCA]  h-[18px] rounded-full flex items-center justify-center font-semibold gap-1 py-3 px-2 text-custom-orang text-[8px] sm:text-[10px]  absolute z-20 sm:-top-6 sm:left-[105px]">
        <Star className="text-custom-orang" fill="#FF9C00" size={10} />
        Top rated
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between w-full mt-5 sm:mt-12">
        <p className=" text-xs sm:text-2xl font-medium text-zinc-700">Classic Greek Salad</p>
        <div className="flex items-center gap-3">
          <p className=" text-xs sm:text-xl text-main font-semibold">
            {format.number(215)} {t("currency")}
          </p>
        </div>
      </div>
    </div>
  );
}
