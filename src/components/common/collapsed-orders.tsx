"use client";
import { useMediaChecker } from "@/hooks/use-media-checker";
import Image from "next/image";

export default function CollapsedOrdersList({ productsImages }: { productsImages: string[] }) {
  // Hooks
  const media = useMediaChecker();
  const isSmallScreen = media.screenSizes?.smScreen;

  // Variables
  const PRODUCT_PREVIEW_LIMIT = isSmallScreen ? 4 : 6;
  const collapsed = productsImages.length > PRODUCT_PREVIEW_LIMIT;
  const displayImages = collapsed ? productsImages.slice(0, PRODUCT_PREVIEW_LIMIT) : productsImages;

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2 w-full">
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
  );
}
