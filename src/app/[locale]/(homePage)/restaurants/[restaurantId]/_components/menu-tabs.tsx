"use client";
import ProductCard from "@/components/common/product-card";
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
import { useTranslations } from "next-intl";

export default function MenuTabs() {
  const TabsData = ["all", "italian", "asian", "chinese", "fruit"];
  const [activeTab, setActiveTab] = useState("all");
  const t = useTranslations();
  return (
    <div className="mt-40">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <HeadLine title={t("menu")} className="mb-20">
          {/* Desktop Tabs */}
          <TabsList className="bg-background hidden h-12 gap-10 self-end md:flex rtl:flex-row-reverse">
            {TabsData.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-main genz:data-[state=active]:bg-gradient cursor-pointer rounded-xl border-none bg-transparent p-3 text-black capitalize outline-none data-[state=active]:text-white md:min-w-20"
              >
                {tab === "all" ? t("all") : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Mobile Select */}
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="h-12 w-40 self-end border border-gray-200 bg-white md:hidden">
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
            <div className="box-container 3xl:grid-cols-5 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
