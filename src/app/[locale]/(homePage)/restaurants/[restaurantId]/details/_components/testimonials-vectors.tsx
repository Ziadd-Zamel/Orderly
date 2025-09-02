"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function TestimonialsVectors() {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return;

  const theme = resolvedTheme as "general" | "genz";

  const images: { [key in "general" | "genz"]: string } = {
    general: "/assets/vectors/pan-vector.svg",
    genz: "/assets/vectors/pan-vector-genz.svg",
  };

  return (
    <>
      <Image
        src={images[theme]}
        alt="Testimonials vector for decoration"
        width={250}
        height={0}
        loading="lazy"
        className="absolute top-1/2 left-0 z-1 hidden -translate-y-1/2 lg:inline-block"
      />
    </>
  );
}
