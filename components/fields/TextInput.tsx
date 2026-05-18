import { TextInputProps } from "@/types";

export default function TextInput({
  label,
  placeholder,
  register,
  error
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="font-manrope text-[0.875rem] font-medium text-text-primary"
      >
        {label}
      </label>
      <input
        type="text"
        {...register}
        placeholder={placeholder}
        className="w-full rounded-lg border border-bg-secondary px-4 py-3 pr-12 text-sm text-text-primary placeholder:text-gray-400 focus:border-bg-primary focus:outline-none focus:ring-1 focus:ring-bg-primary"
      />
      {error}
    </div>
  );
}
