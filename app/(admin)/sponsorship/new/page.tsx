"use client";
import FormField from "@/components/ui/FormField";
import { fieldsConfig } from "@/constants/constants";
import { FormValues } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuArrowLeft, LuPlus } from "react-icons/lu";

const page = () => {
  const [values, setValues] = useState<FormValues>({});
  const router = useRouter();

  const handleChange = (name: string, value: string | File | null) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form values:", values);
    // your API call here
  };

  return (
    <div className="">
      {/* Back button */}
      <button
        onClick={() => {
          router.back();
        }}
        className="mb-4 flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
      >
        <LuArrowLeft size={16} /> Back
      </button>

      {/* Card */}
      <div className=" rounded-2xl bg-surface p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-semibold text-">Sponsor Details</h1>
        <hr className="mb-6 border-gray-200" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {fieldsConfig.map((field: any) => (
            <FormField
              key={field.name}
              field={field}
              values={values}
              onChange={handleChange}
            />
          ))}

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-bg-primary px-6 py-3 font-medium text-surface hover:bg-bg-primary/90 transition"
            >
              Save and Publish <LuPlus size={16} />
            </button>
            <button
              type="button"
              className="rounded-full border border-gray-200 px-6 py-3 font-medium text-text-primary hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
