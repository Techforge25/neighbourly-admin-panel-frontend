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
      <label
        htmlFor={name}
        className="font-manrope text-[0.875rem] font-medium text-text-primary"
      >
        {label} {required && <span className="text-accent-danger">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-bg-secondary px-4 py-3 pr-12 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
      />
    </div>
  );
}
