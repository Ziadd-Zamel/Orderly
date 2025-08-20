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
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { LoginFields, useLoginSchema } from "@/lib/schemas/auth.schema";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import MultiStepPasswordDialog from "./multi-step-password-dialog";

export default function LoginForm() {
  // Hooks
  const loginSchema = useLoginSchema();
  const t = useTranslations();

  // Form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full flex-col flex items-center justify-center max-w-lg mx-auto sm:px-5"
      >
        <div className="text-center ">
          <h1 className="text-main font-medium text-3xl sm:text-5xl">{t("auth.login.title")}</h1>
          <p className=" text-md sm:text-2xl text-zinc-500 mt-4">{t("auth.login.subtitle")}</p>
        </div>
        <div className="w-full space-y-8 mt-16">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">{t("auth.login.fields.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    variant={"outline"}
                    placeholder={t("auth.login.fields.phone.placeholder")}
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
                <FormLabel className="text-lg">{t("auth.login.fields.password.label")}</FormLabel>
                <FormControl>
                  <PasswordInput
                    variant={"outline"}
                    placeholder={t("auth.login.fields.password.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <MultiStepPasswordDialog />
        <Button className="w-full h-14 rounded-xl mt-16 text-xl font-semibold" type="submit">
          {t("auth.login.submitButton")}
        </Button>
        <p className="text-xl text-zinc-500 mt-20">
          {t("auth.login.registerPrompt")}{" "}
          <Link href={"/auth/register"} className="ml-1 text-custom-orang font-semibold">
            {t("auth.login.registerLink")}
          </Link>
        </p>
      </form>
    </Form>
  );
}
