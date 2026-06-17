import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/keys";

import { RxCross1 } from "react-icons/rx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { createSuburb, editSuburb } from "@/services/suburbsManagement";
import { suburbSchema } from "@/validations/suburbManagement";
import { getClusters } from "@/services/clustersManagement";
import { ClusterRecord, SuburbRecord } from "@/types";

interface AddSuburbManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  editData?: SuburbRecord;
  suburbId?: string;
}

interface IFormInput {
  suburbName: string;
  assignedCluster: string;
}

const AddSuburbManagementModal: React.FC<AddSuburbManagementModalProps> = ({
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
    resolver: zodResolver(suburbSchema),
    defaultValues: {
      suburbName: "",
      assignedCluster: "",
    },
  });

  const { data: clusterResponse, isPending: isClusterPending, isLoading } = useQuery({
    queryKey: [queryKeys.cluster,], 
    queryFn: () => getClusters(),
  });

 const { mutate, isPending } = useMutation({
  mutationFn: async (data: IFormInput) => {
    if (isEditing) {
      return editSuburb(editData._id, {
        name: data.suburbName,
        clusterId: data.assignedCluster,
      });
    }

    return createSuburb({
      name: data.suburbName,
      clusterId: data.assignedCluster, 
    });
  },
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.suburb],
    });
     queryClient.invalidateQueries({
      queryKey: [queryKeys.cluster],
    });

    
    reset();
    onClose();
  },
});


 const onSubmit: SubmitHandler<IFormInput> = (data) => {
  mutate(data);
};
  const handleClose = () => {
    reset();
    onClose();
  };

  const clusters = clusterResponse?.data?.docs || [];

  
useEffect(() => {
  if (!isOpen) return;

  if (editData && clusters.length) {
    const selectedCluster = clusters.find(
      (cluster: ClusterRecord) => cluster.name === editData.assignedCluster
    );

    reset({
      suburbName: editData.name || "",
      assignedCluster: selectedCluster?._id || "",
    });
  } else {
    reset({
      suburbName: "",
      assignedCluster: "",
    });
  }
}, [isOpen, editData, clusters, reset]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/40 p-4 font-sans">
      <div className="w-full max-w-[620px] bg-white rounded-[12px] p-8 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-[22px] font-semibold text-[#111827]">
            {isEditing ? "Edit Suburb" : "Add New Suburb"}
          </h2>
          <button
            onClick={handleClose}
            className="mt-1 text-[#6B7280] hover:text-[#111827] transition-colors"
            aria-label="Close modal"
          >
            <RxCross1 className="text-black" />
          </button>
        </div>

        <p className="mt-3 text-[14px] text-[#4B5563]">
          Define a new geographic area for localized community management.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
          <div>
            <label
              htmlFor="suburbName"
              className="block text-[14px] font-medium text-[#374151] mb-2.5"
            >
              Suburb name
            </label>
            <input
              type="text"
              id="suburbName"
              placeholder="e.g. Northern Beaches"
              {...register("suburbName")}
              className={`w-full px-4 py-3.5 text-[15px] bg-white border ${
                errors.suburbName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#E5E7EB] focus:border-[#D1D5DB] focus:ring-[#D1D5DB]"
              } rounded-[10px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 transition-all`}
            />

            {errors.suburbName && (
              <p className="mt-1.5 text-[13px] text-red-500">
                {errors.suburbName.message}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label
              htmlFor="assignedCluster"
              className="block text-[14px] font-medium text-[#374151] mb-2.5"
            >
              Assign Cluster
            </label>
            <div className="relative">
              <select
                id="assignedCluster"
                defaultValue=""
                {...register("assignedCluster")}
                className={`appearance-none w-full px-4 py-3.5 text-[15px] bg-white border ${
                  errors.assignedCluster
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#E5E7EB] focus:border-[#D1D5DB] focus:ring-[#D1D5DB]"
                } rounded-[10px] text-[#111827] focus:outline-none focus:ring-1 transition-all cursor-pointer`}
              >
                <option value="" disabled>
                  Select Cluster
                </option>

                {clusters.map((cluster: ClusterRecord) => (
                  <option key={cluster._id} value={cluster._id}>
                    {cluster.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 rotate-90 right-0 flex items-center px-4 text-[#6B7280]">
                <MdOutlineNavigateNext />
              </div>
            </div>

            {errors.assignedCluster && (
              <p className="mt-1.5 text-[13px] text-red-500">
                {errors.assignedCluster.message}
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3.5">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 bg-[#FF9A8A] hover:bg-[#FF8F7D] text-white text-[15px] font-medium rounded-full transition-colors disabled:opacity-50"
            >
              {isPending
                ? isEditing
                  ? "Updating..."
                  : "Creating..."
                : isEditing
                  ? "Save Changes"
                  : "Add Suburb"}
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

export default AddSuburbManagementModal;