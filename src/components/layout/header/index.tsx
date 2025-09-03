"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sidebar from "./_components/sidebar";
import { useTranslations } from "next-intl";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbScan } from "react-icons/tb";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { UserDropdown } from "@/components/custom/user-dropdown";
import { useEffect, useRef, Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();
  const pathName = usePathname();
  // Refs
  const headerRef = useRef<HTMLDivElement>(null);

  // Variables
  const navigationLinks = [
    { href: "/", label: t("navbar.home"), active: true },
    { href: "/restaurants", label: t("navbar.restaurants"), active: false },
    { href: "/favourite", label: t("navbar.favourite"), active: false },
  ];

  const navbarIcons = [
    { icon: <TbScan size={26} />, label: t("navbar.expand"), href: "" },
    { icon: <HiMiniShoppingBag size={26} />, label: t("navbar.shoppingBag"), href: "/cart" },
    { icon: <Bell fill="black" size={26} />, label: t("navbar.notifications"), href: "" },
  ];

  // Side effects
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        headerRef.current.classList.add("bg-white", "shadow-md");
      } else {
        headerRef.current.classList.remove("bg-white", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 right-0 left-0 z-50 transition-colors duration-300"
      >
        <div className="genz:shadow-none h-full py-6">
          <nav className="box-container flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src={"/assets/Images/logo.svg"} alt="logo" width={120} height={0} priority />
            </Link>

            {/* Navigation Links */}
            <div className="hidden items-center space-x-8 lg:flex">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    pathName === link.href || (link.href !== "/" && pathName.startsWith(link.href))
                      ? "text-main genz:text-gradient"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Navbar Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {navbarIcons.map((icon, index) => (
                <Button
                  onClick={() => {
                    if (icon.href) router.push(icon.href);
                  }}
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-zinc-800"
                >
                  {icon.icon}
                  <span className="sr-only">{icon.label}</span>
                </Button>
              ))}

              {/* User Avatar with Suspense */}
              <Suspense
                fallback={
                  <Avatar className="hidden h-7 w-7 cursor-pointer sm:size-10 lg:block">
                    <AvatarImage src="/abstract-profile.png" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                }
              >
                <UserDropdown />
              </Suspense>

              {/* Sidebar for small screens */}
              <Sidebar />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
