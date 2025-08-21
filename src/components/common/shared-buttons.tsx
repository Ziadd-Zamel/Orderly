import React, { ButtonHTMLAttributes } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { FaPen } from "react-icons/fa";

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

const DeleteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "size-8 flex-center !circle shrink-0 cursor-pointer bg-transparent hover:bg-transparent text-white genz:bg-white genz:hover:bg-white genz:text-zinc-900",
        props.className,
      )}
    >
      <Trash2 size={20} />
    </button>
  );
});

DeleteButton.displayName = "DeleteButton";

const ActionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "text-main genz:text-purple-500 genz:bg-purple-100 size-8 bg-[#1295751A] rounded-lg flex-center shrink-0 cursor-pointer transition-colors",
          className,
        )}
      >
        <FaPen size={15} />
      </button>
    );
  },
);

ActionButton.displayName = "ActionButton";

const TrashButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "text-custom-orange genz:bg-red-100 genz:text-red-500  size-8 bg-[#FF9C001A] rounded-lg flex-center shrink-0 cursor-pointer transition-colors",
          className,
        )}
      >
        <Trash2 size={15} />
      </button>
    );
  },
);

TrashButton.displayName = "TrashButton";

export { FavoriteButton, DeleteButton, ActionButton, TrashButton };
