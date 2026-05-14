"use client";

import { FilterPillSelectProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuCheck } from "react-icons/lu";

export default function FilterPillSelect({
  label,
  value,
  options,
  onChange,
  menuWidth,
}: FilterPillSelectProps) {
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

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Trigger pill */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-border-secondary bg-white px-4 py-2 text-sm transition hover:border-text-para sm:w-auto"
      >
        <span className="flex items-center gap-1 truncate">
          <span className="text-text-para">{label}:</span>
          <span className="font-medium capitalize text-text-primary">
            {value}
          </span>
        </span>
        <LuChevronDown
          size={16}
          className={`shrink-0 text-text-para transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute left-0 z-30 mt-2 max-h-64 overflow-y-auto rounded-xl border border-border-secondary bg-white shadow-lg"
          style={{ width: menuWidth ?? "100%", minWidth: "200px" }}
        >
          <ul className="py-1">
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm capitalize transition ${
                      isSelected
                        ? "bg-bg-light-primary font-medium text-bg-primary"
                        : "text-text-primary hover:bg-surface-muted"
                    }`}
                  >
                    <span className="truncate">{option}</span>
                    {isSelected && (
                      <LuCheck size={16} className="shrink-0 text-bg-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
