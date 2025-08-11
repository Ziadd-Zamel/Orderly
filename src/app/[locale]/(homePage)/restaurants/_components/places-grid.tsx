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
      <div className="flex-1 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-500 text-base md:text-lg mb-2">No places found</p>
          <p className="text-gray-400 text-sm">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-12 md:gap-6 justify-items-center">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
