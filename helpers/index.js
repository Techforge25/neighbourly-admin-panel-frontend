// tableColumns.js

import { getColorThemeText } from "@/constants/constants";
import { SlEye } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { CATEGORY_META } from "@/types";
import { LuPencil, LuTrash2 } from "react-icons/lu";
export const recommendationTableColumns = ({
  onDetailsClick,
  onApproveClick,
  onRejectClick,
}) => [
  {
    key: "tradieInfo",
    title: "Tradie/Business Name",

    className: "max-w-[12rem] px-6 py-4 align-middle",

    render: (row) => (
      <>
        <p className="font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
          {row.tradie}
        </p>

        <p className="text-text-para text-[0.875rem] font-normal">
          {row.business}
        </p>
      </>
    ),

    mobileRender: (row) => (
      <div>
        <p className="font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
          {row.tradie}
        </p>

        <p className="text-text-para text-[0.875rem] font-normal">
          {row.business}
        </p>
      </div>
    ),
  },

  {
    key: "trade",
    title: "Trade Category",

    className: (row) =>
      `whitespace-nowrap font-manrope font-bold text-[1rem] px-6 py-4 capitalize ${getColorThemeText(
        row.trade,
      )}`,

    mobileRender: (row) => (
      <span
        className={`whitespace-nowrap font-manrope font-bold text-[1rem] px-6 py-4 capitalize ${getColorThemeText(
          row.trade,
        )}`}
      >
        {row.trade}
      </span>
    ),
  },

  {
    key: "suburb",
    title: "Suburb",

    className: "px-6 py-4",

    render: (row) => (
      <span
        className="
        inline-flex
        items-center
        rounded-full
        border
        border-text-text-para
        px-[0.6875rem]
        py-[0.3125rem]
        text-[0.75rem]
        font-normal
        capitalize
        text-text-para
        bg-surface-light
      "
      >
        {row.suburb}
      </span>
    ),

    mobileRender: (row) => (
      <span
        className="
        inline-flex
        items-center
        rounded-full
        border
        border-text-text-para
        px-[0.6875rem]
        py-[0.3125rem]
        text-[0.75rem]
        font-normal
        capitalize
        text-text-para
        bg-surface-light
      "
      >
        {row.suburb}
      </span>
    ),
  },

  {
    key: "submitted",
    title: "Submission Date",
    className:
      "whitespace-nowrap px-6 py-4 font-poppins text-[0.875rem] text-text-para font-normal ",

    mobileRender: (row) => (
      <span>
        <span className="font-poppins text-[0.875rem] text-text-para font-normal">
          Date ·
        </span>{" "}
        {row.submitted}
      </span>
    ),
  },

  {
    key: "trustPoints",
    title: "Trust Points",

    className:
      "max-w-[14rem] px-6 py-4 leading-relaxed font-poppins text-[0.875rem] text-text-para font-normal   ",

    mobileRender: (row) => (
      <p className="leading-relaxed font-poppins text-[0.875rem] text-text-para font-normal">
        {row.trustPoints}
      </p>
    ),
  },

  {
    key: "actions",
    title: "Action",

    className: "whitespace-nowrap px-6 py-4",

    render: (row) => (
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onDetailsClick(row)}
          className="bg-surface-light p-[0.375rem] rounded-[0.25rem] cursor-pointer"
        >
          <SlEye size={20} className="text-text-para" />
        </button>

        <button
          type="button"
          onClick={() => onApproveClick(row)}
          className="p-[0.375rem] rounded-[0.25rem] bg-accent-success-light cursor-pointer"
        >
          <FaCheck size={20} className="text-text-success" />
        </button>
        <button
          type="button"
          onClick={() => onRejectClick(row)}
          className="p-[0.375rem] rounded-[0.25rem] bg-accent-danger/3 cursor-pointer"
        >
          <IoCloseOutline size={20} className="text-accent-danger " />
        </button>
      </div>
    ),

    mobileRender: (row) => (
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={() => onDetailsClick(row)}
          className="bg-surface-light p-[0.375rem] rounded-[0.25rem] cursor-pointer"
        >
          <SlEye size={20} className="text-text-para" />
        </button>

        <button
          type="button"
          onClick={() => onApproveClick(row)}
          className="p-[0.375rem] rounded-[0.25rem] bg-accent-success-light cursor-pointer"
        >
          <FaCheck size={20} className="text-text-success" />
        </button>
        <button
          type="button"
          onClick={() => onRejectClick(row)}
          className="p-[0.375rem] rounded-[0.25rem] bg-accent-danger/3 cursor-pointer"
        >
          <IoCloseOutline size={20} className="text-accent-danger " />
        </button>
      </div>
    ),
  },
];

export const Sponsorshipcolumns = [
  {
    key: "sponsorName",
    header: "Sponsor Name",
    render: (row) => (
      <span className="font-semibold text-gray-900">{row.sponsorName}</span>
    ),
  },
  {
    key: "businessName",
    header: "Business Name",
    render: (row) => <span className="text-gray-600">{row.businessName}</span>,
  },
  {
    key: "category",
    header: "Category",
    render: (row) => {
      const meta = CATEGORY_META[row.category];
      return (
        <span className="font-medium" style={{ color: meta.color }}>
          {meta.label}
        </span>
      );
    },
  },
  {
    key: "suburb",
    header: "Suburb",
    render: (row) => (
      <span className="inline-block rounded-full border border-gray-200 px-4 py-1 text-xs text-gray-700">
        {row.suburb}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    width: "100px",
    render: (row) => (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(row)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
          aria-label="Edit"
        >
          <LuPencil size={15} />
        </button>
        <button
          type="button"
          onClick={() => onDelete(row)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-red-500 hover:bg-red-50"
          aria-label="Delete"
        >
          <LuTrash2 size={16} />
        </button>
      </div>
    ),
  },
];
