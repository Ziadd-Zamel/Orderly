import { SwitchLocale } from "@/components/custom/switch-locale";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";
import React from "react";

export default function AccountSettings() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Section Heading */}
      <h2 className="text-2xl font-medium text-zinc-800 mb-4">{t("profile.accountSettings")}</h2>

      {/* Language Selection Container */}
      <div className="w-full flex flex-col gap-4 bg-gray-50 rounded-4xl p-5 mb-6">
        <h3 className="text-lg font-medium text-zinc-800">{t("communication-in")}</h3>

        <div className="flex flex-col gap-2">
          <h4 className="text-base text-zinc-600 rtl:font-bold">{t("language")}</h4>
          <SwitchLocale className="w-1/2 justify-between border p-4 rounded-2xl" />
        </div>
      </div>

      {/* Notifications Settings Container */}
      <div className="w-full flex flex-col gap-4 bg-gray-50 rounded-4xl p-5 my-6">
        <h3 className="text-lg font-medium text-zinc-800">{t("notifications")}</h3>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Notifications */}
          <div className="w-full md:w-1/2 flex items-center justify-between border p-4 rounded-2xl">
            <h4 className="text-base text-zinc-600">{t("allow-notifications")}</h4>
            <Switch className="cursor-pointer" />
          </div>

          {/* Notifications Rings */}
          <div className="w-full md:w-1/2 flex items-center justify-between border p-4 rounded-2xl">
            <h4 className="text-base text-zinc-600">{t("allow-notifications-rings")}</h4>
            <Switch className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Danger Zone | Account Deletion Button */}
      <Button className="bg-transparent hover:bg-transparent text-custom-orange genz:text-red-400 genz:bg-transparent text-xl font-medium hover:underline">
        {t("delete-account")}
      </Button>
    </>
  );
}
