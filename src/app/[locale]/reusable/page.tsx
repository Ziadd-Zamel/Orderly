/* eslint-disable react/no-children-prop */
"use client";

import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useFormatter, useTranslations } from "next-intl";
import { FavoriteButton } from "@/components/common/shared-buttons";
import DateSelector from "./_components/date-selector";
import TimePickerForm from "@/components/custom/time-picker/time-wheel-picker";
import PaginationComp from "@/components/common/pagination-comp";
import { Counter } from "@/components/animate-ui/components/counter";
import PlacesCarousel from "@/components/common/places-carousel";
import { Places } from "@/lib/constants/data.constant";
import OrderCard from "@/components/common/order-card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BannerCarousel from "@/app/[locale]/(homePage)/_components/home-slider/slider";

export default function Page() {
  const [isLoading, setIsloading] = useState(false);
  const t = useTranslations();
  const format = useFormatter();

  // Example state for demonstration purposes - Counter
  const [number, setNumber] = React.useState(5);
  const [newAudience, setNewAudience] = useState<string | null>(null);

  const handleClick = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  const handleAudienceChange = (newAudience: string | null) => {
    setNewAudience(newAudience);
    localStorage.setItem("audience", newAudience || "");
  };

  return (
    <>
      <Header />
      <div className="container p-10 flex gap-10">
        {/* ********************************************************************** */}
        {/* ***************************** Inputs ********************************* */}
        {/* ********************************************************************** */}
        <div className="flex flex-col gap-4 w-[30%] p-6 border-2 border-dashed rounded-xl">
          <h2 className="text-xl self-start">Inputs:</h2>
          <Input type="text" variant={"outline"} />
          <Input type="text" variant={"outline"} value={"Input text"} />
          <Input type="text" variant={"outline"} disabled />
          <Input type="text" variant={"outline"} state={"error"} />
          {/* <SelectDemo /> */}
        </div>

        {/* ********************************************************************** */}
        {/* ***************************** Buttons ******************************** */}
        {/* ********************************************************************** */}
        <div className="flex flex-col items-center gap-2 w-[30%] p-6 border-2 border-dashed rounded-xl">
          {/* Default Buttons */}
          <h2 className="text-xl self-start">Default:</h2>

          <Button
            onClick={() => toast.info("Product added successfully")}
            variant={"default"}
            routable={true}
            className="w-32"
          >
            Button
          </Button>

          <Button className="w-32" variant={"default"} disabled={true}>
            Button
          </Button>

          <Button
            onClick={handleClick}
            variant={"default"}
            disabled={isLoading}
            loading={isLoading}
            className="w-32"
          >
            Load
          </Button>

          <Button
            onClick={() => toast.info("Informative message")}
            variant={"default"}
            disabled={isLoading}
            className="w-32"
          >
            Info Toast
          </Button>

          {/* Outline Buttons */}
          <h2 className="text-xl self-start mt-5">Outline:</h2>
          <Button className="w-32" variant={"outline"}>
            Button
          </Button>

          <Button className="w-32" variant={"outline"} disabled={true}>
            Button
          </Button>

          <Button
            className="w-32"
            variant={"outline"}
            onClick={handleClick}
            disabled={isLoading}
            loading={isLoading}
          >
            Load
          </Button>

          <Button
            className="w-32"
            onClick={() => toast.success("Successful operation")}
            variant={"outline"}
          >
            Success Toast
          </Button>

          {/* Destructive Buttons */}
          <Button
            className="w-32"
            onClick={() => toast.error("Unsuccessful operation")}
            variant={"destructive"}
          >
            Error Toast
          </Button>
        </div>

        {/* ********************************************************************** */}
        {/* ****************************** Cards ********************************* */}
        {/* ********************************************************************** */}
        <div className="flex flex-col items-center gap-10 w-[30%] px-6 py-24 border-2 border-dashed rounded-xl ">
          {/* Meal Card*/}
          <div>
            <Card className="relative w-[250px] bg-slate-100 rounded-3xl">
              <CardContent className="px-5 pb-0 pt-12">
                <Image
                  src={"/assets/images/test-product.png"}
                  alt="Meal Name"
                  width={180}
                  height={0}
                  className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
                />

                <div className="flex flex-col justify-center mb-6">
                  {/* Product Name */}
                  <h2 className="text-base text-zinc-700 text-center font-medium font-poppins truncate">
                    {t("meal-name") + " " + "Test Demmmmmo"}
                  </h2>

                  {/* Ready Duration */}
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/assets/icons/hot-dish-icon.svg"
                      alt="Product Image"
                      width={25}
                      height={0}
                    />
                    <p className="text-zinc-500 text-sm font-popins self-end">
                      {`${format.number(10)}-${format.number(15)} ${t("minute")}`}
                    </p>
                  </div>
                </div>

                {/* Price & Favorite Button */}
                <div className="flex gap-2 items-center justify-between mb-6">
                  {/* Price */}
                  <p className="text-2xl text-zinc-800">
                    {format.number(215)} <small>{t("currency")}</small>
                  </p>

                  {/* Favorite Button */}
                  <FavoriteButton bgTheme={"light"} />
                </div>

                <Button type="button" routable className="w-full rounded-xl">
                  {t("viwe details")}
                </Button>
              </CardContent>

              {/* <BorderBeam duration={8} size={150} /> */}
            </Card>
          </div>

          {/* Place Card*/}
          <div>
            <Card className="relative w-[300px] h-[300px]  bg-slate-100 rounded-[30px]">
              <CardContent className="px-5 pb-0 pt-12 h-full">
                <Image
                  src={"/assets/images/place-demo.png"}
                  alt="Restaurant Name"
                  fill
                  loading="lazy"
                  className="object-fit"
                />

                {/* Price & Favorite Button */}
                <div className="w-[85%] py-2.5 px-3 flex gap-3 items-center justify-between bg-white rounded-3xl absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2  shadow">
                  {/* Price */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-10 circle relative border-2 overflow-hidden">
                      <Image
                        src="/assets/images/resturant.png"
                        alt="Product Image"
                        fill
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-base text-zinc-700 text-center font-medium font-poppins truncate">
                      {`Vinny’s Pizza`}
                    </h2>
                  </div>

                  {/* Favorite Button */}
                  <FavoriteButton bgTheme="dark" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container p-10 flex gap-10">
        <div className="flex flex-col items-center gap-10 w-[50%] px-6 py-24 border-2 border-dashed rounded-xl">
          <DateSelector />
        </div>

        <div className="flex flex-col items-center gap-10 w-[50%] px-6 py-24 border-2 border-dashed rounded-xl">
          <div className="w-full bg-[#F6F6F6] rounded-2xl p-6">
            <TimePickerForm />
          </div>
        </div>

        <div className="bg-[#FBFBFB] h-[250px] flex items-center justify-center mb-20">
          <OrderCard />
        </div>

        <div className="container p-10 flex gap-10">
          <div className="flex flex-col items-center gap-10 w-[50%] px-6 py-24 border-2 border-dashed rounded-xl">
            <PaginationComp currentPage={1} totalPages={10} onPageChange={() => {}} />
          </div>

          <div className="flex flex-col items-center gap-10 w-[50%] px-6 py-24 border-2 border-dashed rounded-xl">
            <div className="flex items-center gap-2 p-1">
              <Button onClick={() => handleAudienceChange("general")} children={"General"} />
              <Button onClick={() => handleAudienceChange("gen-z")} children={"gen-z"} />
            </div>
            <Counter number={number} setNumber={setNumber} audience={newAudience} />
          </div>
        </div>
      </div>
      <PlacesCarousel title="Top Rated Places " Places={Places} />
      <BannerCarousel />
      <Toaster />
      <Footer />
    </>
  );
}
