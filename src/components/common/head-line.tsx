"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { ReactNode } from "react";

export default function HeadLine({ children, title }: { children?: ReactNode; title: string }) {
  const { resolvedTheme } = useTheme();

  const images = {
    general: "/assets/vectors/headline-vectors.svg",
    genz: "/assets/vectors/headline-vectors-genz.svg",
  };

  if (!resolvedTheme || !images[resolvedTheme as keyof typeof images]) {
    return null;
  }

  return (
    <div className="relative min-h-20 flex items-center justify-between w-full ">
      <Image
        src={images[resolvedTheme as keyof typeof images]!}
        alt="Frame"
        fill
        priority
        className="w-full h-full object-cover"
      />
      <div className="box-container flex flex-col md:flex-row gap-6 items-center justify-between w-full  relative z-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-800">{title}</h3>
        {children && children}
      </div>
    </div>
  );
}
