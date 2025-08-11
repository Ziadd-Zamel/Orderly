import { Star } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";

export default function OrderCard() {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <div className="relative bg-white rounded-3xl px-9 py-6 min-h-[90px] w-full mt-12">
      <Image
        src={"/assets/images/place-demo.png"}
        width={110}
        height={90}
        alt="Food"
        className="rounded-full absolute -top-[40%] shadow-xl"
      />
      <div className="bg-[#FFEBCA]  h-[18px] rounded-full flex items-center justify-center font-semibold gap-1 py-3 px-2 text-custom-orang text-[10px] absolute z-20 -top-6 left-[105px]">
        <Star className="text-custom-orang" fill="#FF9C00" size={10} />
        Top rated
      </div>
      <div className="flex items-center justify-between w-full mt-12">
        <p className="text-2xl font-medium text-zinc-700">Classic Greek Salad</p>
        <div className="flex items-center gap-3">
          <p className="text-xl text-main font-semibold">
            {format.number(215)} {t("currency")}
          </p>
        </div>
      </div>
    </div>
  );
}
