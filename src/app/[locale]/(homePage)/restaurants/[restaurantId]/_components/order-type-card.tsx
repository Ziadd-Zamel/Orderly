// order-card.tsx
"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  return (
    <div
      onClick={() => onSelect?.(id, isRoute)}
      className={cn(
        "group flex items-center p-4 rounded-2xl h-[120px] gap-5 transition-all duration-500 ease-in-out cursor-pointer w-full hover:w-full sm:w-[350px] sm:hover:w-[370px]",
        selected ? "bg-[#F6F6F6] sm:w-[370px]" : "hover:bg-[#F6F6F6]",
      )}
    >
      <Image src={icon} alt={title} width={70} height={70} loading="lazy" />
      <div className="flex-1 ">
        <h6 className="text-lg sm:text-2xl font-medium text-zinc-900 truncate">{title}</h6>
        <p className="text-sm sm:text-base text-zinc-500 line-clamp-2">{description}</p>
      </div>

      {selected ? (
        <div className="p-1 bg-main rounded-lg ml-5 shrink-0">
          <Check size={20} className="text-white" />
        </div>
      ) : (
        <motion.div
          className="p-1 bg-custom-orange genz:bg-gradient rounded-lg -ml-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          animate={{ x: [-5, 10, -5] }}
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
