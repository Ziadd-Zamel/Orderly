"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import GroupButton from "./general-group-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import GenZGroupButton from "./genz-group-btn";

export default function RestaurantInfo() {
  // Translations
  const t = useTranslations();

  // Theme
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return;

  return (
    <div className="box-container w-full">
      {/* Mobile & Tablet Layout */}
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <div className="text-center">
          <h2 className="mb-2 flex items-center justify-center gap-2 text-2xl font-semibold sm:text-3xl">
            Vinny&apos;s Pizza
            <ChevronRight size={25} className="flex-shrink-0" />
          </h2>
          <div className="flex items-center justify-center gap-1">
            <Star
              fill={"#FF9C00"}
              className="text-custom-orange genz:hidden size-5 flex-shrink-0"
            />

            <Star fill={"#A259FF"} className="genz:block hidden size-5 flex-shrink-0" />
            <Star
              fill="#FF9C00"
              className="text-custom-orange genz:text-purple-500 size-6 flex-shrink-0"
            />
            <span className="text-sm font-medium">4.8</span>
            <span className="text-sm text-gray-400">(324 reviews)</span>
          </div>
        </div>

        <div className="flex w-full max-w-sm items-center justify-between gap-4">
          <GroupButton />

          <Button
            variant="outline"
            className="flex flex-1 items-center gap-2 rounded-full bg-transparent px-4 py-2.5 text-sm"
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
      <div className="hidden w-full flex-row items-center justify-between gap-6 lg:flex">
        <div className="w-72">
          {resolvedTheme && resolvedTheme === "general" ? <GroupButton /> : <GenZGroupButton />}
        </div>

        <div className="flex flex-1 flex-col items-center text-center">
          <Link
            href={"/restaurants/name/details"}
            className="flex items-center justify-center gap-2 text-4xl font-semibold"
          >
            Vinny&apos;s Pizza
            <ChevronRight size={25} className="flex-shrink-0 rtl:rotate-180" />
          </Link>
          <div className="mt-3 flex items-center justify-center gap-1">
            <Star
              fill={"#FF9C00"}
              className="text-custom-orange genz:hidden size-5 flex-shrink-0"
            />

            <Star
              fill={"#A259FF"}
              className="genz:block hidden size-5 flex-shrink-0 text-[#A259FF]"
            />

            <span className="font-medium">4.8</span>
            <span className="text-gray-400">(324 reviews)</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="genz:text-purple-500 genz:border-purple-500 flex flex-shrink-0 items-center gap-2 rounded-full bg-transparent px-12 py-4 whitespace-nowrap"
        >
          <Image
            src={"/assets/icons/bill.svg"}
            alt="bill icon"
            width={20}
            height={20}
            className="genz:hidden flex-shrink-0"
          />
          <Image
            src={"/assets/icons/bill-genz.svg"}
            alt="bill icon"
            width={20}
            height={20}
            className="genz:block hidden flex-shrink-0"
          />
          {t("need-help")}
        </Button>
      </div>
    </div>
  );
}
