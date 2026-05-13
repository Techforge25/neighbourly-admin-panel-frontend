import { TextInputProps } from "@/types";

export default function TextInput({
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#F58D7E] focus:outline-none focus:ring-1 focus:ring-[#F58D7E]"
      />
    </div>
  );
}
