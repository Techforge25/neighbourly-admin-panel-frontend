"use client";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LuPlus } from "react-icons/lu";
import Pagination from "../recommendation/Pagination";
import AddSuburbManagementModal from "./AddSuburbManagementModal";
import DeleteSuburbManagementModal from "./DeleteSuburbManagementModal";

import { queryKeys } from "@/keys";
import SuburbManagementTable from "./SuburbManagementTable";
import { deleteSuburb, getSuburbs } from "@/services/suburbsManagement";
import { SuburbRecord } from "@/types";



export default function SuburbManagementListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSuburbData, setEditSuburbData] = useState<SuburbRecord | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [suburbToDelete, setSuburbToDelete] = useState<string | null>(null);  


  const { data: clusterResponse, isPending, isLoading } = useQuery({
    queryKey: [queryKeys.suburb, currentPage], 
    queryFn: () => getSuburbs(currentPage),
  });

 
  const clusters = clusterResponse?.data?.docs || [];
  const totalPages = clusterResponse?.data?.totalPages || 1;

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
  mutationFn: deleteSuburb,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: [queryKeys.suburb] });
     queryClient.invalidateQueries({
            queryKey: [queryKeys.cluster],
          });
    setIsDeleteModalOpen(false);
    setSuburbToDelete(null);
  },
});


  const handleOpenModal = () => {
    setEditSuburbData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditSuburbData(null);
  };

  const handleEdit = (row: SuburbRecord) => {

    setEditSuburbData(row);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (row: SuburbRecord) => {
    setSuburbToDelete(row._id);
    setIsDeleteModalOpen(true);
     setEditSuburbData(row?.name ? row : null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSuburbToDelete(null);
  };

const handleConfirmDelete = () => {
    if (suburbToDelete) {
       deleteMutate(suburbToDelete);
    }
 
};


useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);

  return (
    <div className="min-h-screen px-6 py-2">
      <div className="">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-text-primary">
              Suburb Management
            </h1>
            <p className="mt-3 text-sm text-text-para">
              Manage suburb 
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleOpenModal}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-bg-primary px-5 py-2.5 text-sm font-medium text-surface hover:bg-bg-primary/90 transition"
            >
              Add Suburb <LuPlus size={16} />
            </button>
          </div>
        </div>

        <SuburbManagementTable
          data={clusters}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          isLoading={isLoading || isPending}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}

        <AddSuburbManagementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
           editData={editSuburbData && editSuburbData}
        />

        <DeleteSuburbManagementModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
          name={editSuburbData}
          isLoading={isDeleting}
        />
      </div>
    </div>
  );
}