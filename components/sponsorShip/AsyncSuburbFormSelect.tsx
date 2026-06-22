"use client";

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { useQuery } from "@tanstack/react-query";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const AsyncSuburbFormSelect = ({ value, onChange }: Props) => {
  const [hasOpened, setHasOpened] = useState(false);

  const getSuburbsDropdown = async () => {
    const res = await fetch(
      "https://neighbourly-backend.beneighbourly.com.au/api/v1/suburb"
    );

    if (!res.ok) throw new Error("Failed to fetch suburbs");

    return res.json();
  };

  const { data } = useQuery({
    queryKey: ["suburbs-dropdown"],
    queryFn: getSuburbsDropdown,
    enabled: hasOpened,
    staleTime: Infinity,
  });

  const suburbs = data?.data || [];

  const options: Option[] = suburbs.map((item: any) => ({
    value: item.name,
    label: item.name,
  }));

  const loadOptions = async (inputValue: string): Promise<Option[]> => {
    if (!inputValue) return options;

    return options.filter((opt) =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={options}
      loadOptions={loadOptions}
      isClearable
      placeholder="Select Suburb"
      value={value ? { value, label: value } : null}
      onMenuOpen={() => setHasOpened(true)}
      onChange={(option: any) => {
        onChange(option?.value || "");
      }}
    />
  );
};

export default AsyncSuburbFormSelect;