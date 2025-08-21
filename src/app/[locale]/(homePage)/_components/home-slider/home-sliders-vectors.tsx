"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function HomeSlidersVectors() {
  // Theme
  const { resolvedTheme } = useTheme();

  // Variables
  const vectors = [
    {
      general: "/assets/vectors/garlic-vector.svg",
      genz: "/assets/vectors/garlic-vector-genz.svg",
      width: 80,
      height: 0,
      alt: "Garlic vector",
      className: "absolute top-0 start-[35%] -translate-y-1/2 z-10 opacity-",
    },
  ];

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
