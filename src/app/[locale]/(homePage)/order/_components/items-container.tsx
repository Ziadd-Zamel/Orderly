import OrderCard from "@/components/common/order-card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { RiStarFill } from "react-icons/ri";

export default function ItemsContainer() {
  const t = useTranslations("TrackingStatus");

  // Variables
  const orderRate = 4;
  return (
    <div className="h-[70vh] w-full overflow-hidden rounded-4xl bg-gray-50 p-5 pb-26 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        {/* Container Headline */}
        <h3 className="text-xl font-semibold text-zinc-800">{t("order-items")}</h3>

        <div className="flex items-center gap-2">
          {/* Place Image */}
          <Image
            src="/assets/Images/bazooka.png"
            alt="Product Image"
            width={50}
            height={0}
            className="circle"
          />

          {/* Place name & Rate */}
          <div className="space-y-1">
            <h5 className="text-base font-semibold text-zinc-800">Bazooka</h5>
            <ul className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <li key={i}>
                  {i < orderRate ? (
                    <RiStarFill size={14} className="text-yellow-400" />
                  ) : (
                    <RiStarFill size={14} className="text-gray-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hide-scrollbar h-full space-y-6 overflow-y-auto sm:space-y-10">
        {Array.from({ length: 5 }, (_, i) => (
          <OrderCard className="genz:border-gradient border-none" key={i} />
        ))}
      </div>
    </div>
  );
}
