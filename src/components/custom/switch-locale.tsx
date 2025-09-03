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
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Trigger */}
      <DropdownMenuTrigger className="flex h-14 w-[300px] max-w-[400px] items-center justify-between rounded-xl border border-[#DCDBDB] px-4 sm:w-full">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <Globe className="h-4 w-4" />

          {/* Name */}
          <span className="text-sm font-medium">
            {languages.find((lang) => lang.code === locale)?.name}
          </span>
        </div>

        {/* Icon */}
        <ChevronDown size={28} strokeWidth={1.2} />
      </DropdownMenuTrigger>

      {/* Dropdown */}
      <DropdownMenuContent className="w-[300px] sm:w-[400px]" align="center">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLocale(language.code as Locale)}
            className="flex w-full items-center justify-between"
          >
            {language.name}
            {locale === language.code && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
