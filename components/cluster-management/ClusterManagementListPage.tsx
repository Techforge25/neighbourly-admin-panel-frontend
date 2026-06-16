"use client";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LuPlus } from "react-icons/lu";
import Pagination from "../recommendation/Pagination";
import AddClusterManagementModal from "./AddClusterManagementModal";
import DeleteClusterModal from "./DeleteClusterModal";
import { deleteCluster, getClusters } from "@/services/clustersManagement";
import { queryKeys } from "@/keys";
import ClusterManagementTable from "./ClusterManagementTable";



export default function ClusterManagementListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editClusterData, setEditClusterData] = useState<any>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clusterToDelete, setClusterToDelete] = useState<any>(null);


  const { data: clusterResponse, isPending, isLoading } = useQuery({
    queryKey: [queryKeys.cluster, currentPage], 
    queryFn: () => getClusters(currentPage),
  });

 
  const clusters = clusterResponse?.data?.docs || [];
  const totalPages = clusterResponse?.data?.totalPages || 1;

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
  mutationFn: deleteCluster,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: [queryKeys.cluster] });
    setIsDeleteModalOpen(false);
    setClusterToDelete(null);
  },
});


  const handleOpenModal = () => {
    setEditClusterData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditClusterData(null);
  };

  const handleEdit = (row: any) => {

    setEditClusterData(row.originalData || row);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setClusterToDelete(row.originalData || row);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setClusterToDelete(null);
  };

const handleConfirmDelete = () => {
  if (!clusterToDelete?._id) return;
  deleteMutate(clusterToDelete._id);
};

  return (
    <div className="min-h-screen px-6 py-2">
      <div className="">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-text-primary">
              Cluster Management
            </h1>
            <p className="mt-3 text-sm text-text-para">
              Manage cluster and suburb visibility.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleOpenModal}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-bg-primary px-5 py-2.5 text-sm font-medium text-surface hover:bg-bg-primary/90 transition"
            >
              Add Cluster <LuPlus size={16} />
            </button>
          </div>
        </div>

        <ClusterManagementTable
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

        <AddClusterManagementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          editData={editClusterData}
          clusterId={editClusterData?._id}
        />

        <DeleteClusterModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
          clusterData={clusterToDelete}
          isLoading={isDeleting}
        />
      </div>
    </div>
  );
}