"use client";

import { Counter } from "@/components/animate-ui/components/counter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function ProductPage() {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  // States
  const [number, setNumber] = React.useState(1);
  const [activeDish, setActiveDish] = React.useState<number | null>(null);
  const [activeSubDish, setActiveSubDish] = React.useState<Record<number, number | null>>({});

  const extraDishes = [
    {
      id: 1,
      name: "Nut",
      image: "/assets/Images/nuts.png",
      price: 50,
      subDishes: [
        { id: 1, name: "Almonds", price: 50 },
        { id: 2, name: "Cashews", price: 60 },
        { id: 3, name: "Walnuts", price: 70 },
        { id: 4, name: "Pecans", price: 80 },
      ],
    },
    {
      id: 2,
      name: "Cashews",
      image: "/assets/Images/nuts.png",
      price: 60,
      subDishes: [
        { id: 1, name: "Almonds", price: 50 },
        { id: 2, name: "Cashews", price: 60 },
        { id: 3, name: "Walnuts", price: 70 },
      ],
    },
    {
      id: 3,
      name: "Walnuts",
      image: "/assets/Images/nuts.png",
      price: 70,
      subDishes: [
        { id: 1, name: "Almonds", price: 50 },
        { id: 2, name: "Cashews", price: 60 },
        { id: 3, name: "Walnuts", price: 70 },
      ],
    },
  ];

  const handleDishClick = (dishId: React.SetStateAction<number | null>) => {
    setActiveDish(activeDish === dishId ? null : dishId);
  };

  const handleSubDishClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    dishId: number,
    subDishId: number | null,
  ) => {
    e.stopPropagation();
    setActiveSubDish((prev) => ({
      ...prev,
      [dishId]: prev[dishId] === subDishId ? null : subDishId,
    }));
  };

  return (
    <>
      <section className="relative mt-36 mb-16 overflow-hidden py-8">
        <div className="box-container flex items-center gap-8">
          {/* Product Information */}
          <div className="w-1/3">
            <h2 className="text-[40px] text-zinc-800 font-semibold mb-4 leading-12">
              Crunchy Nut Coleslaw
            </h2>
            <div className="flex items-center gap-2 my-4">
              <Image
                src="/assets/icons/hot-dish-icon.svg"
                alt="Product Image"
                width={25}
                height={0}
              />
              <p className="text-zinc-600 text-base font-popins font-medium self-end leading-4">
                {`${format.number(10)}-${format.number(15)} ${t("minute")}`}
              </p>
            </div>

            <p className="text-base text-zinc-400 font-poppins mt-4 mb-16">
              A fresh coleslaw with cabbage, carrots, and creamy dressing, topped with roasted nuts
              for extra crunch and flavor.
            </p>

            <Counter
              number={number}
              setNumber={setNumber}
              className="w-fit bg-main/10 !text-main"
              slidingNumberProps={{ className: "text-main" }}
              buttonProps={{ className: "text-main" }}
            />
          </div>

          {/* Product image & Add to cart button */}
          <div className="w-[40%]">
            <Image
              src="/assets/Images/test-product.svg"
              alt="Product Image"
              width={450}
              height={0}
              className="rounded-lg"
            />
            <Button className="flex w-4/5 mx-auto rounded-2xl text-[22px] py-3 items-center gap-4 mt-4">
              <span>
                {format.number(250)}{" "}
                <small className="text-[13px] font-normal">{t("currency")}</small>
              </span>

              <span className="flex items-center">
                {t("add-to-cart")}
                <ChevronRight />
              </span>
            </Button>
          </div>

          {/* Extra Dishes with Animation */}
          <div className="flex-1">
            <div className="flex flex-col items-end justify-end gap-4 w-[500px] absolute top-1/2 -translate-y-1/2 right-0 p">
              {extraDishes.map((dish) => (
                <motion.div
                  key={dish.id}
                  initial={{ width: "250px" }}
                  animate={{
                    width: activeDish === dish.id ? "500px" : "280px",
                  }}
                  style={{
                    backgroundColor: activeDish === dish.id ? "var(--main)" : "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    scale: { duration: 0.15 },
                  }}
                  className="flex items-center gap-3 rounded-tl-full !rounded-bl-full p-4 cursor-pointer min-h-[160px] shadow overflow-hidden"
                  onClick={() => handleDishClick(dish.id)}
                >
                  <Image src={dish.image} alt="Extra Icon" width={80} height={0} loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      animate={{
                        color: activeDish === dish.id ? "#ffffff" : "var(--main)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-semibold mb-2"
                    >
                      {dish.name}
                    </motion.h3>

                    {/* Closed State Price Display with Layout Animation */}
                    <AnimatePresence mode="wait">
                      {activeDish !== dish.id && (
                        <motion.div
                          key="price"
                          initial={{ opacity: 0, height: 0, marginBottom: 10 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: 8 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="text-custom-orange text-lg font-medium overflow-hidden"
                        >
                          {format.number(dish.price)} {t("currency")}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {activeDish === dish.id && (
                        <motion.div
                          key="subdishes"
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          exit={{ opacity: 0, x: -20, height: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className=""
                          style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                          }}
                        >
                          <Carousel
                            opts={{
                              align: "start",
                              loop: false,
                              skipSnaps: false,
                              dragFree: true,
                            }}
                            className="w-full max-w-sm"
                          >
                            <CarouselContent className="-ml-1">
                              {dish.subDishes.map((subDish) => {
                                const isActive = activeSubDish[dish.id] === subDish.id;

                                return (
                                  <CarouselItem key={subDish.id} className="pl-1 basis-auto">
                                    <motion.button
                                      key={subDish.id}
                                      type="button"
                                      whileTap={{ scale: 0.95 }}
                                      transition={{ duration: 0.15 }}
                                      className={`
                                  border-none outline-none flex flex-col cursor-pointer py-1 px-2 rounded-2xl min-w-fit
                                  transition-all duration-300 ease-in-out
                                  ${isActive ? "bg-white" : "bg-transparent"}
                                `}
                                      onClick={(e) => {
                                        handleSubDishClick(e, dish.id, subDish.id);
                                      }}
                                    >
                                      <span
                                        className={`
                                  transition-all duration-300 ease-in-out
                                  ${isActive ? "text-main text-lg" : "text-white text-2xl"}
                                `}
                                      >
                                        {subDish.name}
                                      </span>
                                      <span
                                        className={`
                                  transition-all duration-300 ease-in-out
                                  ${isActive ? "text-main text-base" : "text-custom-orange text-lg"}
                                `}
                                      >
                                        {format.number(subDish.price)} {t("currency")}
                                      </span>
                                    </motion.button>
                                  </CarouselItem>
                                );
                              })}
                            </CarouselContent>
                          </Carousel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
