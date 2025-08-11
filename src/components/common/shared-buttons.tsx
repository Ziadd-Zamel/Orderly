import React, { ButtonHTMLAttributes } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgTheme?: "light" | "dark";
  audience?: string | null | undefined;
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

const DeleteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ audience = "general", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "size-8 flex-center !circle shrink-0 cursor-pointer",
          audience !== "gen-z"
            ? "bg-transparent hover:bg-transparent text-white"
            : "bg-white hover:bg-white text-zinc-900",
          props.className,
        )}
      >
        <Trash2 size={20} />
      </button>
    );
  },
);

DeleteButton.displayName = "DeleteButton";

export { FavoriteButton, DeleteButton };
