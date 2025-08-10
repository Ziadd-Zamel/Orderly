import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { FavoriteButton } from "./shared-buttons";
import { Button } from "../ui/button";
import { useFormatter, useTranslations } from "next-intl";

export default function MealCard() {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <div>
      <Card className="relative w-[250px] bg-slate-100 rounded-3xl mt-32">
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
  );
}
