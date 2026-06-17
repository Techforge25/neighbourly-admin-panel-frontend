import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCluster, editCluster } from "@/services/clustersManagement";
import { queryKeys } from "@/keys";
import { clusterSchema } from "@/validations/clusterManagement";
import { RxCross1 } from "react-icons/rx";
import { ClusterRecord } from "@/types";

interface AddClusterManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  editData?: ClusterRecord;
  clusterId?: string;
}

interface IFormInput {
  clusterName: string;
}

const AddClusterManagementModal: React.FC<AddClusterManagementModalProps> = ({
  isOpen,
  onClose,
  editData,
}) => {
  const isEditing = !!editData;
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(clusterSchema),
    defaultValues: {
      clusterName: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IFormInput) => {
      if (isEditing) {
        return editCluster(editData._id, {
          name: data.clusterName,
        });
      }

      return createCluster({
        name: data.clusterName,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.cluster],
      });

      reset();
      onClose();
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (editData) {
        setValue("clusterName", editData.name || "");
      } else {
        reset();
      }
    }
  }, [isOpen, editData, setValue, reset]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };
  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/40 p-4 font-sans">
      <div className="w-full max-w-[620px] bg-white rounded-[12px] p-8 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-[22px] font-semibold text-[#111827]">
            {isEditing ? "Edit Cluster" : "Add New Cluster"}
          </h2>
          <button
            onClick={handleClose}
            className="mt-1 text-[#6B7280] hover:text-[#111827] transition-colors cusror-pointer"
            aria-label="Close modal"
          >
           <RxCross1  className="text-black"/>
          </button>
        </div>

        <p className="mt-3 text-[14px] text-[#4B5563]">
          Group related suburbs together for easier administration and localized
          reporting.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
          <div>
            <label
              htmlFor="clusterName"
              className="block text-[14px] font-medium text-[#374151] mb-2.5"
            >
              Cluster Name
            </label>
            <input
              type="text"
              id="clusterName"
              placeholder="e.g. Cluster"
              {...register("clusterName")}
              className={`w-full px-4 py-3.5 text-[15px] bg-white border ${
                errors.clusterName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#E5E7EB] focus:border-[#D1D5DB] focus:ring-[#D1D5DB]"
              } rounded-[10px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 transition-all`}
            />
            {errors.clusterName && (
              <p className="mt-1.5 text-[13px] text-red-500">
                {errors.clusterName.message}
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-col gap-3.5">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 bg-[#FF9A8A] hover:bg-[#FF8F7D] text-white text-[15px] font-medium rounded-full transition-colors disabled:opacity-50"
            >
              {isPending
                ? "Creating..."
                : isEditing
                  ? "Save changes"
                  : "Create cluster"}
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-3.5 bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827] text-[15px] font-medium rounded-full transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClusterManagementModal;
