// tableColumns.js

import { getColorThemeText } from "@/constants/constants";
import { SlEye } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline, IoEye } from "react-icons/io5";
import { CATEGORY_META } from "@/types";
import { LuPencil } from "react-icons/lu";
import moment from "moment";
import { RiDeleteBin5Line } from "react-icons/ri";
export const recommendationTableColumns = ({
  onDetailsClick,
  onApproveClick,
  onRejectClick,
}) => [
    {
      key: "businessName",
      title: "Tradie/Business Name",

      className: "max-w-[12rem] px-6 py-4 align-middle",

      render: (row) => (
        <>
          <p className="font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
            {row.personName}
          </p>

          <p className="text-text-para text-[0.875rem] font-normal">
            {row.businessName}
          </p>
        </>
      ),

      mobileRender: (row) => (
        <div>
          <p className="font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
            {row.personName}
          </p>

          <p className="text-text-para text-[0.875rem] font-normal">
            {row.businessName}
          </p>
        </div>
      ),
    },

    {
      key: "tradeCategory",
      title: "Trade Category",

      className: (row) =>
        `whitespace-nowrap font-manrope font-bold text-[1rem] px-6 py-4 capitalize ${getColorThemeText(
          row.tradeCategory,
        )}`,

      mobileRender: (row) => (
        <span
          className={`whitespace-nowrap font-manrope font-bold text-[1rem] px-6 py-4 capitalize ${getColorThemeText(
            row.tradeCategory,
          )}`}
        >
          {row.tradeCategory}
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
      key: "submissionDate",
      title: "Submission Date",
      className:
        "whitespace-nowrap px-6 py-4 font-poppins text-[0.875rem] text-text-para font-normal ",

      render: (row) => (
        <span
          className="
      font-poppins text-[0.875rem] text-text-para font-normal
      "
        >
          {moment(row.submissionDate).fromNow()}
        </span>
      ),

      mobileRender: (row) => (
        <span>
          <span className="font-poppins text-[0.875rem] text-text-para font-normal">
            Date ·
          </span>{" "}
          {moment(row.submissionDate).fromNow()}
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
            onClick={() => onApproveClick(row, 'approved')}
            className="p-[0.375rem] rounded-[0.25rem] bg-accent-success-light cursor-pointer"
          >
            <FaCheck size={20} className="text-text-success" />
          </button>
          <button
            type="button"
            onClick={() => onRejectClick(row, 'rejected')}
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
            onClick={() => onApproveClick(row, 'approved')}
            className="p-[0.375rem] rounded-[0.25rem] bg-accent-success-light cursor-pointer"
          >
            <FaCheck size={20} className="text-text-success" />
          </button>
          <button
            type="button"
            onClick={() => onRejectClick(row, 'rejected')}
            className="p-[0.375rem] rounded-[0.25rem] bg-accent-danger/3 cursor-pointer"
          >
            <IoCloseOutline size={20} className="text-accent-danger " />
          </button>
        </div>
      ),
    },
  ];


export const getSponsorshipColumns = (
  { onEdit, onDelete }
) => [
    {
      key: "personName",
      header: "Sponsor Name",
      render: (row) => (
        <span className="font-semibold text-text-primary">{row.personName}</span>
      ),
    },
    {
      key: "businessName",
      header: "Business Name",
      render: (row) => (
        <span className="text-text-para">{row.businessName}</span>
      ),
    },
    {
      key: "serviceType",
      header: "Service Type",
      render: (row) => {
        const meta = CATEGORY_META[row.serviceType];
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
        <span className="inline-block rounded-full border border-border-secondary px-4 py-1 text-xs text-text-para">
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
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-text-para hover:bg-surface-muted"
            aria-label="Edit"
          >
            <LuPencil size={15} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(row)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-red-500 hover:bg-surface-muted"
            aria-label="Delete"
          >
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];



  export const getClusterManagementColumns = ({ onEdit, onDelete }) => [
    {
      key: "name",
      header: "Cluster",
      render: (row) => (
        <span className="font-semibold text-text-primary">{row.name}</span>
      ),
    },
    {
      key: "suburbs",
      header: "Suburbs",
      render: (row) => (
        <div className="flex flex-wrap gap-2">
          {row.suburbs?.length > 0 ? (
            row.suburbs.map((suburb, index) => (
              <span
                key={index}
                className="inline-block rounded-full border border-border-secondary px-4 py-1 text-xs text-text-para"
              >
                {suburb}
              </span>
            ))
          ) : (
            <span className="inline-block rounded-full border border-border-secondary px-4 py-1 text-xs text-text-para">
              Not Assigned
            </span>
          )}
        </div>
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
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-text-para hover:bg-surface-muted"
            aria-label="Edit"
          >
            <LuPencil size={15} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(row)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-red-500 hover:bg-surface-muted"
            aria-label="Delete"
          >
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  export const getSuburbManagementColumns = ({ onEdit, onDelete }) => [
    {
      key: "name",
      header: "Suburb",
      render: (row) => (
        <span className="font-semibold text-text-primary">
          {row.name}
         
        </span>
      ),
    },
    {
      key: "assignedCluster",
      header: "Cluster Assigned",
      render: (row) => (
       <span className="font-semibold text-text-primary">
          {row.assignedCluster}
        
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
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-text-para hover:bg-surface-muted"
            aria-label="Edit"
          >
            <LuPencil size={15} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(row)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border-secondary text-red-500 hover:bg-surface-muted"
            aria-label="Delete"
          >
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];
  