"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

export default function Page() {
  const [isLoading, setIsloading] = useState(false);

  const handleClick = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  return (
    <div className="container py-10 flex gap-10 ">
      {/* <div className="flex flex-col gap-4 w-1/3 p-6 border-2 border-dashed rounded-xl">
        <h2 className="text-xl self-start">Inputs:</h2>
        <Input type="text" variant={"outline"} />
        <Input type="text" variant={"outline"} value={"Input text"} />
        <Input type="text" variant={"outline"} disabled />
        <Input type="text" variant={"outline"} state={"error"} />
        <Input type="search" variant={"outline"} placeholder="Search..." />
        <Input type="number" variant={"outline"} />
        <Input type="file" variant={"outline"} />
        <SelectDemo />
      </div> */}

      {/* Text Area */}
      {/* <div className="flex flex-col gap-3 w-1/3 p-6 border-2 border-dashed rounded-xl">
        <h2 className="text-xl self-start">Text Area:</h2>
        <Textarea variant={"outline"} />
        <Textarea variant={"outline"} disabled />
        <Textarea variant={"outline"} state={"error"} />
      </div> */}

      {/* Buttons */}
      <div className="flex flex-col items-center gap-2 w-1/3 p-6 border-2 border-dashed rounded-xl">
        {/* Default Buttons */}
        <h2 className="text-xl self-start">Default:</h2>

        <Button
          onClick={() => toast.info("Product added successfully")}
          variant={"default"}
          className="w-32"
        >
          Button
        </Button>

        <Button className="w-32" variant={"default"} disabled={true}>
          Button
        </Button>

        <Button
          onClick={handleClick}
          variant={"default"}
          disabled={isLoading}
          loading={isLoading}
          className="w-32"
        >
          Load
        </Button>

        <Button
          onClick={() => toast.info("Informative message")}
          variant={"default"}
          disabled={isLoading}
          className="w-32"
        >
          Info Toast
        </Button>

        {/* Outline Buttons */}
        <h2 className="text-xl self-start mt-5">Outline:</h2>
        <Button className="w-32" variant={"outline"}>
          Button
        </Button>

        <Button className="w-32" variant={"outline"} disabled={true}>
          Button
        </Button>

        <Button
          className="w-32"
          variant={"outline"}
          onClick={handleClick}
          disabled={isLoading}
          loading={isLoading}
        >
          Load
        </Button>

        <Button
          className="w-32"
          onClick={() => toast.success("Successful operation")}
          variant={"outline"}
        >
          Success Toast
        </Button>

        {/* Destructive Buttons */}
        <h2 className="text-xl self-start mt-5">Destructive:</h2>
        <Button className="w-32" variant={"destructive"}>
          Button
        </Button>

        <Button className="w-32" variant={"destructive"} disabled={true}>
          Button
        </Button>

        <Button
          className="w-32"
          variant={"destructive"}
          onClick={handleClick}
          disabled={isLoading}
          loading={isLoading}
        >
          Load
        </Button>

        <Button
          className="w-32"
          onClick={() => toast.error("Unsuccessful operation")}
          variant={"destructive"}
        >
          Error Toast
        </Button>
      </div>

      <Toaster />
    </div>
  );
}
