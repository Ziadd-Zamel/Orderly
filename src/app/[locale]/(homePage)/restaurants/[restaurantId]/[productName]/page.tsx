"use client";

import { Counter } from "@/components/animate-ui/components/counter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ProductPage() {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  // States
  const [number, setNumber] = React.useState(1);

  return (
    <section className="mt-36 mb-16">
      <div className="box-container flex items-center gap-8">
        {/* Product Information */}
        <div className="w-1/3">
          <h2 className="text-[40px] text-zinc-800 font-semibold mb-4 leading-12">
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

          <p className="text-base text-zinc-400 font-poppins mt-4 mb-16">
            A fresh coleslaw with cabbage, carrots, and creamy dressing, topped with roasted nuts
            for extra crunch and flavor.
          </p>

          <Counter
            number={number}
            setNumber={setNumber}
            className="w-fit bg-main/10 !text-main"
            slidingNumberProps={{ className: "text-main" }}
            buttonProps={{ className: "text-main" }}
          />
        </div>

        {/* Product image & Add to cart button */}
        <div className="w-1/3">
          <Image
            src="/assets/Images/test-product.svg"
            alt="Product Image"
            width={450}
            height={0}
            className="rounded-lg"
          />
          <Button className="flex w-4/5 mx-auto rounded-2xl text-[22px] py-3 items-center gap-4 mt-4">
            <span>
              {format.number(250)}{" "}
              <small className="text-[13px] font-normal">{t("currency")}</small>
            </span>

            <span className="flex items-center">
              {t("add-to-cart")}
              <ChevronRight />
            </span>
          </Button>
        </div>

        {/* Extra */}
        <div className="w-1/3"></div>
      </div>
    </section>
  );
}
