"use client";

import * as React from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function OtpForm({ afterSubmit }: { afterSubmit: () => void }) {
  const [value, setValue] = React.useState("");
  const handeleSubmit = () => {
    if (afterSubmit) {
      afterSubmit();
    }
  };
  const t = useTranslations();
  return (
    <div className="space-y-2 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-main font-medium text-4xl">{t("auth.otp.title")}</h1>
        <p className=" text-md sm:text-lg text-zinc-400 mt-4">{t("auth.otp.subtitle")}</p>
      </div>
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Button
        onClick={handeleSubmit}
        className="w-full h-14 rounded-xl mt-16 text-xl font-semibold"
        type="submit"
      >
        {t("auth.otp.submitButton")}
      </Button>
      <p className="text-md text-zinc-500 mt-5">
        {t("auth.otp.notReceived")}
        <Link href={"#"} className="ml-1 text-custom-orang font-semibold">
          {t("auth.otp.resend")}
        </Link>
      </p>
    </div>
  );
}
