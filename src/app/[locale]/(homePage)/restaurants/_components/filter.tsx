"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { FilterIcon } from "lucide-react";
import Image from "next/image";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { useState } from "react";
import { useTranslations } from "next-intl";

function FilterContent() {
  const [values, setValues] = useState([0, 100]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const t = useTranslations();

  const placeTypes = [
    { id: "Restaurant", label: "Restaurant", icon: "/assets/icons/food.svg" },
    { id: "Coffee shop", label: "Coffee shop", icon: "/assets/icons/coffee.svg" },
  ];
  const categories = ["Fast Food", "Seafood", "Breakfast Spot", "Vegan", "Fried Chicken", "Grill"];
  const services = ["Wi-Fi", "Kids Area", "Parking", "Vegan", "Outdoor Seating", "Smoking"];

  const togglePlaceType = (typeId: string) => {
    setSelectedPlaceTypes((prev) =>
      prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId],
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category],
    );
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((serv) => serv !== service) : [...prev, service],
    );
  };

  const clearAll = () => {
    setSelectedPlaceTypes([]);
    setSelectedCategories([]);
    setSelectedServices([]);
    setValues([0, 100]);
  };

  return (
    <div className="h-full w-full overflow-y-auto rounded-4xl bg-[#FBFBFB] px-6 py-9">
      {/* Place Type */}
      <div className="mb-8">
        <h3 className="mb-6 text-lg">{t("place-type")}</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {placeTypes.map((type) => {
            const isSelected = selectedPlaceTypes.includes(type.id);
            return (
              <Button
                key={type.id}
                variant="outline"
                onClick={() => togglePlaceType(type.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-3 text-base transition-colors ${
                  isSelected
                    ? "bg-main border-main hover:bg-main/90 genz:bg-gradient genz:text-white text-white"
                    : "genz:text-purple-500 border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <Image src={type.icon} alt="Icon" width={25} height={0} />
                {type.label}
              </Button>
            );
          })}
        </div>
      </div>

      <Separator className="mb-10 h-px w-full bg-[#EEEEEE]" />

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-6 text-lg">{t("categories")}</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => toggleCategory(category)}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "bg-main border-main hover:bg-main/90 genz:bg-gradient genz:text-white text-white"
                    : "genz:text-black genz:border-transparent border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>
      <Separator className="mb-10 h-px w-full bg-[#EEEEEE]" />

      {/* Average Prices */}
      <div className="mb-8">
        <h3 className="mb-6 text-lg">{t("average-prices")}</h3>
        <DualRangeSlider value={values} onValueChange={setValues} min={0} max={100} step={1} />
        <div className="mt-8 flex items-center justify-between">
          <span className="text-gray-400">
            From: <span className="font-medium text-black">{values[0]} EGP</span>
          </span>
          <span className="text-gray-400">
            To: <span className="font-medium text-black">{values[1]} EGP</span>
          </span>
        </div>
      </div>
      <Separator className="mb-10 h-px w-full bg-[#EEEEEE]" />

      {/* Services Provided */}
      <div className="mb-8">
        <h3 className="mb-6 text-lg">{t("services-provided")}</h3>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <Button
                key={service}
                variant="outline"
                size="sm"
                onClick={() => toggleService(service)}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "bg-main border-main hover:bg-main/90 genz:bg-gradient genz:text-white text-white"
                    : "genz:text-black genz:border-transparent border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {service}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Clear All */}
      <Button
        variant="ghost"
        onClick={clearAll}
        className="text-custom-orange genz:text-red-400 w-full text-base font-medium hover:bg-orange-50"
      >
        {t("clear-all")}
      </Button>
    </div>
  );
}

export default function Filter() {
  return (
    <>
      {/* Desktop Filter - Hidden on mobile */}
      <div className="mt-9 hidden w-full lg:sticky lg:top-4 lg:block">
        <FilterContent />
      </div>

      {/* Mobile Filter Sheet - Visible only on mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="genz:bg-gradient genz:text-white rounded-full border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <FilterIcon className="text-main text-lg" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-[#FBFBFB] p-0">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle className="text-main text-lg font-semibold">Filters</SheetTitle>
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
