import { CopyButton } from "@/components/animate-ui/buttons/copy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ReferralCode() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Section Heading */}
      <h2 className="text-2xl font-medium text-zinc-800 mb-4">Refer & Earn</h2>

      {/* Referral Code Container */}
      <div className="w-full flex-center flex-col gap-10 bg-gray-50 rounded-4xl p-5 md:p-6 lg:p-8">
        <p className="text-base text-center font-normal text-zinc-800">
          Share this code with your friends to earn rewards when they make their first purchase!
        </p>

        <Image
          src="/assets/gifs/referral.gif"
          alt="Order Image"
          width={100}
          height={100}
          loading="lazy"
          className="rounded-2xl"
        />

        <div className="w-3/5 flex-center gap-2">
          <h3 className="text-lg font-medium w-fit shrink-0">Referral Code</h3>
          <div className="relative flex-1">
            {/* Referral Code Input */}
            <Input className="p-3 rounded-lg " value={"Jaida2025"} readOnly />
            <CopyButton
              content="Jaida2025"
              size="md"
              className="bg-transparent text-main genz:text-purple-500 hover:bg-transparent shadow-none absolute top-1/2 -translate-y-1/2 right-1.5"
            />
          </div>

          {/* Share Link Button */}
          <Button routable className="p-2.5 w-1/4 ">
            {t("share-link")}
          </Button>
        </div>
      </div>
    </>
  );
}
