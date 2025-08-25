"use client";
import React, { useState } from "react";
import { useTranslations, useFormatter } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const extraDishes = [
  {
    id: 1,
    name: "Nuts & Seeds",
    image: "/assets/Images/nuts.png",
    price: 50,
    subDishes: [
      { id: 1, name: "Walnuts", price: 20 },
      { id: 2, name: "Almonds", price: 20 },
      { id: 3, name: "Pistachios", price: 20 },
      { id: 4, name: "Sunflower", price: 20 },
    ],
  },
  {
    id: 2,
    name: "Protein",
    image: "/assets/Images/protein.png",
    price: 60,
    subDishes: [
      { id: 5, name: "Grilled Chicken", price: 35 },
      { id: 6, name: "Turkey Slices", price: 30 },
      { id: 7, name: "Boiled Eggs", price: 25 },
      { id: 8, name: "Feta Cheese", price: 28 },
    ],
  },
  {
    id: 3,
    name: "Sauces",
    image: "/assets/Images/sauces.png",
    price: 15,
    subDishes: [
      { id: 9, name: "Ranch Dressing", price: 15 },
      { id: 10, name: "Caesar Dressing", price: 15 },
      { id: 11, name: "Honey Mustard", price: 12 },
      { id: 12, name: "Balsamic Vinaigrette", price: 18 },
    ],
  },
];

export default function MobileExtraDishes() {
  const t = useTranslations();
  const format = useFormatter();
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleItemToggle = (itemId: number, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const getSelectedPrice = () => {
    let total = 0;
    extraDishes.forEach((category) => {
      category.subDishes.forEach((item) => {
        if (selectedItems.has(item.id)) {
          total += item.price;
        }
      });
    });
    return total;
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-sm mt-10">
      <h3 className="text-lg font-semibold text-zinc-800 mb-4">{t("extra-dishes")}</h3>

      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid w-full grid-cols-3 ">
          {extraDishes.map((category, index) => (
            <TabsTrigger
              key={category.id}
              value={index.toString()}
              className="text-sm data-[state=active]:bg-main data-[state=active]:genz:bg-gradient data-[state=active]:text-white "
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {extraDishes.map((category, index) => (
          <TabsContent key={category.id} value={index.toString()} className="mt-4">
            <div className="space-y-3">
              {category.subDishes.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-lg border border-gray-100"
                >
                  <Checkbox
                    id={`item-${item.id}`}
                    checked={selectedItems.has(item.id)}
                    onCheckedChange={(checked) => handleItemToggle(item.id, Boolean(checked))}
                  />
                  <Label
                    htmlFor={`item-${item.id}`}
                    className="flex-1 flex justify-between items-center cursor-pointer"
                  >
                    <span className="text-sm font-medium text-zinc-700">{item.name}</span>
                    <span className="text-sm font-semibold text-main genz:text-purple-500">
                      {format.number(item.price)} {t("currency", { default: "EGP" })}
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedItems.size > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-zinc-600">
              {t("selected-extras")} ({selectedItems.size})
            </span>
            <span className="text-lg font-bold text-main genz:text-gradient">
              +{format.number(getSelectedPrice())} {t("currency", { default: "EGP" })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
