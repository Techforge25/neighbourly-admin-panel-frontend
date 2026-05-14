import { ReactNode } from "react";

export type AdminShellProps = {
  headerTitle: string;
  headerDate: string;
  userName?: string;
  userRole?: string;
  children: React.ReactNode;
};

export interface TableColumn<T> {
  key: keyof T | string;
  title: string;

  className?: string | ((row: T) => string);

  render?: (row: T) => ReactNode;

  mobileRender?: (row: T) => ReactNode;
}

export interface RecommendationTableColumnsProps {
  onDetailsClick: (row: RecommendationRow) => void;

  onApproveClick: (row: RecommendationRow) => void;
  onRejectClick: (row: RecommendationRow) => void;
}

export interface RecommendationRow {
  tradie: string;
  business: string;
  trade: string;
  suburb: string;
  submitted: string;
  trustPoints: string;
  id: string;
}

export interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];

  total?: number;
  currentPage?: number;
  pageSize?: number;

  onNext?: () => void;
  onPrevious?: () => void;
}

export interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedSuburb: string;
  setSelesectedSuburb: (value: string) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export interface Recommendation {
  id: number;
  name: string;
  company: string;
  category: string;
  categoryColor: string;
  trustedIn: string;
  trustPoints: string[];
  recommendations: number;
}

export interface ReviewCardProps {
  name: string;
  category?: string;
  location?: string;
  email?: string;
  phone?: string;
  address?: string;
  date?: string;
  review: string;
  tags: string[];
}

export interface BackPageProps {
  tradie: string;
  trade: string;
  business: string;
}

export type ConfirmDeleteModalRef = {
  open: () => void;
  close: () => void;
};

export type ConfirmDeleteModalProps = {
  onConfirm?: () => void;
};

export type FieldType =
  | "text"
  | "select"
  | "radio-pill"
  | "file-upload"
  | "phone";

interface BaseField {
  name: string;
  label: string;
  required?: boolean;
}

export interface TextFieldConfig extends BaseField {
  type: "text";
  placeholder?: string;
}

export interface PhoneFieldConfig extends BaseField {
  type: "phone";
  placeholder?: string;
}

export interface SelectFieldConfig extends BaseField {
  type: "select";
  placeholder?: string;
  options: string[];
}

export interface RadioPillFieldConfig extends BaseField {
  type: "radio-pill";
  options: { label: string; value: string }[];
}

export interface FileUploadFieldConfig extends BaseField {
  type: "file-upload";
  accept?: string;
  hint?: string;
}

export type FormFieldConfig =
  | TextFieldConfig
  | PhoneFieldConfig
  | SelectFieldConfig
  | RadioPillFieldConfig
  | FileUploadFieldConfig;

export type FormValues = Record<string, string | File | null>;

export type TextInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export type SelectInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  options: string[];
  onChange: (value: string) => void;
};

export type RadioPillGroupProps = {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

export type FileUploadProps = {
  label: string;
  name: string;
  value: File | null;
  accept?: string;
  hint?: string;
  onChange: (file: File | null) => void;
};

export type PhoneInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export type FormFieldsProps = {
  field: FormFieldConfig;
  values: FormValues;
  onChange: (name: string, value: string | File | null) => void;
};

export type formFieldsConfigType = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
};

export type SponsorCategory =
  | "mortgage-broker"
  | "real-estate-agent"
  | "conveyancer";

export interface Sponsorship {
  id: string;
  sponsorName: string;
  businessName: string;
  category: SponsorCategory;
  suburb: string;
}

export const CATEGORY_META: Record<
  SponsorCategory,
  { label: string; color: string }
> = {
  "mortgage-broker": { label: "Mortgage Broker", color: "#F58D7E" },
  "real-estate-agent": { label: "Real Estate Agent", color: "#3B82F6" },
  conveyancer: { label: "Conveyancer", color: "#10B981" },
};

export type PasswordInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};