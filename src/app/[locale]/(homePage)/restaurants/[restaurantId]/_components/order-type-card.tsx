// order-card.tsx
"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface OrderCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  selected?: boolean;
  isRoute?: boolean;
  onSelect?: (id: string, isRoute: boolean) => void;
}

function OrderTypeCard({
  id,
  title,
  description,
  icon,
  selected,
  isRoute = false,
  onSelect,
}: OrderCardProps) {
  // Translation
  const locale = useLocale();

  // Variables
  const isRTL = locale === "ar";

  return (
    <div
      onClick={() => onSelect?.(id, isRoute)}
      className={cn(
        "group flex h-[120px] w-full cursor-pointer flex-row items-center gap-5 rounded-2xl p-4 transition-all duration-500 ease-in-out hover:w-full sm:w-[400px] sm:hover:w-[430px] rtl:sm:w-[420px] rtl:sm:hover:w-[450px]",
        selected ? "bg-[#F6F6F6] sm:w-[370px]" : "hover:bg-[#F6F6F6]",
      )}
    >
      <Image src={icon} alt={title} width={70} height={70} loading="lazy" />
      <div className="flex-1">
        <h3 className="truncate text-lg leading-relaxed font-medium text-zinc-900 sm:text-2xl">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-500 sm:text-base">{description}</p>
      </div>

      {selected ? (
        <div className="bg-main genz:bg-gradient ml-5 shrink-0 rounded-lg p-1">
          <Check size={20} className="text-white" />
        </div>
      ) : (
        <motion.div
          className="bg-custom-orange genz:bg-gradient -ml-5 shrink-0 rounded-lg p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rtl:rotate-180"
          animate={isRTL ? { x: [-20, -5, -20] } : { x: [-5, 10, -5] }}
          transition={{
            delay: 1,
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowRight size={20} className="text-white" />
        </motion.div>
      )}
    </div>
  );
}

export default React.memo(OrderTypeCard);
