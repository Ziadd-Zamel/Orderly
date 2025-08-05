import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Sidebar from "./_components/sidebar";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const navigationLinks = [
    { href: "/", label: t("navbar.home"), active: true },
    { href: "/restaurants", label: t("navbar.restaurants"), active: false },
    { href: "/coffee-shops", label: t("navbar.coffeeShops"), active: false },
    { href: "/favourite", label: t("navbar.favourite"), active: false },
  ];

  return (
    <header>
      <nav className=" box-container py-6 flex items-center justify-between  bg-white ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={"/assets/Images/logo.svg"} alt="logo" width={100} height={0} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                link.active ? "text-main hover:text-teal-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Action Icons */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/assets/icons/scanner.svg"}
              alt="Shopiong bag logo"
              width={30}
              height={30}
              className="h-4 w-4 sm:h-7 sm:w-7"
            />{" "}
            <span className="sr-only">{t("navbar.expand")}</span>
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/assets/icons/shoping-bag.svg"}
              alt="Shopiong bag logo"
              width={30}
              height={30}
              className="h-4 w-4 sm:h-7 sm:w-7"
            />
            <span className="sr-only">{t("navbar.shoppingBag")}</span>
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Bell fill="black" className="h-4 w-4 sm:h-7 sm:w-7" />
            <span className="sr-only">{t("navbar.notifications")}</span>
          </Button>

          <Avatar className="h-7 w-7 sm:h-8 sm:w-8 lg:block hidden">
            <AvatarImage src="/abstract-profile.png" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
