"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangePasswordFields, useChangePasswordSchema } from "@/lib/schemas/auth.schema";
import { useTranslations } from "next-intl";
import { PasswordInput } from "./password-input";

export default function ChangePasswordForm({ afterSubmit }: { afterSubmit: () => void }) {
  // Hooks
  const ChangePasswordSchema = useChangePasswordSchema();
  const t = useTranslations();

  // Form
  const form = useForm<ChangePasswordFields>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      rePassword: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ChangePasswordFields> = (values) => {
    console.log(values);
    if (afterSubmit) {
      afterSubmit();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full flex-col flex items-center justify-center max-w-lg mx-auto sm:px-5"
      >
        <div className="text-center ">
          <h1 className="text-main font-medium text-3xl sm:text-4xl">
            {t("auth.changePassword.title")}
          </h1>
          <p className=" text-md sm:text-lg text-zinc-400 mt-4">
            {t("auth.changePassword.subtitle")}
          </p>
        </div>
        <div className="w-full space-y-8 mt-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">
                  {t("auth.register.fields.password.label")}
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    variant={"outline"}
                    placeholder={t("auth.register.fields.password.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">
                  {t("auth.register.fields.rePassword.label")}
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    variant={"outline"}
                    placeholder={t("auth.register.fields.rePassword.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full h-14 rounded-xl mt-16 text-xl font-semibold" type="submit">
          {t("auth.changePassword.submitButton")}
        </Button>
      </form>
    </Form>
  );
}
