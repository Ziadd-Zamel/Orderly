import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { places } from "@/lib/constants/data.constant";
import PlaceCard from "@/components/common/place-card";
import ProductCard from "@/components/common/product-card";
import { useTranslations } from "next-intl";

export default function FavouritePage() {
  const t = useTranslations("fav");
  return (
    <div className="box-container mt-40 pb-20">
      <Tabs defaultValue="places">
        {/* Tab Navigation */}
        <div className="mb-10 flex justify-center">
          <TabsList className="w-full max-w-md gap-5 bg-transparent">
            <TabsTrigger
              className="genz:border-purple-500 border-main hover:bg-main genz:hover:bg-gradient data-[state=active]:bg-main genz:data-[state=active]:bg-gradient genz:data-[state=active]:border-none flex h-12 w-1/2 cursor-pointer items-center gap-2 text-xl hover:text-white data-[state=active]:text-white rtl:flex-row-reverse"
              value="places"
              aria-label="View favorite places"
            >
              <Image
                src="/assets/icons/places.svg"
                alt="Places Icon"
                width={25}
                height={25}
                priority
              />
              <span className="mt-1">{t("places")}</span>
            </TabsTrigger>

            <TabsTrigger
              className="genz:border-purple-500 border-main hover:bg-main genz:hover:bg-gradient data-[state=active]:bg-main genz:data-[state=active]:bg-gradient genz:data-[state=active]:border-none flex h-12 w-1/2 cursor-pointer items-center gap-2 text-xl hover:text-white data-[state=active]:text-white rtl:flex-row-reverse"
              value="items"
              aria-label="View favorite items"
            >
              <Image
                src="/assets/icons/fast-food.svg"
                alt="Items Icon"
                width={25}
                height={25}
                priority
              />
              <span className="mt-1.5">{t("items")}</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Places Tab */}
        <TabsContent value="places" className="w-full">
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-4 gap-y-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </TabsContent>

        {/* Items Tab */}
        <TabsContent value="items" className="w-full">
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-4 gap-y-20 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
