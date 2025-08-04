import React, { ButtonHTMLAttributes } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgTheme?: "light" | "dark";
};

const FavoriteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ bgTheme = "light", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "text-zinc-800 size-9 flex-center !circle shrink-0 cursor-pointer",
          bgTheme === "light" ? "bg-[#FBFBFB] hover:bg-white" : "bg-[#F6F6F6] hover:bg-gray-200",
          className,
        )}
      >
        <HiOutlineHeart size={24} />
      </button>
    );
  },
);

FavoriteButton.displayName = "FavoriteButton";

export { FavoriteButton };
