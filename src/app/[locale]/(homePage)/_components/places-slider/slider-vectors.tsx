"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function SliderVectors() {
  // Theme
  const { resolvedTheme } = useTheme();

  // Variables
  const vectors = [
    {
      general: "/assets/vectors/plants-vector.svg",
      genz: "/assets/vectors/plants-vector-genz.svg",
      width: 250,
      height: 0,
      alt: "Plants vector",
      className:
        "w-[180px] md:w-auto absolute top-0 -left-4 md:left-10 -translate-y-1/2 z-10 opacity-15 genz:opacity-100",
    },
    {
      general: "/assets/vectors/garlic-vector.svg",
      genz: "/assets/vectors/garlic-vector-genz.svg",
      width: 90,
      height: 0,
      alt: "Garlic vector",
      className:
        "w-14 md:w-auto absolute bottom-0 left-8 md:translate-y-1/3 md:left-1/4 -rotate-90 z-10",
    },
    {
      general: "/assets/vectors/mint-vector.svg",
      genz: "/assets/vectors/mint-vector-genz.svg",
      width: 250,
      height: 0,
      alt: "Mint vector",
      className:
        "w-[160px] lg:w-auto absolute right-0 bottom-0 lg:-bottom-14 2xl:bottom-0 translate-y-1/3 z-10",
    },
  ];

  if (!resolvedTheme) {
    return null;
  }

  return (
    <>
      {vectors.map((vector, index) => (
        <Image
          key={index}
          src={vector[resolvedTheme as "general" | "genz"]}
          width={vector.width}
          height={vector.height}
          alt={vector.alt}
          className={vector.className}
          loading={"lazy"}
        />
      ))}
    </>
  );
}
