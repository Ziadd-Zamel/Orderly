import StatusBadge from "@/components/common/status-badge";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function TrackingStatus() {
  const t = useTranslations("TrackingStatus");
  const locale = useLocale();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale).format(date);
  };
  return (
    <div className="w-full rounded-4xl bg-gray-50 p-5 md:p-6">
      <div className="mb-6 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        {/* Status text & Date - Time */}
        <div className="flex w-full items-start justify-between">
          <div>
            <h3 className="mb-2 text-base font-semibold text-zinc-800 sm:text-xl md:text-2xl">
              {t("title")}
            </h3>
            <p className="text-sm font-medium text-zinc-500">
              {t("arrivalTime", {
                date: formatDate("2022-04-05T10:07:00"),
              })}
            </p>
          </div>

          <div className="hidden w-1/4 text-end sm:block">
            <StatusBadge status="completed" />
          </div>
        </div>
      </div>

      {/* Gif and Text */}
      <div className="flex-center mb-10 flex-col gap-5">
        <Image
          src="/assets/gifs/order-delivered-box.gif"
          alt="Order Image"
          width={80}
          height={0}
          loading="lazy"
          className="circle"
        />

        <h3 className="text-lg font-semibold text-zinc-800 md:text-xl">{t("deliveredText")}</h3>
      </div>

      {/* Tracking Status */}
      <div className="hidden space-y-2 sm:block">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="bg-main genz:bg-gradient h-2.5 w-1/3 rounded-full"></div>
          <div className="bg-main genz:bg-gradient h-2.5 w-1/3 rounded-full"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-gray-200"></div>
        </div>

        {/* Status Date - Time */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* In progress date - time */}
          <div className="flex-center w-1/3 gap-2">
            <span className="flex-center circle bg-main genz:bg-gradient size-5">
              <FaCheck size={16} className="size-3 text-white" />
            </span>
            <span className="text-sm font-normal text-zinc-500 md:text-base">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>

          {/* Order preparation date - time */}
          <div className="flex-center w-1/3 gap-2">
            <span className="flex-center circle bg-main genz:bg-gradient size-5">
              <FaCheck size={16} className="size-3 text-white" />
            </span>
            <span className="text-sm font-normal text-zinc-500 md:text-base">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>

          {/* Order delivery date - time */}
          <div className="flex-center w-1/3 gap-2">
            <span className="flex-center circle size-5 border border-zinc-300 bg-gray-100">
              {/* <FaCheck size={16} className="size-3 text-white" /> */}
            </span>
            <span className="text-sm font-normal text-zinc-300 md:text-base">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>
        </div>
      </div>

      {/* Status Badge - Desktop Only */}
      <div className="text-center sm:hidden">
        <StatusBadge status="completed" />
      </div>
    </div>
  );
}
