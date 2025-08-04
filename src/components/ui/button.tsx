import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none cursor-pointer [&_svg]:shrink-0 hover:transition-all hover:duration-300",
  {
    variants: {
      variant: {
        default: "bg-main text-white hover:bg-pink-dark rounded-[10px] disabled:bg-gray-400",
        outline:
          "border border-main bg-background text-main hover:bg-main/10 disabled:bg-zinc-700/10 disabled:border-zinc-700 disabled:text-zinc-700",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-400 disabled:border-zinc-700",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gray-200 border border-storm-100 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-zinc-500",
        main: " bg-bink-900 text-white px-[8px] py-[20px] rounded-[30px] hover:bg-[#FEEDF7] hover:text-accent-foreground",
        dailog:
          "border border-gray-200 text-blue-500 hover:bg-blue-900/10 disabled:bg-blue-700/10 disabled:border-blue-700 disabled:text-blue-700",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "rounded-md px-3 py-3",
        lg: "rounded-lg px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading = false, children = "Button", asChild = false, ...props },
    ref,
  ) => {
    void loading;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
        {loading && <Loader2 size={18} className="animate-spin" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
