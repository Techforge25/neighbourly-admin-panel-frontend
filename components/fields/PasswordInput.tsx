import { PasswordInputProps } from "@/types";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function PasswordInput({
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-manrope text-[0.875rem] font-medium text-text-primary ">
        {label} {required && <span className="text-accent-danger">*</span>}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
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
