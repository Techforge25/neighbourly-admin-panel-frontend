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

export type FilterBarProps = {
  search: string;
  setSearch: (value: string) => void;

  selectedCategory: string;
  setSelectedCategory: (value: string) => void;

  selectedSuburb: string;
  setSelectedSuburb: (value: string) => void; // ✅ FIX: was setSelesectedSuburb
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export interface Recommendation {
  id: string;
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
  "mortgage-broker": { label: "Mortgage Broker", color: "#FE9A86" },
  "real-estate-agent": { label: "Real Estate Agent", color: "#718496" },
  conveyancer: { label: "Conveyancer", color: "#8FA58A" },
};

export type PasswordInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export type FilterPillSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  menuWidth?: string;
};

export interface ConfirmDeleteModalProps<T = unknown> {
  data: T | null;
  title?: string;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  warningText?: string;
  onConfirm: (data: T) => void;
}

export interface ConfirmDeleteModalRef {
  open: () => void;
  close: () => void;
}


export interface SignOutModalProps {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;

  // Action
  onConfirm: () => void;
}

export interface SignOutModalRef {
  open: () => void;
  close: () => void;
}
export type AppState = {
  sidebarOpen: boolean;
  user: { id: string; name: string } | null;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setUser: (user: AppState["user"]) => void;
  reset: () => void;
};
