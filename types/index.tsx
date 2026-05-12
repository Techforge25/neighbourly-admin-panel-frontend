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

  className?:
    | string
    | ((row: T) => string);

  render?: (row: T) => ReactNode;

  mobileRender?: (row: T) => ReactNode;
}

export interface RecommendationTableColumnsProps {
  onDetailsClick: (
    row: RecommendationRow
  ) => void;

  onApproveClick: (
    row: RecommendationRow
  ) => void;
}

export interface RecommendationRow {
  tradie: string;
  business: string;
  trade: string;
  suburb: string;
  submitted: string;
  trustPoints: string;
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
  selectedSuburb:string;
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
