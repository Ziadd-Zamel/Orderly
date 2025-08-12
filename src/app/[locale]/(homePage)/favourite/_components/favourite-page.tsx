import MealCard from "@/components/common/meal-card";
import PlaceCard from "@/components/common/place-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Places } from "@/lib/constants/data.constant";
import Image from "next/image";

export default function FavouritePage() {
  return (
    <div className="box-container pt-10 pb-20">
      <Tabs defaultValue="places">
        <div className="flex justify-center mb-3">
          <TabsList className="bg-transparent gap-5 w-[400px] ">
            <TabsTrigger className="h-12 w-1/2 hover:bg-main hover:text-white" value="places">
              <Image src={"/assets/icons/places.svg"} alt="Places Icon" width={20} height={0} />
              Places
            </TabsTrigger>
            <TabsTrigger className="h-12 w-1/2 hover:bg-main hover:text-white" value="items">
              <Image src={"/assets/icons/fast-food.svg"} alt="Places Icon" width={20} height={0} />
              Items
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="w-full" value="places">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-12 md:gap-6 justify-items-center">
              {Places.map((place) => (
                <PlaceCard className="w-[300px] h-[300px]" key={place.id} place={place} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="items">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 gap-y-20 md:gap-6 justify-items-center">
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
              <MealCard className="w-[300px] mt-20" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
