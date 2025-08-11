"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { menuItems } from "@/lib/constants/data.constant";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function ProfileSidebar() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col gap-6"
      aria-label={t("profile.sidebarNavigation", { default: "Profile navigation" })}
    >
      {/* Profile & Menu */}
      <div className="bg-[#FBFBFB] py-4 px-1 sm:px-8 rounded-3xl w-fit">
        {/* Profile */}
        <div
          className="mb-8 flex items-center gap-5"
          aria-label={t("profile.userInfo", { default: "User information" })}
        >
          <Avatar className="size-12">
            <AvatarFallback>Ha</AvatarFallback>
          </Avatar>
          <span className="font-medium text-lg hidden md:block">Hana</span>
        </div>

        {/* Menu */}
        <nav
          className="flex flex-col gap-5 items-center sm:items-start"
          aria-label={t("profile.menu", { default: "Profile menu" })}
        >
          {menuItems.map((item, index) => {
            if ("divider" in item && item.divider) {
              return <hr key={index} className="border-gray-200 my-3 w-full" role="separator" />;
            }

            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  "flex items-center gap-4 font-medium transition-colors",
                  isActive ? "text-main" : "text-gray-400 hover:text-main",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <item.icon size={18} aria-hidden="true" focusable="false" />
                <span className="hidden md:block">{t(item.label)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <Link
        href="/logout"
        className="flex items-center justify-center sm:justify-start gap-3 text-red-600 hover:text-red-700 transition-colors bg-[#FBFBFB] py-4 px-2 sm:px-8 rounded-2xl"
        aria-label={t("profile.logout")}
      >
        <RiLogoutBoxFill size={18} aria-hidden="true" focusable="false" />
        <span className="hidden md:block">{t("profile.logout")}</span>
      </Link>
    </aside>
  );
}
