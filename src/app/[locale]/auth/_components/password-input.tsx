import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useTranslations } from "next-intl";

export const PasswordInput = forwardRef<HTMLInputElement, React.ComponentProps<typeof Input>>(
  (props, ref) => {
    // State
    const [showPassword, setShowPassword] = useState(false);
    const t = useTranslations();

    return (
      <div className="relative">
        {/* Input */}
        <Input type={showPassword ? "text" : "password"} {...props} ref={ref} />

        {/* Toggle visibility */}
        <button
          type="button"
          className="absolute cursor-pointer right-0 rtl:right-auto rtl:left-0 top-0 h-full px-3 "
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <VscEyeClosed className="h-6 w-6 text-gray-400" />
          ) : (
            <VscEye className="h-6 w-6 text-gray-400" />
          )}
          <span className="sr-only">
            {showPassword ? t("auth.passwordInput.hide") : t("auth.passwordInput.show")}
          </span>
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
