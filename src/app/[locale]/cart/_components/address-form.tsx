"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { Home, Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
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
export default function AddressForm() {
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
  };

  const addressTypes = [
    { value: "home", label: "Home", icon: Home },
    { value: "work", label: "Work", icon: Briefcase },
    { value: "other", label: "Other", icon: MapPin },
  ];
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-full">
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="governorate"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("city", "");
                    }}
                    value={field.value}
                  >
                    <SelectTrigger className="h-12 w-full py-6">
                      <SelectValue placeholder="Governorate" />
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
                      <SelectValue placeholder="City" />
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
          <Label className="font-medium text-zinc-900 mb-3 text-lg">Select Address type</Label>
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
                            "flex items-center gap-2 px-4 py-3 rounded-full hover:bg-main hover:text-white",
                            isSelected ? "bg-main text-white " : "bg-gray-200 text-zinc-600 ",
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
                <Input variant={"outline"} {...field} placeholder="Address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-12 bg-main hover:bg-main/70 font-medium w-fit px-10 self-end"
        >
          Confirm Location
        </Button>
      </form>
    </Form>
  );
}
