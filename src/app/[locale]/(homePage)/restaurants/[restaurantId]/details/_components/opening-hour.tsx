/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getCurrentDay } from "@/lib/utils/get-current-day";
import { openingHours } from "@/lib/constants/data.constant";
import { useTranslations } from "next-intl";

export default function OpeningHours() {
  const [activeDay, setActiveDay] = useState(() => getCurrentDay());
  const t = useTranslations();
  return (
    <div className="box-container mt-20 w-full">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-6 sm:text-2xl">
        {t("opening-hours")}
      </h2>

      <div className="flex flex-col items-center gap-2 sm:h-20 sm:flex-row sm:flex-wrap sm:gap-3">
        {openingHours.map((hour) => (
          <div
            key={hour.day}
            className={cn(
              "flex-center w-full rounded-xl p-2 text-sm sm:w-fit sm:min-w-1/7 sm:p-3",
              activeDay === hour.day
                ? "genz:bg-[#A259FF1A] text-main genz:text-gradient hover:text-main genz:hover:text-gradient bg-[#12957514]"
                : "bg-[#EEEEEE4F] text-zinc-800",
            )}
          >
            <span className="flex items-center gap-2 sm:gap-3 sm:text-base xl:text-xl">
              <span className="font-medium">{t(hour.day)}</span>
              {activeDay === hour.day && (
                <span className="font-normal text-zinc-700">
                  {t("time-formatter", { value: new Date(hour.timeFrom) })} -{" "}
                  {t("time-formatter", { value: new Date(hour.timeTo) })}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
