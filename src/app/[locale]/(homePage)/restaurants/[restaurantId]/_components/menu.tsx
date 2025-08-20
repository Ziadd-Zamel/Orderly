"use client";
import MealCard from "@/components/common/meal-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeadLine from "@/components/common/head-line";

export default function Menu() {
  const TabsData = ["all", "italian", "asian", "chinese", "fruit"];
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="mt-40">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <HeadLine title="Menu">
          {/* Desktop Tabs */}
          <TabsList className="bg-background gap-10 h-12 self-end hidden md:flex">
            {TabsData.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="md:min-w-20 bg-transparent border-none outline-none capitalize text-black data-[state=active]:bg-main genz:data-[state=active]:bg-gradient data-[state=active]:text-white p-3 rounded-xl cursor-pointer"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Mobile Select */}
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="md:hidden w-40 bg-white border border-gray-200 h-12 self-end">
              <SelectValue className="capitalize" />
            </SelectTrigger>
            <SelectContent>
              {TabsData.map((tab) => (
                <SelectItem key={tab} value={tab} className="capitalize">
                  {tab}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </HeadLine>

        {TabsData.map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="box-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 justify-items-center">
              <MealCard />
              <MealCard />
              <MealCard />
              <MealCard />
              <MealCard />
              <MealCard />
              <MealCard />
              <MealCard />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
