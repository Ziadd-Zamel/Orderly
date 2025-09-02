"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { FavoriteButton } from "./shared-buttons";
import { Button } from "../ui/button";
import { useFormatter, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function ProductCard() {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  // Navigation
  const route = useRouter();

  return (
    <Card className="group hover:bg-main genz:hover:bg-purple-500 relative mx-0 mt-16 w-full cursor-pointer rounded-3xl bg-slate-100 transition-all duration-300 hover:!scale-105">
      <CardContent className="px-5 pt-12 pb-0">
        <div className="genz:border-[3px] genz:border-gradient circle absolute top-0 left-1/2 z-10 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <Image
            src={"/assets/images/test-product.svg"}
            alt="Meal Name"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mb-6 flex flex-col justify-center">
          {/* Product Name */}
          <h2 className="truncate text-center text-base font-medium text-zinc-700 transition-all duration-300 group-hover:text-white">
            Barbecue Chicken Jollof Rice
          </h2>

          {/* Ready Duration */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/hot-dish-icon.svg"
              alt="Product Image"
              width={25}
              height={0}
            />
            <p className="font-popins self-end text-sm text-zinc-500 transition-all duration-300 group-hover:text-white">
              {`${format.number(10)}-${format.number(15)} ${t("minute")}`}
            </p>
          </div>
        </div>

        {/* Price & Favorite Button */}
        <div className="mb-6 flex items-center justify-between gap-2">
          {/* Price */}
          <p className="text-2xl text-zinc-800 transition-all duration-300 group-hover:text-white">
            {format.number(215)} <small>{t("currency")}</small>
          </p>

          {/* Favorite Button */}
          <FavoriteButton bgTheme={"light"} />
        </div>

        <Button
          type="button"
          routable
          onClick={() => route.push(`/restaurants/id/1`)}
          className="genz:bg-purple-500 group-hover:text-main genz:group-hover:bg-white genz:group-hover:text-purple-500 w-full rounded-xl transition-all duration-300 group-hover:bg-white"
        >
          {t("viwe details")}
        </Button>
      </CardContent>

      {/* <BorderBeam duration={8} size={150} /> */}
    </Card>
  );
}
