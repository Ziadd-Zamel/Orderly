"use client";

import { Counter } from "@/components/animate-ui/components/counter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import ExtraDishes from "./_components/extra-dishes";
import MobileExtraDishes from "./_components/mobile-extra-dishes";

export default function ProductPage() {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  // States
  const [number, setNumber] = React.useState(1);

  return (
    <>
      <section className="relative mt-36 mb-16 overflow-hidden py-8">
        <div className="box-container lg:flex-row flex-col-reverse flex items-center gap-8">
          {/* Product Information */}
          <div className=" w-full lg:w-1/3">
            <h2 className=" text-2xl sm:text-3xl md:text-[40px] text-zinc-800 font-semibold mb-4 leading-12">
              Crunchy Nut Coleslaw
            </h2>
            <div className="flex items-center gap-2 my-4">
              <Image
                src="/assets/icons/hot-dish-icon.svg"
                alt="Product Image"
                width={25}
                height={0}
              />
              <p className="text-zinc-600 text-base font-popins font-medium self-end leading-4">
                {`${format.number(10)}-${format.number(15)} ${t("minute")}`}
              </p>
            </div>

            <p className=" text-sm sm:text-base text-zinc-400 font-poppins mt-4 mb-16">
              A fresh coleslaw with cabbage, carrots, and creamy dressing, topped with roasted nuts
              for extra crunch and flavor.
            </p>

            <Counter
              number={number}
              setNumber={setNumber}
              className="w-fit bg-main/10 !text-main "
              slidingNumberProps={{ className: "text-main" }}
              buttonProps={{ className: "text-main" }}
            />
          </div>

          {/* Product image & Add to cart button */}
          <div className=" w-full lg:w-2/5 flex flex-col items-center">
            <Image
              src="/assets/Images/test-product.svg"
              alt="Product Image"
              width={450}
              height={0}
              className="rounded-lg"
            />
            <Button className="hidden w-3/5  lg:flex  rounded-2xl text-[22px] py-3 items-center gap-4 mt-4 genz:bg-purple-500 genz:rounded-full">
              <span>
                {format.number(250)}{" "}
                <small className="text-[13px] font-normal">{t("currency")}</small>
              </span>

              <span className="flex items-center genz:hidden">
                {t("add-to-cart")}
                <ChevronRight className="rtl:rotate-180 rtl:mr-2" />
              </span>
              <span className="genz:flex items-center hidden">
                {t("order")}
                <ChevronRight className="rtl:rotate-180" />
              </span>
            </Button>
          </div>
          {/* Extra Dishes with Animation */}
          <div className="flex-1 lg:block hidden">
            <ExtraDishes />
          </div>
        </div>
        <div className="block lg:hidden box-container">
          <MobileExtraDishes />
        </div>
      </section>
    </>
  );
}
