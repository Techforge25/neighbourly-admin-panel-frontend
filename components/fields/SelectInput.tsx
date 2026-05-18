import { useEffect, useRef, useState } from "react";
import { SelectInputProps } from "@/types";
import { LuCheck, LuChevronDown } from "react-icons/lu";

export default function SelectInput({
  label,
  name,
  value,
  placeholder = "Select",
  required,
  options,
  onChange,
}: SelectInputProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-2" ref={wrapperRef}>
      <label className="text-sm font-medium text-text-primary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text-primary focus:border-[#F58D7E] focus:outline-none"
        >
          <span className={value ? "text-text-primary" : "text-gray-400"}>
            {value || placeholder}
          </span>
          <LuChevronDown
            size={18}
            className={`text-gray-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-[#FDF2EF] ${
                    isSelected
                      ? "bg-[#FDF2EF] text-[#F58D7E] font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {opt}
                  {isSelected && <LuCheck size={16} className="text-[#F58D7E]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}