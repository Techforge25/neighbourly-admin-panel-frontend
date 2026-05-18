import { PasswordInputProps } from "@/types";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function PasswordInput({
  label,
  placeholder,
  register,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="font-manrope text-[0.875rem] font-medium text-text-primary ">
        {label}
      </label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className="w-full rounded-lg border border-bg-secondary px-4 py-3 pr-12 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
        />
        <button
          type="button"
          onClick={() => setVisible((p) => !p)}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-text-para hover:text-text-para"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <LuEye size={18} /> : <LuEyeOff size={18} />}
        </button>
      </div>
    </div>
  );
}
