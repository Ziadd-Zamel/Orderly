import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { places } from "@/lib/constants/data.constant";
import PlaceCard from "@/components/common/place-card";
import MealCard from "@/components/common/meal-card";

export default function FavouritePage() {
  return (
    <div className="box-container mt-40 pb-20">
      <Tabs defaultValue="places">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <TabsList className="bg-transparent gap-5 w-full max-w-md">
            <TabsTrigger
              className="flex items-center gap-2 h-12 w-1/2 cursor-pointer hover:bg-main hover:text-white data-[state=active]:bg-main data-[state=active]:text-white"
              value="places"
              aria-label="View favorite places"
            >
              <Image
                src="/assets/icons/places.svg"
                alt="Places Icon"
                width={20}
                height={20}
                priority
              />
              Places
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 h-12 w-1/2 cursor-pointer hover:bg-main hover:text-white data-[state=active]:bg-main data-[state=active]:text-white"
              value="items"
              aria-label="View favorite items"
            >
              <Image
                src="/assets/icons/fast-food.svg"
                alt="Items Icon"
                width={20}
                height={20}
                priority
              />
              Items
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Places Tab */}
        <TabsContent value="places" className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-4 md:gap-6 justify-items-center">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </TabsContent>

        {/* Items Tab */}
        <TabsContent value="items" className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-4 md:gap-6 justify-items-center">
            {Array.from({ length: 6 }, (_, i) => (
              <MealCard key={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
