import { RadioPillGroupProps } from "@/types";

export default function RadioPillGroup({
  label,
  name,
  value,
  required,
  options,
  onChange,
}: RadioPillGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-text-primary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              type="button"
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition ${
                isSelected
                  ? "border-bg-primary bg-bg-primary/10  text-bg-primary"
                  : "border-border-primary bg-surface text-text-primary hover:border-border-primary"
              }`}
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  isSelected ? "border-bg-primary" : "border-border-primary"
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
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
