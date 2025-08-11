"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { RegistrationFields, useRegisterSchema } from "@/lib/schemas/auth.schema";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterForm() {
  // Hooks
  const registerSchema = useRegisterSchema();
  const t = useTranslations();

  // Form
  const form = useForm<RegistrationFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      rePassword: "",
      terms: false,
    },
  });

  // Functions
  const onSubmit: SubmitHandler<RegistrationFields> = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full flex-col flex items-center justify-center max-w-lg mx-auto sm:px-5"
      >
        <div className="text-start">
          <h1 className="text-main font-medium text-3xl sm:text-5xl">{t("auth.register.title")}</h1>
          <p className=" text-md sm:text-2xl text-zinc-500 mt-4">{t("auth.register.subtitle")}</p>
        </div>
        <div className="w-full space-y-8 mt-16">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">{t("auth.register.fields.name.label")}</FormLabel>
                <FormControl>
                  <Input
                    variant={"outline"}
                    placeholder={t("auth.register.fields.name.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">{t("auth.register.fields.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    variant={"outline"}
                    placeholder={t("auth.register.fields.phone.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 mt-6">
                <FormControl>
                  <Checkbox
                    className="cursor-pointer"
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col">
                  <FormLabel htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                    {t("auth.register.agree")}{" "}
                    <span className="text-custom-orang font-semibold">
                      {t("auth.register.terms")}
                    </span>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={Object.keys(form.formState.errors).length > 0}
          className="w-full h-14 rounded-xl mt-16 text-xl font-semibold"
          type="submit"
        >
          {t("auth.register.submitButton")}
        </Button>
        <p className="text-xl text-zinc-500 mt-20">
          {t("auth.register.loginPrompt")}
          <Link href={"/auth/login"} className="ml-1 text-custom-orang font-semibold">
            {t("auth.register.loginLink")}
          </Link>
        </p>
      </form>
    </Form>
  );
}
