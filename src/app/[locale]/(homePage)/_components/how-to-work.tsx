import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function HowToWork() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="my-20 overflow-hidden">
      <div className="box-container">
        <h2 className="text-xl text-custom-orange genz:text-purple-500 font-medium text-center mb-4">
          {t("how-to-work")}
        </h2>

        <motion.p
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-2xl font-poppins font-bold text-zinc-800 mb-16"
        >
          {t("food-us")}
        </motion.p>

        <div className="relative flex gap-20 lg:gap-6 flex-col lg:flex-row ">
          {/* Step 1 */}
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center text-center lg:text-start gap-6 w-full lg:w-1/4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <Image
                src={"/assets/Images/labtop.png"}
                alt="Step 1"
                width={200}
                height={0}
                className="mb-4 w-[200px] 2xl:w-[250px]"
                loading="lazy"
              />{" "}
            </motion.div>

            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="w-full text-xl 2xl:text-2xl font-bold text-zinc-800 mb-2"
            >
              {t("browse")}
            </motion.h3>

            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="text-sm 2xl:text-base text-zinc-800"
            >
              {t("pick-your-favorite-restaurant")}
            </motion.p>
          </motion.div>

          {/* Step 2 */}
          <div className="w-full lg:w-1/4 flex flex-col 2xl:gap-6 items-center flex-1 -mt-4">
            <motion.h3
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 100 }}
              transition={{ duration: 1, delay: 5.5 }}
              className="text-xl 2xl:text-3xl text-zinc-800 font-bold"
            >
              {t("choose")}
            </motion.h3>
            <ul className="flex flex-col gap-6 xl:gap-10 mt-5">
              <motion.li
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 100, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 6.5 },
                  scale: { duration: 1, delay: 7 },
                }}
                className="flex items-center gap-6"
              >
                <Image
                  src={"/assets/icons/restaurant-table.svg"}
                  alt="Step 2"
                  width={40}
                  height={0}
                  className="w-10 2xl:w-16"
                  loading="lazy"
                />
                <p className=" font-poppins font-medium 2xl:text-lg text-zinc-800 font-poppins">
                  {t("for-dine-in")}
                </p>{" "}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 100, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 8 },
                  scale: { duration: 1, delay: 8.5 },
                }}
                className="flex items-center  gap-6"
              >
                <Image
                  src={"/assets/icons/delivery-man.svg"}
                  alt="Step 2"
                  width={40}
                  height={0}
                  className="w-10 2xl:w-16"
                  loading="lazy"
                />
                <p className="font-poppins font-medium 2xl:text-lg text-zinc-900 font-poppins">
                  {t("delivery")}
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 100, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 9.5 },
                  scale: { duration: 1, delay: 10 },
                }}
                className="flex items-center gap-6"
              >
                <Image
                  src={"/assets/icons/cup-takeaway.svg"}
                  alt="Step 2"
                  width={40}
                  height={0}
                  className="w-10 2xl:w-16"
                  loading="lazy"
                />
                <p className=" font-poppins font-medium 2xl:text-lg text-zinc-800 font-poppins">
                  {t("and-take-away")}
                </p>
              </motion.li>
            </ul>
          </div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1, delay: 13 }}
            className="flex flex-col items-center text-center lg:text-start gap-6 w-full lg:w-1/4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 14 }}
            >
              <Image
                src={"/assets/Images/empty-packages.png"}
                alt="Step 1"
                width={200}
                height={0}
                className="mb-4 w-[200px] 2xl:w-[250px]"
                loading="lazy"
              />
            </motion.div>

            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 14 }}
              className="lg:w-[90%]  text-xl 2xl:text-2xl lg:text-end font-bold text-zinc-800 mb-2 lg:me-auto"
            >
              {t("enjoy")}
            </motion.h3>
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="text-sm 2xl:text-base text-zinc-800"
            >
              {t("sit-back-and-relax")}{" "}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ width: "0" }}
            animate={{ width: "50%" }}
            transition={{ duration: 2, delay: 3 }}
            className="absolute h-[380px] 2xl:h-[430px] -top-20 xl:-top-24 z-40 hidden xl:flex justify-start overflow-hidden 
             ltr:left-24 ltr:2xl:left-20 rtl:right-24 rtl:2xl:right-20"
          >
            <div className="relative w-[380px] h-[380px] 2xl:w-[430px] 2xl:h-[430px] ">
              <div className="relative w-[380px] h-[380px] 2xl:w-[430px] 2xl:h-[430px] ">
                {locale === "ar" ? (
                  <Image src={"/assets/icons/right-wave.png"} alt="Wavy Line" fill loading="lazy" />
                ) : (
                  <Image src={"/assets/icons/left-wave.png"} alt="Wavy Line" fill loading="lazy" />
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ width: "0" }}
            animate={{ width: "50%" }}
            transition={{ duration: 2, delay: 11.5 }}
            className="absolute h-[380px] 2xl:h-[430px] -top-20 xl:-top-[98px] z-40 hidden xl:flex justify-start overflow-hidden
             ltr:left-3/5 ltr:translate-x-4 ltr:min-[1700px]:translate-x-24
             rtl:right-3/5 rtl:-translate-x-4 rtl:min-[1700px]:-translate-x-24"
          >
            <div className="relative w-[380px] h-[380px] 2xl:w-[430px] 2xl:h-[430px] ">
              <div className="relative w-[380px] h-[380px] 2xl:w-[430px] 2xl:h-[430px] ">
                {locale === "ar" ? (
                  <Image src={"/assets/icons/left-wave.png"} alt="Wavy Line" fill loading="lazy" />
                ) : (
                  <Image src={"/assets/icons/right-wave.png"} alt="Wavy Line" fill loading="lazy" />
                )}{" "}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
