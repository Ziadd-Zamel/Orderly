"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function CornerVectors() {
  // Hooks
  const { resolvedTheme } = useTheme();

  // Variables
  const images = [
    {
      general: "/assets/vectors/plants-vector.svg",
      genz: "/assets/vectors/plants-vector-genz.svg",
      width: 230,
      height: 0,
      alt: "Planets vector",
      className: "absolute top-1/5 start-0 opacity-10 genz:opacity-100 z-1",
    },
    {
      general: "/assets/vectors/big-garlic-vector.svg",
      genz: "/assets/vectors/big-garlic-vector-genz.svg",
      width: 210,
      height: 0,
      alt: "Big garlic vector",
      className: "absolute bottom-0 end-0 z-1",
    },
  ];

  if (!resolvedTheme) return null;

  return (
    <div className="fixed inset-0 w-full h-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image[resolvedTheme as "general" | "genz"]}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={image.className}
          loading={"lazy"}
        />
      ))}
    </div>
  );
}
