"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Plus, Home, Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
const formSchema = z.object({
  governorate: z.string().min(1, "Please select a governorate"),
  city: z.string().min(1, "Please select a city"),
  addressType: z.enum(["home", "work", "other"]),
  address: z.string().min(1, "Please enter your address"),
});

type FormData = z.infer<typeof formSchema>;

const governorates = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Qalyubia",
  "Port Said",
  "Suez",
  "Luxor",
  "Aswan",
];

const cities = {
  Cairo: ["Nasr City", "Heliopolis", "Maadi", "Zamalek", "Downtown"],
  Giza: ["6th of October", "Sheikh Zayed", "Dokki", "Mohandessin"],
  Alexandria: ["Smouha", "Gleem", "Stanley", "Montaza"],
};

export default function AddAddressDialog() {
  // Translation
  const t = useTranslations();

  // States
  const [open, setOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      governorate: "",
      city: "",
      addressType: "other",
      address: "",
    },
  });

  const selectedGovernorate = form.watch("governorate");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setOpen(false);
  };

  const addressTypes = [
    { value: "home", label: t("home"), icon: Home },
    { value: "work", label: t("work"), icon: Briefcase },
    { value: "other", label: t("other"), icon: MapPin },
  ];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-custom-orange genz:text-gradient genz:hover:text-gradient hover:text-custom-orange/80 hover:bg-custom-orange/5 mt-5 text-lg"
        >
          <Plus aria-hidden="true" className="genz:text-purple-500" />
          {t("add-new-address")}
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="!max-w-2xl w-full bg-white rounded-3xl py-10">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">{t("add-new-address")}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-full">
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="governorate"
                render={({ field }) => (
                  <FormItem className="w-1/2 ">
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue("city", "");
                        }}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 w-full py-6">
                          <SelectValue placeholder={t("governrate")} />
                        </SelectTrigger>
                        <SelectContent>
                          {governorates.map((gov) => (
                            <SelectItem key={gov} value={gov}>
                              {gov}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!selectedGovernorate}
                      >
                        <SelectTrigger className="h-12 w-full py-6">
                          <SelectValue placeholder={t("city")} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedGovernorate &&
                            cities[selectedGovernorate as keyof typeof cities]?.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Label className="font-medium text-zinc-900 mb-3 text-lg">{t("address-type")}</Label>
              <FormField
                control={form.control}
                name="addressType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex gap-2">
                        {addressTypes.map((type) => {
                          const Icon = type.icon;
                          const isSelected = field.value === type.value;
                          return (
                            <Button
                              key={type.value}
                              type="button"
                              onClick={() => field.onChange(type.value)}
                              className={cn(
                                "flex items-center gap-2 px-4 py-3 rounded-full genz:bg-transparent genz:hover:bg-gradient hover:bg-main hover:text-white",
                                isSelected
                                  ? "bg-main text-white genz:bg-gradient "
                                  : "bg-gray-200 text-zinc-600 ",
                              )}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm font-medium">{type.label}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input variant={"outline"} {...field} placeholder={t("address")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="h-12 bg-main hover:bg-main/70 genz:bg-purple-500 genz:hover:bg-purple-600 font-medium w-fit px-10 self-end"
            >
              {t("confirm-location")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
