"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export function UserDropdown() {
  // Transalation
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Navigation
  const router = useRouter();

  return (
    <DropdownMenu dir={isRTL ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-7 w-7 sm:size-10 lg:block hidden cursor-pointer">
          <AvatarImage src="/abstract-profile.png" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-0" align={"end"} sideOffset={5}>
        <DropdownMenuLabel>{t("my-account")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile/info")} className="cursor-pointer">
            {t("my-profile")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push("/profile/account-settings")}
            className="cursor-pointer"
          >
            {t("settings")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">{t("log-out")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
