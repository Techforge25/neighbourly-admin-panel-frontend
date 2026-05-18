"use client";

import { queryKeys } from "@/keys";
import { logout } from "@/services/auth";
import { SignOutModalProps, SignOutModalRef } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import {
  forwardRef,
  useImperativeHandle,
  useState,
  ForwardedRef,
} from "react";
import { LuLogOut, LuX } from "react-icons/lu";



const SignOutModal = forwardRef(
  (
    {
      title = "Sign Out?",
      description = "Are you sure you want to sign out? You will need to log back in to manage suburbs, recommendations, and sponsorships.",
      confirmLabel = "Sign Out",
      cancelLabel = "Cancel",
      onConfirm,
    }: SignOutModalProps,
    ref: ForwardedRef<SignOutModalRef>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { mutate, isPending } = useMutation({
      mutationFn: logout,

      onSuccess: () => {
        onConfirm?.();
        setIsOpen(false);
      },

      onError: (error: ApiError) => {
        console.error("Logout failed:", error);
      },
    });

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    const handleClose = () => setIsOpen(false);

    const handleConfirm = () => {
      mutate();
      setIsOpen(false);
    };

    return (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4"
        onClick={handleClose}
      >
        <div
          className="relative w-full max-w-[33.125rem] rounded-2xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close X */}
          <button
            onClick={handleClose}
            className="absolute cursor-pointer right-4 top-4 text-text-para transition hover:text-text-primary"
            aria-label="Close"
          >
            <LuX size={22} />
          </button>

          {/* Logout Icon — slate/gray circle to match image */}
          <div className="flex justify-center mb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bg-secondary">
              <LuLogOut size={22} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-manrope font-semibold text-[1.5rem] text-text-secondary mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-center font-manrope font-medium text-[1rem] text-text-para mb-7 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleClose}
              className="flex-1 cursor-pointer rounded-full border border-border-primary py-3 font-medium text-text-primary hover:bg-surface-muted-secondary transition"
            >
              {cancelLabel}
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-text-secondary py-3 hover:bg-text-secondary/90 transition"
            >
              <span className="font-poppins text-[1rem] font-medium text-surface">
                {confirmLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

SignOutModal.displayName = "SignOutModal";

export default SignOutModal;