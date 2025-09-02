"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ReactNode } from "react";

export default function HeadLine({
  children,
  title,
  className,
}: {
  children?: ReactNode;
  title: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();

  const images = {
    general: "/assets/vectors/headline-vectors.svg",
    genz: "/assets/vectors/headline-vectors-genz.svg",
  };

  if (!resolvedTheme || !images[resolvedTheme as keyof typeof images]) {
    return null;
  }

  return (
    <div className={cn("relative flex min-h-20 w-full items-center justify-between", className)}>
      <Image
        src={images[resolvedTheme as keyof typeof images]!}
        alt="Frame"
        fill
        priority
        className="h-full w-full object-cover"
      />
      <div
        className={cn(
          "box-container relative z-10 flex w-full flex-col items-center justify-between gap-6 md:flex-row md:rtl:!flex-row-reverse",
          {
            "rtl:justify-end": !children,
          },
        )}
      >
        <h3 className="text-2xl font-semibold text-zinc-800 md:text-3xl">{title}</h3>
        {children && children}
      </div>
    </div>
  );
}
