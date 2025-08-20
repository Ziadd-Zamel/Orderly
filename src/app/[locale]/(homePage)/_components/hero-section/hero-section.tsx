"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";

const BackgroundVectors = dynamic(() => import("./hero-vectors"), {
  ssr: false,
});

// Animation variants for the heading (letter-by-letter)
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Number.isFinite(i) ? i * 0.05 : 0, // Simplified delay with strict check
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
};

// Animation variants for the description
const descriptionVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 1.5,
    },
  },
};

// Animation variants for the image
const imageVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, 1, -1, 1, -1, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
      repeat: 2,
    },
  },
};

// Animation variants for the search input
const searchInputVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 1.5,
    },
  },
};

export default function HeroSection() {
  // Translation
  const t = useTranslations();

  // Theme
  const { resolvedTheme } = useTheme();

  // Variables
  const headingText = t("heroSection.heading");

  return (
    <section className="genz:hero-bg mb-20">
      <div className="box-container pt-28 lg:py-36 pb-16">
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 relative z-20">
          <div className="w-full lg:w-3/5 flex flex-col items-start gap-10 ">
            {/* Heading */}
            <h2 className="max-w-[90%] text-[37px] md:text-5xl lg:text-[54px] xl:text-[68px] text-main genz:text-gradient font-poppins font-bold lg:leading-20 lg:mb-10">
              {headingText.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`} // Unique key
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i} // Pass index as custom prop
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            {/* Hero Description */}
            <motion.div
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="relative before:w-1.5 before:h-full before:absolute before:start-0 before:top-0 before:rounded-t-full before:rounded-b-full ps-4 before:bg-main genz:before:bg-purple-500"
            >
              <p className="w-full lg:max-w-[85%] text-lg md:text-xl text-zinc-800 font-poppins">
                {t("heroSection.description")}
              </p>
            </motion.div>

            {/* Search Component */}
            <motion.div
              variants={searchInputVariants}
              initial="initial"
              animate="visible"
              className="w-full lg:w-4/5 relative p-1.5 bg-main/10 genz:bg-white flex gap-2 rounded-full"
              aria-label={t("search-input")}
            >
              <Input
                className="bg-background border-none  h-10"
                placeholder={t("search-input-placeholder") || "Search..."}
              />
              {/* Search Button */}
              <Button className="rounded-full w-[30%]" aria-label={t("search-button")}>
                {t("search") || "Search"}
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-2/5 flex-center h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] relative z-20">
            <motion.div
              key={resolvedTheme === "genz" ? "genz-hero" : "hero-image"}
              className="relative w-full h-full"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
            >
              <Image
                src={"/assets/Images/hero-image.png"}
                alt="Hero Image"
                fill
                priority
                sizes="100%"
                className="w-full h-full object-contain genz:hidden"
              />

              <Image
                src={"/assets/Images/genz-hero.png"}
                alt="Hero Image"
                fill
                priority
                sizes="100%"
                className="w-full h-full object-contain hidden genz:block"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Vectors */}
      <BackgroundVectors />
    </section>
  );
}
