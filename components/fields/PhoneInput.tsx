import { PhoneInputProps } from "@/types";
import { LuPhone } from "react-icons/lu";




export default function PhoneInput({
  label,
  name,
  value,
  placeholder = "+61 400 000 000",
  required,
  onChange,
}: PhoneInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-manrope text-[0.875rem] font-medium text-text-primary">
        {label} {required && <span className="text-accent-danger">*</span>}
      </label>
      <div className="relative">
        <LuPhone
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-para"
        />
        <input
          id={name}
          name={name}
          type="tel"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className=" py-3 pl-10 pr-4 w-full rounded-lg border border-bg-secondary px-4 py-3 pr-12 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
        />
      </div>
    </div>
  );
}