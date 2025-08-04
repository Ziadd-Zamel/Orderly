import { SwitchLocale } from "@/components/common/switch-locale";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();
  return <div className="bg-hero-gradient w-full h-screen"></div>;
}
