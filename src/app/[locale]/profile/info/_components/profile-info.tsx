"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ProfileFields, useProfileSchema } from "@/lib/schemas/auth.schema";
import { ActionButton } from "@/components/common/shared-buttons";
import PasswordDialog from "./rest-password-dialog";
import { useTranslations } from "next-intl";

export default function ProfileInfo() {
  // Translation
  const t = useTranslations();

  // State to track which fields are enabled
  const [enabledFields, setEnabledFields] = useState<Set<string>>(new Set());
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);

  // Hooks
  const ProfileSchema = useProfileSchema();

  // Form
  const form = useForm<ProfileFields>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof ProfileSchema>) {
    try {
      console.log(values);
      toast("Profile updated successfully!");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  // Function to toggle field enabled state
  const toggleFieldEnabled = (fieldName: string) => {
    setEnabledFields((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(fieldName)) {
        newSet.delete(fieldName);
      } else {
        newSet.add(fieldName);
      }
      return newSet;
    });
  };

  // Function to handle password action button click
  const handlePasswordAction = () => {
    setIsPasswordDialogOpen(true);
  };

  // Check if any fields are enabled (for save button state)
  const isAnyFieldEnabled = enabledFields.size > 0;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl">
        <h2 className="text-shadow-zinc-950 font-medium text-2xl">{t("my-info")}</h2>
        <div className="mb-8 flex items-center gap-3">
          <Avatar className="size-16">
            <AvatarFallback>Ha</AvatarFallback>
          </Avatar>
          <span className="font-medium genz:text-purple-500">{t("change-photo")}</span>
        </div>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel>{t("full-name")}</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    variant="outline"
                    placeholder="e.g John Doe"
                    type="text"
                    {...field}
                    disabled={!enabledFields.has("fullName")}
                  />
                </FormControl>
                <ActionButton
                  type="button"
                  className="absolute top-4 end-3"
                  onClick={() => toggleFieldEnabled("fullName")}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emial"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel>{t("email-address")}</FormLabel>
              <FormControl>
                <Input
                  variant="outline"
                  placeholder="example@email.com"
                  type="email"
                  {...field}
                  disabled={true}
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
            <FormItem className="gap-2">
              <FormLabel>{t("phone")}</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    variant="outline"
                    placeholder="+201234567890"
                    {...field}
                    disabled={!enabledFields.has("phone")}
                  />
                </FormControl>
                <ActionButton
                  type="button"
                  className="absolute top-4 end-3"
                  onClick={() => toggleFieldEnabled("phone")}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel>{t("password")}</FormLabel>
              <div className="relative">
                <FormControl className="relative">
                  <Input
                    variant="outline"
                    placeholder="••••••••"
                    {...field}
                    disabled={true}
                    type="password"
                  />
                </FormControl>
                <ActionButton
                  type="button"
                  className="absolute top-4 end-3"
                  onClick={handlePasswordAction}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="py-4 rounded-2xl genz:bg-purple-500"
          disabled={!isAnyFieldEnabled}
        >
          {t("save-changes")}
        </Button>
      </form>

      {/* Password Dialog */}
      <PasswordDialog isOpen={isPasswordDialogOpen} setIsOpen={setIsPasswordDialogOpen} />
    </Form>
  );
}
