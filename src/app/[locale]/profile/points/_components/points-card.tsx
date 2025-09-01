import React, { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function PointsCard() {
  const t = useTranslations("profile");

  // Static values
  const currentPoints = 2000;
  const nextTierPoints = 3500;

  // Calculate percentage dynamically
  const progressValue = useMemo(() => {
    return Math.min((currentPoints / nextTierPoints) * 100, 100);
  }, [currentPoints, nextTierPoints]);

  return (
    <section className="w-full relative" aria-labelledby="points-section-title">
      <div className="bg-main genz:bg-gradient flex flex-wrap justify-between gap-5 rounded-3xl p-4 sm:p-7 overflow-hidden relative">
        {/* Content */}
        <div className="flex flex-col flex-1 min-w-[300px] gap-6 sm:gap-12 lg:max-w-[400px] xl:max-w-[600px]">
          {/* Current Points */}
          <header className="w-full">
            <h2 id="points-section-title" className="text-white text-sm sm:text-base font-medium">
              {t("points.currentPoints")}
            </h2>
            <div className="mt-3 sm:mt-5 flex flex-wrap items-center justify-between gap-3 sm:gap-2 w-full">
              <div
                className="flex items-center gap-2 flex-wrap"
                aria-label={t("points.currentValue", { current: currentPoints })}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold">
                  {currentPoints}
                </span>
                <span className="text-white text-sm sm:text-base">{t("points.points")}</span>
              </div>
              <Button
                className="bg-gradient-to-r from-[#F6CB42] to-[#FF9C00] genz:bg-[#FFF200] text-sm sm:text-lg px-4 sm:px-8 py-2 rounded-full whitespace-nowrap"
                aria-label={t("points.vipTier")}
              >
                {t("points.vipTier")}
              </Button>
            </div>
          </header>

          {/* Progress */}
          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-base" id="progress-label">
              {t("points.progressToNextTier")}
            </p>
            <Progress
              value={progressValue}
              aria-labelledby="progress-label"
              className="bg-gray-200 [&>div]:bg-[#FF9C00] genz:[&>div]:bg-[#FFF200] h-2 sm:h-3 w-full"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 sm:pr-5">
              <p className="text-white text-xs sm:text-sm">
                {t("points.currentValue", { current: currentPoints })}
              </p>
              <p className="text-white text-xs sm:text-sm">
                {t("points.nextTierValue", { next: nextTierPoints })}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <Image
          src="/assets/Images/middle.png"
          alt={t("points.imageAlt", { default: "Points illustration" })}
          width={550}
          height={400}
          loading="lazy"
          className="lg:absolute rtl:lg:-left-20 rtl:xl:-left-40 ltr:lg:-right-20 ltr:xl:-right-40 xl:-top-6 xl:w-[550px] lg:w-[350px]"
        />
        {/* Image */}
      </div>
      <Image
        src="/assets/icons/crown.svg"
        alt={t("points.imageAlt", { default: "Points illustration" })}
        width={50}
        height={50}
        loading="lazy"
        className=" absolute -top-9 -start-5 -rotate-6 rtl:rotate-45"
      />
    </section>
  );
}
