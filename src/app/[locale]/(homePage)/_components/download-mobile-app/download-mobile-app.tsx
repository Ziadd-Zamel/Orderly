"use client";

import AppButtons from "@/components/layout/footer/components/app-buttons";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function DownloadMobileApp() {
  // Theme
  const { theme } = useTheme();
  const image = theme === "genz" ? "/assets/Images/genz-mobile.png" : "/assets/Images/mobile.png";

  return (
    <div className="bg-main genz:footer-bg relative md:mt-28">
      <div className=" box-container flex gap-8 py-6 md:py-10 lg:py-16 border-b genz:border-b-white">
        {/* Mobile Logo Section */}
        <div className="relative md:w-1/3 hidden md:flex-center">
          <Image
            src={image}
            alt="Mobile Application image"
            width={200}
            height={0}
            loading="lazy"
            className="mb-4 absolute top-0 start-1/2 -translate-x-1/2 -translate-y-[35%] z-20 animate-[rotateAnimation_5s_ease-in-out_3s_infinite] genz:hidden"
          />

          <Image
            src={image}
            alt="Mobile Application image"
            width={180}
            height={0}
            loading="lazy"
            className="mb-4 absolute top-0 start-1/2 -translate-x-1/2 -translate-y-[35%] z-20 animate-[rotateAnimation_5s_ease-in-out_3s_infinite] hidden genz:block"
          />

          <Image
            src={"/assets/Images/circle-mobile.svg"}
            alt="Mobile Application image"
            width={230}
            height={0}
            loading="lazy"
            className="mb-4 absolute top-0 start-1/2 -translate-x-1/2 -translate-y-1/4 z-10"
          />
        </div>

        {/* Download App Content */}
        <div className="flex flex-col gap-6">
          <h2 className="max-w-3xl text-white genz:text-zinc-800 text-xl md:text-3xl lg:text-4xl italic">
            Let’s start your order or table reservation easily!
          </h2>
          <p className="text-white genz:text-zinc-800 text-base md:text-lg font-light">
            Download Orderly and join our growing community of happy users
          </p>
          <AppButtons />
        </div>
      </div>
    </div>
  );
}
