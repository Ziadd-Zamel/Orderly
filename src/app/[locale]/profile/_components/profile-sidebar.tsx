"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { RiLogoutBoxFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { FaClipboardList, FaStar } from "react-icons/fa";
import { HiMiniMapPin } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillShieldLockFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useMediaChecker } from "@/hooks/use-media-checker";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type MenuItem = {
  label?: string;
  icon?: React.ElementType;
  path?: string;
  divider?: boolean;
};

const SIDEBAR_LINKS: MenuItem[] = [
  { label: "profile.myInfo", icon: BiSolidUser, path: "/info" },
  { label: "profile.myOrders", icon: FaClipboardList, path: "/orders" },
  { label: "profile.myPoints", icon: FaStar, path: "/points" },
  { label: "profile.myAddresses", icon: HiMiniMapPin, path: "/addresses" },
  { label: "profile.referEarn", icon: MdPeopleOutline, path: "/refer" },
  { divider: true },
  { label: "profile.accountSettings", icon: IoSettingsSharp, path: "/account-settings" },
  { label: "profile.termsConditions", icon: BsFillShieldLockFill, path: "/terms" },
];

// Animation variants
const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
};

const overlayVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function ProfileSidebar() {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Translation
  const t = useTranslations();

  // Navigation
  const pathname = usePathname();

  // Hooks
  const { screenSizes } = useMediaChecker();
  const isMobile = screenSizes?.smScreen || screenSizes?.mdScreen;

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname, isMobile]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  const SidebarContent = () => (
    <>
      {/* Profile & Menu */}
      <div className="w-full lg:bg-[#FBFBFB] py-4 px-4 md:px-1 md:sm:px-8 rounded-3xl">
        {/* Profile */}
        <div
          className="mb-8 flex items-center gap-5"
          aria-label={t("profile.userInfo", { default: "User information" })}
        >
          <Avatar className="size-12">
            <AvatarFallback>Ha</AvatarFallback>
          </Avatar>
          <span className="font-medium text-lg block md:hidden lg:block">Hana</span>
        </div>

        {/* Menu */}
        <motion.nav
          className="flex flex-col gap-5 items-start"
          aria-label={t("profile.menu", { default: "Profile menu" })}
          variants={containerVariants}
          animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        >
          {SIDEBAR_LINKS.map((link, index) => {
            if ("divider" in link && link.divider) {
              return (
                <motion.hr
                  key={index}
                  className="border-gray-200 my-3 w-full"
                  role="separator"
                  variants={menuItemVariants}
                />
              );
            }

            const isActive = pathname.includes(link.path!);

            return (
              <motion.div key={index} variants={menuItemVariants}>
                <Link
                  href={`/profile${link.path}`}
                  className={cn(
                    "flex items-center gap-4 font-medium transition-colors w-full",
                    isActive ? "text-main" : "text-gray-400 hover:text-main",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.icon && <link.icon size={18} aria-hidden="true" focusable="false" />}
                  <span>{t(link.label!)}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>

      {/* Logout */}
      <motion.div
        variants={menuItemVariants}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
      >
        <Link
          href="/logout"
          className="flex items-center justify-start gap-3 text-red-600 hover:text-red-700 transition-colors bg-[#FBFBFB] py-4 px-4 md:px-2 md:sm:px-8 rounded-2xl w-full"
          aria-label={t("profile.logout")}
        >
          <RiLogoutBoxFill size={18} aria-hidden="true" focusable="false" />
          <span className="block">{t("profile.logout")}</span>
        </Link>
      </motion.div>
    </>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/5 end-10 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-200 lg:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t("profile.openMenu", { default: "Open menu" })}
        >
          <HiMenuAlt3 size={20} className="text-gray-700" />
        </motion.button>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto lg:hidden"
              aria-label={t("profile.sidebarNavigation", { default: "Profile navigation" })}
            >
              <div className="p-6 flex flex-col gap-6 h-full">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {t("profile.menu", { default: "Profile" })}
                  </h2>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={t("profile.closeMenu", { default: "Close menu" })}
                  >
                    <HiX size={20} className="text-gray-600" />
                  </motion.button>
                </div>

                <SidebarContent />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Sidebar (Original Design)
  return (
    <aside
      className="w-full lg:w-1/4 flex flex-col gap-6"
      aria-label={t("profile.sidebarNavigation", { default: "Profile navigation" })}
    >
      <SidebarContent />
    </aside>
  );
}
