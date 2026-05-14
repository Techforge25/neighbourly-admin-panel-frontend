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
      <label htmlFor={name} className="text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <LuPhone
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          id={name}
          name={name}
          type="tel"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#F58D7E] focus:outline-none focus:ring-1 focus:ring-[#F58D7E]"
        />
      </div>
    </div>
  );
}