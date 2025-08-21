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
      <Card className="group relative w-[250px] bg-slate-100 rounded-3xl mt-32 hover:!scale-105 transition-all duration-300 hover:bg-main genz:hover:bg-purple-500 cursor-pointer">
        <CardContent className="px-5 pb-0 pt-12">
          <div className="w-[140px] h-[140px] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 genz:border-[3px] genz:border-gradient circle overflow-hidden">
            <Image
              src={"/assets/images/test-product.svg"}
              alt="Meal Name"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center mb-6">
            {/* Product Name */}
            <h2 className="group-hover:text-white transition-all duration-300  text-base text-zinc-700 text-center font-medium font-poppins truncate">
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
              <p className="text-zinc-500 group-hover:text-white transition-all duration-300  text-sm font-popins self-end">
                {`${format.number(10)}-${format.number(15)} ${t("minute")}`}
              </p>
            </div>
          </div>

          {/* Price & Favorite Button */}
          <div className="flex gap-2 items-center justify-between mb-6">
            {/* Price */}
            <p className="text-2xl text-zinc-800 group-hover:text-white transition-all duration-300">
              {format.number(215)} <small>{t("currency")}</small>
            </p>

            {/* Favorite Button */}
            <FavoriteButton bgTheme={"light"} />
          </div>

          <Button
            type="button"
            routable
            className="genz:bg-purple-500 w-full rounded-xl group-hover:bg-white group-hover:text-main genz:group-hover:bg-white genz:group-hover:text-purple-500 transition-all duration-300"
          >
            {t("viwe details")}
          </Button>
        </CardContent>

        {/* <BorderBeam duration={8} size={150} /> */}
      </Card>
    </div>
  );
}
