"use client";
import { useMediaChecker } from "@/hooks/use-media-checker";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CollapsedOrdersList({
  productsImages,
  arrow,
}: {
  productsImages: string[];
  arrow?: boolean;
}) {
  // Hooks
  const media = useMediaChecker();
  const isSmallScreen = media.screenSizes?.smScreen;

  // Variables
  const PRODUCT_PREVIEW_LIMIT = isSmallScreen ? 4 : 6;
  const collapsed = productsImages.length > PRODUCT_PREVIEW_LIMIT;
  const displayImages = collapsed ? productsImages.slice(0, PRODUCT_PREVIEW_LIMIT) : productsImages;

  return (
    <div className="flex items-center gap-2 justify-between  bg-[#FBFBFB] rounded-xl p-3 w-full">
      <div className="flex items-center gap-2 ">
        {displayImages.map((img, i) => (
          <div key={i} className="bg-gray-50 flex-center w-16 h-16 rounded-lg">
            <Image src={img} alt={`product-${i}`} width={50} height={0} />
          </div>
        ))}
        {collapsed && (
          <div className="bg-white font-medium genz:text-purple-500 flex-center p-2 rounded-lg w-16 h-16 text-xl text-shadow-zinc-400">
            +{productsImages.length - displayImages.length}
          </div>
        )}
      </div>
      {arrow && <ChevronRight size={30} strokeWidth={1} />}
    </div>
  );
}
