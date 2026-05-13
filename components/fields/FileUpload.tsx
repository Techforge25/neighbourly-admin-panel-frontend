import { FileUploadProps } from "@/types";
import { useRef, useState } from "react";
import { LuCamera } from "react-icons/lu";

export default function FileUpload({
  label,
  name,
  value,
  accept = "image/png, image/jpeg",
  hint = "PNG, JPG up to 10MB (Recommended: 800×800px)",
  onChange,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file: File | null) => {
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-800">{label}</label>
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
          if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
        }}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 px-6 py-10 text-center transition ${
          dragging ? "border-[#F58D7E] bg-[#FDF2EF]" : "border-gray-300"
        }`}
      >
        <LuCamera size={28} className="mb-2 text-gray-400" />
        <p className="text-sm font-medium text-gray-700">
          {value ? value.name : "Click to upload or drag and drop"}
        </p>
        <p className="mt-1 text-xs text-gray-400">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
}
