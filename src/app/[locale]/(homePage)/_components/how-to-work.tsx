import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function HowToWork() {
  // Translation
  const t = useTranslations();
  return (
    <section className="my-20">
      <div className="box-container">
        <h2 className="text-xl text-custom-orange font-poppins font-medium text-center mb-4">
          {t("how-to-work")}
        </h2>

        <p className="text-center text-2xl font-poppins font-bold text-zinc-800 mb-8">
          {t("food-us")}
        </p>

        <div className="relative flex gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
            <Image
              src={"/assets/Images/labtop.png"}
              alt="Step 1"
              width={300}
              height={0}
              className="mb-4"
              loading="lazy"
            />
            <h3 className="w-full text-2xl font-bold text-zinc-800 mb-2">{t("browse")}</h3>
            <p className="text-base text-zinc-600">{t("pick-your-favorite-restaurant")}</p>
          </div>

          {/* Step 2 */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 items-center flex-1">
            <h3 className="text-2xl text-zinc-800 font-bold">{t("choose")}</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-6">
                <Image
                  src={"/assets/icons/restaurant-table.svg"}
                  alt="Step 2"
                  width={60}
                  height={0}
                  className=""
                  loading="lazy"
                />
                <p className="text-lg font-poppins font-medium text-zinc-800 font-poppins">
                  {t("for-dine-in")}
                </p>
              </li>

              <li className="flex items-center gap-6">
                <Image
                  src={"/assets/icons/delivery-man.svg"}
                  alt="Step 2"
                  width={60}
                  height={0}
                  className=""
                  loading="lazy"
                />
                <p className="text-lg font-poppins font-medium text-zinc-800 font-poppins">
                  {t("delivery")}
                </p>
              </li>

              <li className="flex items-center gap-6">
                <Image
                  src={"/assets/icons/cup-takeaway.svg"}
                  alt="Step 2"
                  width={60}
                  height={0}
                  className=""
                  loading="lazy"
                />
                <p className="text-lg font-poppins font-medium text-zinc-800 font-poppins">
                  {t("and-take-away")}
                </p>
              </li>
            </ul>
            <div></div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
            <Image
              src={"/assets/Images/empty-packages.png"}
              alt="Step 1"
              width={280}
              height={0}
              className="mb-6"
              loading="lazy"
            />
            <h3 className="w-[90%] text-2xl text-end font-bold text-zinc-800 mb-2 me-auto">
              {t("enjoy")}
            </h3>
            <p className="text-base text-zinc-600">{t("sit-back-and-relax")}</p>
          </div>

          <div className="absolute w-[450px] !h-[450px] top-0 -translate-y-20 start-20 z-40">
            <Image
              src={"/assets/icons/left-wave.png"}
              alt="Wavy Line"
              fill
              className="object-fit"
              loading="lazy"
            />
          </div>

          <div className="absolute w-[450px] !h-[450px] top-0 -translate-y-20 end-24 z-40">
            <Image
              src={"/assets/icons/right-wave.png"}
              alt="Wavy Line"
              fill
              className="object-fit"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
