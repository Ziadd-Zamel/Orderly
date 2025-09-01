import ProductCard from "@/components/common/product-card";
import HeadLine from "@/components/common/head-line";
import RestaurantInfo from "./restaurant-Info";
import OrderTypes from "./order-type";
import RestaurantBanner from "./restaurant-banner";
import { useTranslations } from "next-intl";
import MenuTabs from "./menu-tabs";

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
          <HeadLine title={t("best-seller")} className="mb-20" />
          <div className="box-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Menu */}
        <MenuTabs />
      </div>
    </>
  );
}
