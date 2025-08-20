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
import { useForgetPasswordSchema, ForgetPasswordFields } from "@/lib/schemas/auth.schema";
import { useTranslations } from "next-intl";

export default function ForgetPasswordForm({ afterSubmit }: { afterSubmit: () => void }) {
  const t = useTranslations();
  const ForgetPasswordSchema = useForgetPasswordSchema();

  const form = useForm<ForgetPasswordFields>({
    resolver: zodResolver(ForgetPasswordSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<ForgetPasswordFields> = (values) => {
    console.log(values);
    if (afterSubmit) {
      afterSubmit();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex-col flex items-center justify-center max-w-lg mx-auto sm:px-5"
      >
        <div className="text-center">
          <h1 className="text-main font-medium text-3xl sm:text-4xl">{t("auth.forget.title")}</h1>
          <p className="text-md sm:text-lg text-zinc-400 mt-4">{t("auth.forget.subtitle")}</p>
        </div>

        <div className="w-full space-y-8 mt-16">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">{t("auth.forget.fields.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    variant="outline"
                    placeholder={t("auth.forget.fields.phone.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full h-14 rounded-xl mt-16 text-xl font-semibold" type="submit">
          {t("auth.forget.submitButton")}
        </Button>
      </form>
    </Form>
  );
}
