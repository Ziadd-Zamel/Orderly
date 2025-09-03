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
      <h2 className="mb-4 text-2xl font-medium text-zinc-800">{t("profile.accountSettings")}</h2>

      {/* Language Selection Container */}
      <div className="mb-6 flex w-full flex-col gap-4 rounded-4xl bg-gray-50 p-5">
        <h3 className="text-lg font-medium text-zinc-800">{t("communication-in")}</h3>

        <div className="flex flex-col gap-2">
          <h4 className="text-base text-zinc-600 rtl:font-bold">{t("language")}</h4>
          <SwitchLocale className="w-1/2 justify-between rounded-2xl border p-4" />
        </div>
      </div>

      {/* Notifications Settings Container */}
      <div className="my-6 flex w-full flex-col gap-4 rounded-4xl bg-gray-50 p-5">
        <h3 className="text-lg font-medium text-zinc-800">{t("notifications")}</h3>

        <div className="flex flex-col items-center gap-3 md:flex-row">
          {/* Notifications */}
          <div className="flex w-full items-center justify-between rounded-lg border border-[#DCDBDB] p-4 sm:w-[300px] sm:max-w-[400px]">
            <h4 className="text-base text-zinc-600">{t("allow-notifications")}</h4>
            <Switch className="cursor-pointer" />
          </div>

          {/* Notifications Rings */}
          <div className="flex w-full items-center justify-between rounded-lg border border-[#DCDBDB] p-4 sm:w-[300px] sm:max-w-[400px]">
            <h4 className="text-base text-zinc-600">{t("allow-notifications-rings")}</h4>
            <Switch className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Danger Zone | Account Deletion Button */}
      <Button className="text-custom-orange genz:text-red-400 genz:bg-transparent bg-transparent text-xl font-medium hover:bg-transparent hover:underline">
        {t("delete-account")}
      </Button>
    </>
  );
}
