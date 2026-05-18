import { FormFieldsProps } from "@/types";
import TextInput from "../fields/TextInput";
import PhoneInput from "../fields/PhoneInput";
import SelectInput from "../fields/SelectInput";
import RadioPillGroup from "../fields/RadioPillGroup";
import FileUpload from "../fields/FileUpload";

export default function FormField({
  field,
  values,
  onChange,
  error,
}: FormFieldsProps & { error?: string }) {
  const value = values?.[field.name];

  switch (field.type) {
    case "text":
      return (
        <TextInput
          label={field.label}
          name={field.name}
          value={(value as string) ?? ""}
          placeholder={field.placeholder}
          required={field.required}
          error={error}
          onChange={(v) => onChange(field.name, v)}
        />
      );

    case "phone":
      return (
        <PhoneInput
          label={field.label}
          name={field.name}
          value={(value as string) ?? ""}
          placeholder={field.placeholder}
          required={field.required}
          error={error}
          onChange={(v) => onChange(field.name, v)}
        />
      );

    case "select":
      return (
        <SelectInput
          label={field.label}
          name={field.name}
          value={(value as string) ?? ""}
          placeholder={field.placeholder}
          required={field.required}
          options={field.options}
          error={error}
          onChange={(v) => onChange(field.name, v)}
        />
      );

    case "radio-pill":
      return (
        <RadioPillGroup
          label={field.label}
          name={field.name}
          value={(value as string) ?? ""}
          required={field.required}
          options={field.options}
          error={error}
          onChange={(v) => onChange(field.name, v)}
        />
      );

    case "file-upload":
      return (
        <FileUpload
          label={field.label}
          name={field.name}
          value={(value as File) ?? null}
          accept={field.accept}
          hint={field.hint}
          error={error}
          onChange={(file) => onChange(field.name, file)}
        />
      );

    default:
      return null;
  }
}