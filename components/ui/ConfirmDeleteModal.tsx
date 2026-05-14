import { ConfirmDeleteModalProps, ConfirmDeleteModalRef } from "@/types";
import { forwardRef, useImperativeHandle, useState, ForwardedRef } from "react";
import { LuTrash2, LuX } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
const ConfirmDeleteModal = forwardRef(
  (
    { onConfirm }: ConfirmDeleteModalProps,
    ref: ForwardedRef<ConfirmDeleteModalRef>,
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    const handleClose = () => setIsOpen(false);

    const handleConfirm = () => {
      onConfirm?.();
      setIsOpen(false);
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
        onClick={handleClose}
      >
        <div
          className="relative w-full max-w-[33.125rem] rounded-2xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close X */}
          <button
            onClick={handleClose}
            className="absolute cursor-pointer right-4 top-4 text-text-para transition"
            aria-label="Close"
          >
            <LuX size={22} />
          </button>

          {/* Warning Icon */}
          <div className="flex justify-center mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-primary">
              <FiAlertTriangle
                size={18}
                className="text-white"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-manrope font-semibold text-[1.5rem] text-text-secondary  mb-3">
            Delete Active Sponsor?
          </h2>

          {/* Description */}
          <p className="text-center font-manrope font-medium text-[1rem] text-text-para  mb-4">
            Are you sure you want to delete this sponsorship? This will
            immediately remove Sally from the "Mortgage Broker" category in
            Bondicastle Finance.
          </p>

          <p className="text-center font-semibold text-[1.125rem] text-text-dark-primary mb-7">
            This action cannot be undone.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 cursor-pointer rounded-full border border-border-primary py-3 font-medium text-text-primary hover:bg-surface-muted-secondary transition"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-bg-primary py-3 hover:bg-bg-primary/90 transition"
            >
              <span className="font-poppins text-[1rem] font-medium text-surface ">Delete sponsorship</span>
              <LuTrash2 size={18} className="text-surface" />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

ConfirmDeleteModal.displayName = "ConfirmDeleteModal";

export default ConfirmDeleteModal;
