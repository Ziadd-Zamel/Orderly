import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Sidebar from "./_components/sidebar";
import { useTranslations } from "next-intl";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbScan } from "react-icons/tb";

export default function Navbar() {
  // Translation
  const t = useTranslations();

  // Variables
  const navigationLinks = [
    { href: "/", label: t("navbar.home"), active: true },
    { href: "/restaurants", label: t("navbar.restaurants"), active: false },
    { href: "/coffee-shops", label: t("navbar.coffeeShops"), active: false },
    { href: "/favourite", label: t("navbar.favourite"), active: false },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 py-6 z-50 bg-white shadow-md">
        <nav className="box-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={"/assets/Images/logo.svg"} alt="logo" width={120} height={0} priority />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  link.active
                    ? "text-main hover:text-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Navbar Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Scan Button */}
            <Button variant="ghost" size="icon" className="text-zinc-800">
              <TbScan size={26} />
              <span className="sr-only">{t("navbar.expand")}</span>
            </Button>

            {/* Shopping Bag */}
            <Button variant="ghost" size="icon" className="text-zinc-800">
              <HiMiniShoppingBag size={26} />
              <span className="sr-only">{t("navbar.shoppingBag")}</span>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-zinc-800">
              <Bell fill="black" size={26} />
              <span className="sr-only">{t("navbar.notifications")}</span>
            </Button>

            {/* User Avatar */}
            <Avatar className="h-7 w-7 sm:size-10 lg:block hidden">
              <AvatarImage src="/abstract-profile.png" alt="User avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            {/* Sidebar for small screens */}
            <Sidebar />
          </div>
        </nav>
      </header>

      <div className="h-22"></div>
    </>
  );
}
