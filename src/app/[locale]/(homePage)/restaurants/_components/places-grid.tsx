"use client";

import PlaceCard from "@/components/common/place-card";

type Place = {
  id: number;
  productImg: string;
  restaurantImg: string;
  name: string;
};

interface PlacesGridProps {
  places: Place[];
}

export default function PlacesGrid({ places }: PlacesGridProps) {
  if (places.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-1 items-center justify-center md:min-h-[400px]">
        <div className="text-center">
          <p className="mb-2 text-base text-gray-500 md:text-lg">No places found</p>
          <p className="text-sm text-gray-400">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 flex-1">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
