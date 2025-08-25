"use client";

import { Check, ChevronDown, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";

export function SwitchLocale({ className }: { className?: string }) {
  // Translation
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  // Functions
  const switchLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
  };

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild className="w-full">
        <Button variant="ghost" size="sm" className={cn("gap-1 px-2 w-full", className)}>
          <div className="flex items-center gap-2">
            {/* Icon */}
            <Globe className="h-4 w-4" />

            {/* Name */}
            <span className="text-sm font-medium">
              {languages.find((lang) => lang.code === locale)?.name}
            </span>
          </div>

          {/* Icon */}
          <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown */}
      <DropdownMenuContent className="w-full min-w-full" align="start">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLocale(language.code as Locale)}
            className="flex items-center justify-between"
          >
            {language.name}
            {locale === language.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
