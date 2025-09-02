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
  min = 2,
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
      className="flex h-full w-full flex-col-reverse items-center justify-between gap-8 sm:max-w-[70%] sm:flex-row lg:max-w-[80%] xl:max-w-[60%]"
    >
      <button
        type="button"
        aria-label="Decrease chairs"
        title="Decrease"
        className={cn(
          "bg-custom-orange genz:bg-[#FF6F61] flex-center size-10 cursor-pointer rounded-lg text-2xl text-white disabled:cursor-not-allowed disabled:opacity-50",
        )}
        onClick={decrease}
        disabled={isDecrementDisabled}
      >
        <FiMinus aria-hidden="true" />
      </button>

      {/* Table */}
      <div className="flex w-full flex-1 gap-3 overflow-hidden py-6 sm:max-w-4/5">
        {/* Right Side */}
        <div className="flex-center basis-[15%] flex-col gap-2">
          {/* 3 */}
          <div
            className={cn("h-24 w-4 rounded-full bg-[#EBEBEB] duration-300", {
              "translate-y-1/2": chairsCount === 3 || chairsCount === 4,
              "-translate-x-20 translate-y-1/2 opacity-0": chairsCount < 3,
            })}
          />

          {/* 5 */}
          <div
            className={cn("h-24 w-4 rounded-full bg-[#EBEBEB] transition duration-300", {
              "translate-x-20 opacity-0": chairsCount < 5,
            })}
          />
        </div>

        {/* Center */}
        <div className="flex-center flex-1 flex-col gap-4">
          {/* 1 */}
          <div className="h-4 w-24 rounded-full bg-[#EBEBEB] transition duration-300" />

          {/* Table Box */}
          <div
            className={cn(
              "flex-center border-custom-orange genz:border-[#FF6F61] w-full rounded-lg border-2 bg-[#EBEBEB] duration-300",
              { "h-38": chairsCount <= 2, "h-44": chairsCount <= 4, "h-64": chairsCount > 4 },
            )}
          >
            <span className="text-base font-medium text-zinc-600 sm:text-lg">
              {chairsCount} {chairsCount === 1 ? t("chair") : t("chairs")}
            </span>
          </div>

          {/* 2 */}
          <div className="h-4 w-24 rounded-full bg-[#EBEBEB] transition duration-300" />
        </div>

        {/* Left Side */}
        <div className="flex-center basis-[15%] flex-col gap-2">
          {/* 4 */}
          <div
            className={cn("h-24 w-4 rounded-full bg-[#EBEBEB] transition duration-300", {
              "translate-y-1/2": chairsCount === 4,
              "translate-x-20 translate-y-1/2 opacity-0": chairsCount < 4,
            })}
          />

          {/* 6 */}
          <div
            className={cn("h-24 w-4 rounded-full bg-[#EBEBEB] transition duration-300", {
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
          "bg-custom-orange genz:bg-[#FF6F61] flex-center size-10 cursor-pointer rounded-lg text-2xl text-white disabled:cursor-not-allowed disabled:opacity-50",
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
