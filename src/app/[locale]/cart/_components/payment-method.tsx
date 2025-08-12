"use client";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("value-1");

  const paymentMethods = [
    { id: "r1", value: "value-1", icon: "/assets/icons/cash.svg", label: "Cash on Delivery" },
    { id: "r2", value: "value-2", icon: "/assets/icons/cash.svg", label: "Fawry" },
    { id: "r3", value: "value-3", icon: "/assets/icons/cash.svg", label: "Stripe" },
  ];

  const handleSelection = (value: string) => {
    setSelectedMethod(value);
  };

  return (
    <div className="flex flex-col gap-6" aria-label="Select payment method">
      {paymentMethods.map((method) => {
        const isSelected = selectedMethod === method.value;
        return (
          <div
            key={method.id}
            className={`flex w-full items-center gap-3 p-3 rounded-lg border cursor-pointer transition
              ${isSelected ? "border-main bg-main/5" : "border-gray-200"}
            `}
            onClick={() => handleSelection(method.value)}
          >
            <Checkbox
              id={method.id}
              checked={isSelected}
              onCheckedChange={() => handleSelection(method.value)}
              className="rounded-full size-5"
            />
            <Image src={method.icon} alt={`${method.label} icon`} width={30} height={30} />
            <Label htmlFor={method.id} className="font-medium text-base cursor-pointer">
              {method.label}
            </Label>
          </div>
        );
      })}
    </div>
  );
}
