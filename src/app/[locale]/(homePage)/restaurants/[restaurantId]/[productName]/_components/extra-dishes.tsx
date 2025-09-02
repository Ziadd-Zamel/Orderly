import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useFormatter, useTranslations } from "next-intl";

export default function ExtraDishes() {
  // Translation
  const t = useTranslations();
  const format = useFormatter();

  const [activeDish, setActiveDish] = React.useState<number[]>([]);
  const [activeSubDish, setActiveSubDish] = React.useState<Record<number, number[]>>({});

  // variabals
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

  const handleDishClick = (dishId: number) => {
    setActiveDish((prev) => {
      if (prev.includes(dishId)) {
        return prev.filter((id) => id !== dishId);
      }
      return [...prev, dishId];
    });
  };

  const handleSubDishClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    dishId: number,
    subDishId: number,
  ) => {
    e.stopPropagation();
    setActiveSubDish((prev) => {
      const currentSelections = prev[dishId] || [];

      if (currentSelections.includes(subDishId)) {
        // Remove if already selected
        return {
          ...prev,
          [dishId]: currentSelections.filter((id) => id !== subDishId),
        };
      } else {
        // Add to selections
        return {
          ...prev,
          [dishId]: [...currentSelections, subDishId],
        };
      }
    });
  };

  return (
    <div className="flex flex-col items-end justify-end gap-4 w-[500px] absolute top-1/2 -translate-y-1/2 ltr:right-0 rtl:!left-0">
      {extraDishes.map((dish) => (
        <motion.div
          key={dish.id}
          initial={{ width: "250px" }}
          animate={{
            width: activeDish.includes(dish.id) ? "500px" : "280px",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            scale: { duration: 0.15 },
          }}
          className={cn(
            "flex items-center gap-3 rounded-tl-full !rounded-bl-full rtl:!rounded-bl-none rtl:rounded-tl-none rtl:!rounded-br-full rtl:rounded-tr-full p-4 cursor-pointer min-h-[160px] shadow overflow-hidden",
            activeDish.includes(dish.id) ? "bg-main genz:bg-purple-500" : "bg-white",
          )}
          onClick={() => handleDishClick(dish.id)}
        >
          <Image src={dish.image} alt="Extra Icon" width={80} height={0} loading="lazy" />
          <div className="flex-1 min-w-0">
            <motion.h3
              animate={{
                color: activeDish.includes(dish.id) ? "#ffffff" : "var(--main)",
              }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold mb-2  genz:text-purple-500"
            >
              {dish.name}
            </motion.h3>

            {/* Closed State Price Display with Layout Animation */}
            <AnimatePresence mode="wait">
              {!activeDish.includes(dish.id) && (
                <motion.div
                  key="price"
                  initial={{ opacity: 0, height: 0, marginBottom: 10 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 8 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-black text-lg font-medium overflow-hidden"
                >
                  {format.number(dish.price)} {t("currency")}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {activeDish.includes(dish.id) && (
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
                        const isActive = (activeSubDish[dish.id] || []).includes(subDish.id);

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
                                  ${
                                    isActive
                                      ? "text-main genz:text-purple-500 text-lg"
                                      : "text-white text-2xl"
                                  }
                                `}
                              >
                                {subDish.name}
                              </span>
                              <span
                                className={`
                                  transition-all duration-300 ease-in-out
                                  ${
                                    isActive
                                      ? "text-main genz:text-purple-500 text-base font-medium"
                                      : "text-custom-orange genz:!text-[#FFF200]  text-lg"
                                  }
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
  );
}
