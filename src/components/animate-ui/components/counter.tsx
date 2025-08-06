"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Transition } from "motion/react";
import { FiMinus, FiPlus } from "react-icons/fi";

import {
  SlidingNumber,
  type SlidingNumberProps,
} from "@/components/animate-ui/text/sliding-number";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DeleteButton } from "@/components/common/shared-buttons";

type CounterProps = HTMLMotionProps<"div"> & {
  audience?: string | null;
  number: number;
  setNumber: (number: number) => void;
  slidingNumberProps?: Omit<SlidingNumberProps, "number">;
  buttonProps?: Omit<React.ComponentProps<typeof Button>, "onClick">;
  transition?: Transition;
};

function Counter({
  audience,
  number,
  setNumber,
  className,
  slidingNumberProps,
  buttonProps,
  transition = { type: "spring", bounce: 0, stiffness: 300, damping: 30 },
  ...props
}: CounterProps) {
  return (
    <motion.div
      data-slot="counter"
      layout
      transition={transition}
      className={cn(
        "flex items-center gap-x-2",
        audience !== "gen-z" ? "p-1 rounded-xl bg-main" : "rounded-full bg-gray-100 !p-1",
        className,
      )}
      {...props}
    >
      <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.9 }}>
        {/* Decrease Button */}
        {number > 1 ? (
          <Button
            size="icon"
            {...buttonProps}
            onClick={() => setNumber(number - 1)}
            className={cn(
              "text-white text-2xl disabled:bg-transparent bg-transparent",
              audience === "gen-z"
                ? "bg-linear-to-br from-[#A259FF] to-[#00F0B5] size-8 !circle !text-white text-2xl mt-[1px]"
                : "bg-transparent !hover:bg-transparent",
              buttonProps?.className,
            )}
          >
            <FiMinus className="w-6 h-6" />
          </Button>
        ) : (
          <DeleteButton audience={audience} />
        )}
      </motion.div>

      {/* Quantity Display */}
      <SlidingNumber
        number={number}
        {...slidingNumberProps}
        className={cn(
          "text-lg pr-1",
          { "text-white": audience !== "gen-z", "text-zinc-800": audience === "gen-z" },
          slidingNumberProps?.className,
        )}
      />

      {/* Increase Button */}
      <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.9 }}>
        <Button
          size="icon"
          {...buttonProps}
          onClick={() => setNumber(number + 1)}
          className={cn(
            "text-white text-2xl disabled:bg-transparent bg-transparent",
            audience === "gen-z"
              ? "bg-linear-to-br from-[#A259FF] to-[#00F0B5] size-8 !circle !text-white text-2xl mt-[1px]"
              : "bg-transparent !hover:bg-transparent",
            buttonProps?.className,
          )}
        >
          <FiPlus className="w-5 h-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

export { Counter, type CounterProps };
