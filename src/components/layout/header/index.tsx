"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sidebar from "./_components/sidebar";
import { useTranslations } from "next-intl";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbScan } from "react-icons/tb";
import { useRouter } from "@/i18n/routing";
import { UserDropdown } from "@/components/custom/user-dropdown";
import { useEffect, useRef } from "react";

export default function Navbar() {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();

  // Refs
  const headerRef = useRef<HTMLHeadElement>(null);

  // Variables
  const navigationLinks = [
    { href: "/", label: t("navbar.home"), active: true },
    { href: "/restaurants", label: t("navbar.restaurants"), active: false },
    { href: "/coffee-shops", label: t("navbar.coffeeShops"), active: false },
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
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 py-6 z-50 genz:shadow-none transition-colors duration-300"
      >
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
                  link.active ? "text-main genz:text-gradient" : "text-gray-600 hover:text-gray-900"
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

            {/* User Avatar */}
            <UserDropdown />

            {/* Sidebar for small screens */}
            <Sidebar />
          </div>
        </nav>
      </header>
    </>
  );
}
