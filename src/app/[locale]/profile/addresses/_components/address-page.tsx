import { ActionButton, TrashButton } from "@/components/common/shared-buttons";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslations } from "next-intl";
const AddAddressDialog = dynamic(() => import("./add-address-dialog"));
export default function AddressPage() {
  // Translation
  const t = useTranslations();

  const addresses = [
    { id: "r1", value: "value-1", label: t("home"), address: "18 El-Nozha Street, Building 42" },
    { id: "r2", value: "value-2", label: t("work"), address: "18 El-Nozha Street, Building 42" },
    { id: "r3", value: "value-3", label: t("other"), address: "18 El-Nozha Street, Building 42" },
  ];

  return (
    <div aria-labelledby="address-page-title" className="max-w-[800px]">
      <h3 id="address-page-title" className="font-medium text-2xl">
        {t("my-addresses")}
      </h3>

      <RadioGroup defaultValue="value-1" aria-label="Select a default address">
        <div className="flex flex-col gap-5 mt-5">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="flex w-full justify-between items-center rtl:flex-row-reverse gap-4 border border-[#F0EEF0] genz:border-gradient rounded-3xl px-5 py-3"
              aria-label={`${addr.label}, ${addr.address}`}
            >
              <div className="flex items-center gap-5 rtl:flex-row-reverse">
                <RadioGroupItem value={addr.value} id={addr.id} />
                <div>
                  <Label className="font-medium text-base rtl:justify-end" htmlFor={addr.id}>
                    {addr.label}
                  </Label>
                  <p className="text-sm text-zinc-700">{addr.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <ActionButton className="size-10" aria-label={`Edit ${addr.label} address`} />
                <TrashButton className="size-10" aria-label={`Delete ${addr.label} address`} />
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>

      <AddAddressDialog />
    </div>
  );
}
