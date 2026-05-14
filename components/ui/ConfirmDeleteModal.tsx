"use client";

import {
  forwardRef,
  useImperativeHandle,
  useState,
  ForwardedRef,
  ReactNode,
} from "react";
import { LuTrash2, LuX } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { ConfirmDeleteModalProps, ConfirmDeleteModalRef } from "@/types";

// Generic component to support any data type
function ConfirmDeleteModalInner<T>(
  {
    data,
    title = "Delete Item?",
    description = "Are you sure you want to delete this item?",
    confirmLabel = "Delete",
    cancelLabel = "Cancel",
    warningText = "This action cannot be undone.",
    onConfirm,
  }: ConfirmDeleteModalProps<T>,
  ref: ForwardedRef<ConfirmDeleteModalRef>
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    if (data) onConfirm(data);
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

        {/* Title — dynamic */}
        <h2 className="text-center font-manrope font-semibold text-[1.5rem] text-text-secondary mb-3">
          {title}
        </h2>

        {/* Description — dynamic, can be string or JSX */}
        <div className="text-center font-manrope font-medium text-[1rem] text-text-para mb-4">
          {description}
        </div>

        {/* Warning text — dynamic */}
        {warningText && (
          <p className="text-center font-semibold text-[1.125rem] text-text-dark-primary mb-7">
            {warningText}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 cursor-pointer rounded-full border border-border-primary py-3 font-medium text-text-primary hover:bg-surface-muted-secondary transition"
          >
            {cancelLabel}
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-bg-primary py-3 hover:bg-bg-primary/90 transition"
          >
            <span className="font-poppins text-[1rem] font-medium text-surface">
              {confirmLabel}
            </span>
            <LuTrash2 size={18} className="text-surface" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ⚠️ forwardRef + generics needs this casting trick in TypeScript
const ConfirmDeleteModal = forwardRef(ConfirmDeleteModalInner) as <T>(
  props: ConfirmDeleteModalProps<T> & {
    ref?: ForwardedRef<ConfirmDeleteModalRef>;
  }
) => ReturnType<typeof ConfirmDeleteModalInner>;

export default ConfirmDeleteModal;