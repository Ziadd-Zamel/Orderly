"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { FilterIcon } from "lucide-react";
import Image from "next/image";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { useState } from "react";

function FilterContent() {
  const [values, setValues] = useState([0, 100]);

  const placeTypes = [
    { id: "Restaurant", label: "Restaurant", icon: "/assets/icons/food.svg" },
    { id: "Coffee shop", label: "Coffee shop", icon: "/assets/icons/coffee.svg" },
  ];
  const categories = ["Fast Food", "Seafood", "Breakfast Spot", "Vegan", "Fried Chicken", "Grill"];
  const services = ["Wi-Fi", "Kids Area", "Parking", "Vegan", "Outdoor Seating", "Smoking"];

  return (
    <div className="w-full bg-[#FBFBFB] rounded-4xl px-6 py-9 h-full overflow-y-auto">
      {/* Place Type */}
      <div className="mb-8">
        <h3 className="text-lg mb-6">Place Type</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {placeTypes.map((type) => (
            <Button
              key={type.id}
              variant="outline"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-base genz:bg-gradient genz:text-white bg-white hover:bg-gray-50 border-gray-200"
            >
              <Image src={type.icon} alt="Icon" width={25} height={0} />
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="w-full h-px bg-[#EEEEEE] mb-10" />

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg mb-6">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full px-3 py-2 text-sm bg-white text-gray-700 border-gray-200 genz:bg-gradient genz:text-white hover:bg-gray-50"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <Separator className="w-full h-px bg-[#EEEEEE] mb-10" />

      {/* Average Prices */}
      <div className="mb-8">
        <h3 className="text-lg mb-6">Average prices</h3>
        <DualRangeSlider value={values} onValueChange={setValues} min={0} max={100} step={1} />
        <div className="flex items-center justify-between mt-8">
          <span className="text-gray-400">
            From: <span className="text-black font-medium">{values[0]} EGP</span>
          </span>
          <span className="text-gray-400">
            To: <span className="text-black font-medium">{values[1]} EGP</span>
          </span>
        </div>
      </div>
      <Separator className="w-full h-px bg-[#EEEEEE] mb-10" />

      {/* Services Provided */}
      <div className="mb-8">
        <h3 className="text-lg mb-6">Services Provided</h3>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <Button
              key={service}
              variant="outline"
              size="sm"
              className="rounded-full px-3 py-2 text-sm bg-white text-gray-700 border-gray-200 genz:bg-gradient genz:text-white hover:bg-gray-50"
            >
              {service}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear All */}
      <Button
        variant="ghost"
        className="w-full text-custom-orange genz:text-red-400 hover:bg-orange-50 font-medium text-base"
      >
        Clear All
      </Button>
    </div>
  );
}

export default function Filter() {
  return (
    <>
      {/* Desktop Filter - Hidden on mobile */}
      <div className="hidden lg:block w-full max-w-80 xl:max-w-96 lg:sticky lg:top-4 mt-9">
        <FilterContent />
      </div>

      {/* Mobile Filter Sheet - Visible only on mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full px-3 py-2 text-sm bg-white text-gray-700 border-gray-200 genz:bg-gradient genz:text-white hover:bg-gray-50"
            >
              <FilterIcon className="text-main text-lg" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className=" p-0 bg-[#FBFBFB]">
            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle className="text-lg font-semibold text-main">Filters</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-hidden">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
