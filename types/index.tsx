import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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
  _id: string;
  tradie: string;
  business: string;
  trade: string;
  suburb: string;
  submitted: string;
  trustPoints: string;
  businessName: string;
  personName: string;
  id: string;
}

export interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
  total?: number;
  totalPages?: number | undefined;
  currentPage?: number;
  isLoading?: boolean;
  search: string;
  setSearch: any;
  selectedSuburb: string;
  setSelectedSuburb: any;
  selectedCategory: string;
  setSelectedCategory: any;
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
  _id: string;
  businessName: string;
  personName: string;
  totalRecommendations: number;
  tradeCategory: string;
  trustPoints: string[];
  trustedIn: string[]
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
  contact: string;
   page?: string;
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
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
  error: boolean;
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

export type LoginForm = {
  username: string;
  password: string;
}

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

export interface Sponsorship {
  _id: string;
  sponsorName: string;
  businessName: string;
  serviceType: string;
  suburb: string;
}

export const CATEGORY_META: Record<
  string,
  { label: string; color: string }
> = {
  "Mortgage Broker": { label: "Mortgage Broker", color: "#FE9A86" },
  "Real Estate Agent": { label: "Real Estate Agent", color: "#718496" },
  'Advisor': { label: "Advisor", color: "#8FA58A" },
};

export type PasswordInputProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
};

export type FilterPillSelectProps = {
  type: "trade" | "suburb";
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
  openSponsorShip: boolean;

  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setUser: (user: AppState["user"]) => void;

  setOpenEditPage: (open: boolean) => void;

  reset: () => void;
};

export type DashboardStats = {
  totalPendingRecommendations: number;
  totalSponsors: number;
  totalRecommendations: number;
}

export type RecommendationRecords = {
  userId: {
    address: string
  },
  businessId: {
    "_id": string,
    businessName: string
  },
  reasonsOfRecommendation: string[]
}

export type TopRecommenders = {
  businessName: string;
  personName: string;
  recommendationCount: number;
  serviceType: string;
}
// helpers/getNextPage.ts

type PaginationResponse = {
  currentPage: number;
  totalPages: number;
};

// helpers/getNextPage.ts

// helpers/getNextPage.ts

type PaginatedResponse = {
  data: {
    page: number;
    totalPages: number;
    hasNextPage: boolean;
    nextPage: number | null;
  };
};

export const getNextPage = (
  lastPage: PaginatedResponse
): number | undefined => {
  if (lastPage?.data?.hasNextPage) {
    return lastPage.data.nextPage ?? undefined;
  }

  return undefined;
};

export type RecommendationsBusiness = {
  recommendationId?: string;
  comment: string;
  createdAt: string;
  reasonsOfRecommendation: string[];
  user: {
    email: string;
    address: string;
    fullName: string;
    contact: string;
  }
}

export type CreateSponsor = {
  logo: string,
  personName: string,
  businessName: string,
  serviceType?: string,
  contact: string,
  suburb?: string;
}

export type Error = {
  message: string;
  statusCode: Number;
  success: boolean;
}

export type TypeExportButtons = {
  type: string,
  btnText: string,
  exportOptionsText: string,
  downloadButton: string
}
export type Cluster = {
  name: string;
  description?: string | "";
  _id: string;
  label: string;
};
export type CreateCluster = {
  name: string;
  description?: string | "";
};

export type UpdateCluster = {
  name: string;
  description?: string | "";
};

export type Suburb = {
  clusterId: string;
  name: string;
  description?: string;
  _id: string;
};

export type CreateSuburb = {
  clusterId: string;
  name: string;
  description?: string;
};

export type UpdateSuburb = {
  clusterId: string;
  name: string;
  description?: string;
};

export interface ClusterRecord {
  name: string; 
  suburbs: string[],
  _id: string
}

export interface SuburbRecord {
  name: string;
  clusterId: string;
  _id: string
  assignedCluster: string;
}

export interface ClusterDropdownRecord {
  name: string;
  _id: string
}
