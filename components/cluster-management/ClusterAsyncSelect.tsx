import React, { useMemo } from "react";
import AsyncSelect from "react-select/async";

interface OptionType {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onOpen?: () => void;
  options: OptionType[];
}

const ClusterAsyncSelect: React.FC<Props> = ({
  value,
  onChange,
  error,
  onOpen,
  options,
}) => {

     
const selectedValue = useMemo(() => {
  return options.find((option) => option.value === value) ?? null;
}, [options, value]);

  const loadOptions = (inputValue: string) => {
    return Promise.resolve(
      options.filter((o) =>
        o.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      <AsyncSelect
        key={value}
        cacheOptions
        defaultOptions={options}
        loadOptions={loadOptions}
        value={selectedValue}
        onChange={(opt: OptionType | null) =>
          onChange(opt ? opt.value : "")
        }
        onMenuOpen={onOpen}
        placeholder="Assign Cluster"
        styles={{
          control: (base) => ({
            ...base,
            borderColor: error ? "#ef4444" : "#E5E7EB",
            borderRadius: "10px",
            padding: "2px",
          }),
        }}
      />

      {error && (
        <p className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default ClusterAsyncSelect;