"use client";
import { useState } from "react";
import { usePathname } from "@/i18n/routing";
import { useFormatter, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Counter } from "../animate-ui/components/counter";
import { RiStarFill } from "react-icons/ri";

export default function OrderCard({ className }: { className?: string }) {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  // Navigation
  const pathname = usePathname();
  const isOrderPage = pathname.includes("/order/");

  // States
  const [number, setNumber] = useState(1);

  return (
    <div
      className={cn(
        "relative bg-white  genz:border-gradient rounded-3xl px-3 sm:px-9 py-6 min-h-[90px] w-full sm:mt-16 flex flex-col items-center sm:items-start ",
        className,
      )}
    >
      <div className="size-[90px] circle sm:absolute sm:-top-[40%] shadow-xl">
        <Image
          src={"/assets/images/place-demo.png"}
          width={90}
          height={90}
          alt="Food"
          className="rounded-full"
        />
        <div className="w-16 bg-[#FFEBCA] rounded-full flex items-center justify-center font-normal gap-[2px] py-1 text-custom-orange text-[8px] shrink-0 absolute z-20 top-2 sm:left-3/5">
          <RiStarFill className="text-custom-orange" fill="#FF9C00" size={8} />
          Top rated
        </div>
      </div>
      <div className="flex sm:flex-row items-center justify-between w-full mt-5 sm:mt-8">
        <p className=" text-base sm:text-2xl font-medium text-zinc-700">Classic Greek Salad</p>
        <div className="flex items-center gap-6">
          {isOrderPage ? (
            <span className="flex-center size-6 md:size-8 rounded-md bg-main text-white text-sm md:text-[15px] font-medium">
              01
            </span>
          ) : (
            <Counter number={number} setNumber={setNumber} className="h-10" />
          )}
          <p className=" text-base sm:text-xl text-main font-semibold genz:text-gradient">
            {format.number(215)} {t("currency")}
          </p>
        </div>
      </div>
    </div>
  );
}
