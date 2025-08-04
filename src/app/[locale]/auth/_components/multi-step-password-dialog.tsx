import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ForgetPasswordForm from "./forget-password-form";
import { OtpForm } from "./otp-form";
import ChangePasswordForm from "./change-password-form";
import { useTranslations } from "next-intl";

const MultiStepPasswordDialog = () => {
  const t = useTranslations();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStepSubmit = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
      setCurrentStep(1);
    }
  };

  const resetDialog = () => {
    setCurrentStep(1);
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return <ForgetPasswordForm afterSubmit={handleStepSubmit} />;
      case 2:
        return <OtpForm afterSubmit={handleStepSubmit} />;
      case 3:
        return <ChangePasswordForm afterSubmit={handleStepSubmit} />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) resetDialog();
      }}
    >
      <DialogTrigger asChild>
        <button className="text-main cursor-pointer font-semibold text-end self-end pt-4">
          {t("auth.login.forgetPassword")}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-white rounded-4xl h-[550px] flex flex-col justify-center sm:px-20 px-5">
        <DialogHeader className="sr-only">
          <DialogTitle></DialogTitle>
        </DialogHeader>

        {/* Current Form */}
        <div className="py-4">{renderCurrentForm()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepPasswordDialog;
