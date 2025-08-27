import MealCard from "@/components/common/meal-card";
import HeadLine from "@/components/common/head-line";
import RestaurantInfo from "./restaurant-Info";
import OrderTypes from "./order-type";
import RestaurantBanner from "./restaurant-banner";
import Menu from "./menu";
import { useTranslations } from "next-intl";

export default function RestaurantPage() {
  const t = useTranslations();
  return (
    <>
      <div className="pb-20">
        {/* Banner Section*/}
        <RestaurantBanner />

        {/* Restauran Info */}
        <RestaurantInfo />

        {/* Orders type */}
        <OrderTypes />

        {/* Best seller */}
        <div className="mt-20">
          <HeadLine title={t("best-seller")} />
          <div className="box-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 justify-items-center">
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
          </div>
        </div>

        {/* Menu */}
        <Menu />
      </div>
    </>
  );
}
