import { queryKeys } from "@/keys";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuChevronDown } from "react-icons/lu";

type Props = {
  type: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  menuWidth?: string | number;
};

export default function FilterDropdown({
  type,
  value,
  options,
  onChange,
  menuWidth,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isClusterDropdownOpened, setIsClusterDropdownOpened] =
    useState(false);
  const getSuburbsDropdown = async () => {
    const res = await fetch(
      "https://neighbourly-backend.beneighbourly.com.au/api/v1/suburb"
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch suburbs");
    }
  
    return res.json();
  };
  
    const {
    data: clusterResponse,
    isPending: isClusterPending,
  } = useQuery({
    queryKey: [queryKeys.suburbsDropdown],
    enabled: isClusterDropdownOpened,
    queryFn: getSuburbsDropdown,
  });
    const clusters = clusterResponse?.data ?? [];

   const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

   
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
    const apiOptions =
  type === "suburb" && clusters.length > 0
    ? clusters.map((item: { name: string }) => item.name)
    : options;

const filteredOptions = apiOptions.filter((opt: string) => opt !== "All");

const dropdownOptions = ["All", ...filteredOptions];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => {
          setOpen((p) => !p);
          setIsClusterDropdownOpened(true);
        }}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-gray-700 hover:border-gray-300"
      >
        <span>
          Filter By Suburb:{" "}
          <span className="font-medium text-gray-900">{value}</span>
        </span>
        <LuChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 z-30 mt-2 max-h-64 overflow-y-auto rounded-xl border border-border-secondary bg-white shadow-lg" style={{ width: menuWidth ?? "100%", minWidth: "200px" }}>
          <ul className="py-1">
            {dropdownOptions.map((option: string) => {
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
