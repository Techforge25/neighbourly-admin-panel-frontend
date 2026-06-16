import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
interface DeleteClusterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  clusterData: any;
  isLoading?: boolean;
}

const DeleteClusterModal: React.FC<DeleteClusterModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  clusterData,
  isLoading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/40 p-4 font-sans">
      <div className="w-full max-w-[480px] bg-white rounded-[16px] p-8 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#9CA3AF] hover:text-[#111827] transition-colors"
          aria-label="Close modal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M1 1L13 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center mt-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 mb-5">
            <RiDeleteBin5Line size={24} />
          </div>

          <h2 className="text-[22px] font-semibold text-[#111827] text-center mb-3">
            Delete Cluster?
          </h2>

          <p className="text-[14px] text-[#6B7280] text-center leading-relaxed mb-8 px-2">
            Are you sure you want to delete{" "}
            <span className="font-medium text-[#374151]">
              {clusterData?.name || "this cluster"}
             
            </span>
            ? This action will unassign all suburbs associated with this group.
            This action cannot be undone.
          </p>

          <div className="flex flex-col w-full gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827] text-[15px] font-medium rounded-full transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#FF9A8A] hover:bg-[#FF8F7D] text-white text-[15px] font-medium rounded-full transition-colors"
            >
              {isLoading ? "Deleting..." : "Delete Cluster"} 
              <RiDeleteBin5Line size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteClusterModal;
