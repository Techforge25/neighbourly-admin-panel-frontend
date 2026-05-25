"use client";

import { sponsor, suburbs } from "@/constants/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  LuArrowLeft,
  LuCamera,
  LuCheck,
  LuChevronDown,
  LuPhone,
  LuPlus,
} from "react-icons/lu";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createSponsor } from "@/services/sponsor";
import { queryKeys } from "@/keys";
import { createSponsorValidator } from "@/validations/sponsor";
import { uploadToCloudinary } from "@/helpers/cloudinary/UploadToCloudinary";
import { CreateSponsor } from "@/types";

const Page = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState("");
  const [selectedCat, setSelectedCat] =
    useState("Mortgage Broker");
  const [preview, setPreview] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(createSponsorValidator),
    mode: 'all',
    defaultValues: {
      personName: "",
      businessName: "",
      suburb: "",
      serviceType: "Mortgage Broker",
      logo: "",  
      contact: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateSponsor) => createSponsor(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.sponsor],
      });

      router.back();
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmitForm = (data: any) => {
    mutate(data);
  };

  const onChange = (opt: string) => {
    setSelected(opt);

    setValue("suburb", opt, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onChangeData = (opt: string) => {
    setSelectedCat(opt);

    setValue("serviceType", opt, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleFile = async (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);

    try {
      const url = await uploadToCloudinary({
        file,
        folder: "sponsor",
      });
      setValue("logo", url as string, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
      >
        <LuArrowLeft size={16} />
        Back
      </button>

      <div className="rounded-2xl bg-surface p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-semibold">
          Sponsor Details
        </h1>

        <hr className="mb-6 border-gray-200" />

        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-5"
        >
          {/* Hidden RHF fields */}
          <input type="hidden" {...register("suburb")} />
          <input
            type="hidden"
            {...register("serviceType")}
          />
          <input type="hidden" {...register("logo")} />

          {/* Sponsor Name */}
          <div className="flex flex-col gap-2">
            <label className="font-manrope text-[0.875rem] font-medium text-text-primary">
              Sponsor Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              {...register("personName")}
              className="w-full rounded-lg border border-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
            />

            {errors?.personName && (
              <span className="text-sm text-red-500">
                {errors.personName.message}
              </span>
            )}
          </div>

          {/* Business Name */}
          <div className="flex flex-col gap-2">
            <label className="font-manrope text-[0.875rem] font-medium text-text-primary">
              Business Name <span className="text-red-500">*</span>
            </label>


            <input
              type="text"
              {...register("businessName")}
              className="w-full rounded-lg border border-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
            />

            {errors?.businessName && (
              <span className="text-sm text-red-500">
                {errors.businessName.message}
              </span>
            )}
          </div>

          {/* Suburb */}
          <div
            className="flex flex-col gap-2"
            ref={wrapperRef}
          >
            <label className="text-sm font-medium text-text-primary">
              Suburb{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary focus:border-[#F58D7E] focus:outline-none"
              >
                <span
                  className={
                    selected
                      ? "text-text-primary"
                      : "text-gray-400"
                  }
                >
                  {selected || "Select suburb"}
                </span>

                <LuChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open && (
                <div className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                  {suburbs.map((opt) => {
                    const isSelected = opt === selected;

                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => {
                          onChange(opt);
                          setOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-[#FDF2EF] ${isSelected
                          ? "bg-[#FDF2EF] font-medium text-[#F58D7E]"
                          : "text-gray-700"
                          }`}
                      >
                        {opt}

                        {isSelected && (
                          <LuCheck
                            size={16}
                            className="text-[#F58D7E]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {errors?.suburb && (
              <span className="text-sm text-red-500">
                {errors.suburb.message}
              </span>
            )}
          </div>

          {/* Business Category */}
          <div className="flex flex-col gap-2">
            <label className="font-manrope text-[0.875rem] font-medium text-text-primary">
              Business Category{" "}
              <span className="text-accent-danger">*</span>
            </label>

            <div className="flex flex-wrap gap-3">
              {sponsor.map((opt) => {
                const isSelected =
                  selectedCat === opt?.value;

                return (
                  <button
                    type="button"
                    key={opt?.value}
                    onClick={() =>
                      onChangeData(opt?.value)
                    }
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition ${isSelected
                      ? "border-bg-primary bg-bg-primary/10 text-bg-primary"
                      : "border-border-primary bg-surface text-text-primary hover:border-border-primary"
                      }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${isSelected
                        ? "border-bg-primary"
                        : "border-border-primary"
                        }`}
                    >
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-bg-primary" />
                      )}
                    </span>

                    {opt.label}
                  </button>
                );
              })}
            </div>

            {errors?.serviceType && (
              <span className="text-sm text-red-500">
                {errors.serviceType.message}
              </span>
            )}
          </div>

          {/* Sponsor Photo */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-800">
              Sponsor Photo <span className="text-accent-danger">*</span>
            </label>

            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);

                if (e.dataTransfer.files?.[0]) {
                  handleFile(e.dataTransfer.files[0]);
                }
              }}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 px-6 py-10 text-center transition ${dragging
                ? "border-[#F58D7E] bg-[#FDF2EF]"
                : "border-gray-300"
                }`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mb-3 h-80 w-80 rounded-lg object-cover"
                />
              ) : (
                <LuCamera
                  size={28}
                  className="mb-2 text-gray-400"
                />
              )}

              <p className="text-sm font-medium text-gray-700">
                Click to upload or drag and drop
              </p>

              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG up to 10MB Recommended
              </p>

              <input
                ref={inputRef}
                type="file"
                className="hidden"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) =>
                  handleFile(
                    e.target.files?.[0] ?? null
                  )
                }
              />
            </div>

            {errors?.logo && (
              <span className="text-sm text-red-500">
                {errors.logo.message}
              </span>
            )}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <label className="font-manrope text-[0.875rem] font-medium text-text-primary">
              Call Button Link (Phone Number){" "}
              <span className="text-accent-danger">*</span>
            </label>

            <div className="relative">
              <LuPhone
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-para"
              />

              <input
                type="tel"
                placeholder="+61 400 000 000"
                {...register("contact")}
                className="w-full rounded-lg border border-bg-secondary px-4 py-3 pl-10 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
              />
            </div>

            {errors?.contact && (
              <span className="text-sm text-red-500">
                {errors.contact.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              disabled={isPending || !isValid}
              className="flex items-center gap-2 cursor-pointer rounded-full bg-bg-primary px-6 py-3 font-medium text-surface transition hover:bg-bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending
                ? "Saving..."
                : "Save and Publish"}

              <LuPlus size={16} />
            </button>

            <button
              onClick={() => router.back()}
              type="button"
              className="rounded-full border border-gray-200 px-6 py-3 font-medium text-text-primary transition hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;