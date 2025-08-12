"use client";

import React, { useCallback, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type TableProps = {
  chairsCount: number;
  setChairsCount: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
  step?: number;
  ariaLabel?: string;
};

const Table = ({
  chairsCount,
  setChairsCount,
  min = 1,
  max = 6,
  step = 1,
  ariaLabel = "Chairs selection",
}: TableProps) => {
  // Translation
  const t = useTranslations();

  // Functions
  const decrease = useCallback(() => {
    setChairsCount((prev) => Math.max(min, prev - step));
  }, [min, step, setChairsCount]);

  const increase = useCallback(() => {
    setChairsCount((prev) => Math.min(max, prev + step));
  }, [max, step, setChairsCount]);

  // Variables
  const isDecrementDisabled = chairsCount <= min;
  const isIncrementDisabled = chairsCount >= max;

  // Side effects
  useEffect(() => {
    if (chairsCount < min) setChairsCount(min);
    else if (chairsCount > max) setChairsCount(max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chairsCount, min, max]);

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="h-full w-full lg:max-w-[80%] flex items-center justify-between gap-8"
    >
      <button
        type="button"
        aria-label="Decrease chairs"
        title="Decrease"
        className={cn(
          "bg-custom-orange flex-center text-white rounded-lg size-10 text-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        )}
        onClick={decrease}
        disabled={isDecrementDisabled}
      >
        <FiMinus aria-hidden="true" />
      </button>

      {/* Table */}
      <div className="flex-1 flex min-h-[380px] py-6 overflow-hidden">
        {/* Right Side */}
        <div className="flex-center flex-col gap-2 basis-[15%]">
          {/* 1 */}
          <div className="bg-[#EBEBEB] w-4 h-24 rounded-full" />

          {/* 2 */}
          <div
            className={cn("bg-[#EBEBEB] w-4 h-24 rounded-full transition duration-300", {
              "-translate-x-20 opacity-0": chairsCount < 2,
            })}
          />
        </div>

        {/* Center */}
        <div className="flex-center flex-1 flex-col gap-4">
          {/* 3 */}
          <div
            className={cn("bg-[#EBEBEB] w-24 h-4 rounded-full transition duration-300", {
              "-translate-y-20 opacity-0": chairsCount < 3,
            })}
          />

          {/* Table Box */}
          <div className="w-full flex-1 flex-center bg-[#EBEBEB] border-2 border-custom-orange rounded-lg">
            {/* i18n-able label */}
            <span className="text-base sm:text-lg text-zinc-600 font-medium">
              {chairsCount} {chairsCount === 1 ? t("chair") : t("chairs")}
            </span>
          </div>

          {/* 4 */}
          <div
            className={cn("bg-[#EBEBEB] w-24 h-4 rounded-full transition duration-300", {
              "translate-y-20 opacity-0": chairsCount < 4,
            })}
          />
        </div>

        {/* Left Side */}
        <div className="flex-center flex-col gap-2 basis-[15%]">
          {/* 5 */}
          <div
            className={cn("bg-[#EBEBEB] w-4 h-24 rounded-full transition duration-300", {
              "translate-x-20 opacity-0": chairsCount < 5,
            })}
          />

          {/* 6 */}
          <div
            className={cn("bg-[#EBEBEB] w-4 h-24 rounded-full transition duration-300", {
              "translate-x-20 opacity-0": chairsCount < 6,
            })}
          />
        </div>
      </div>

      {/* Increase button */}
      <button
        type="button"
        aria-label="Increase chairs"
        title="Increase"
        className={cn(
          "bg-custom-orange flex-center text-white rounded-lg size-10 text-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        )}
        onClick={increase}
        disabled={isIncrementDisabled}
      >
        <FiPlus aria-hidden="true" />
      </button>

      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {chairsCount} {chairsCount === 1 ? "chair selected" : "chairs selected"}
      </div>
    </div>
  );
};

export default React.memo(Table);
