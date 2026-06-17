import api from "@/lib/axios";
import { toast } from "react-toastify";
import { CreateCluster, UpdateCluster } from "@/types";

export const getClusters = async (page = 1) => {
     try {
          const { data } = await api.get(`/cluster?page=${page}&limit=10`);
          return data;
     } catch (err) {
          console.error("Error fetching clusters:", err);
          throw err;
     }
}

export const getClustersDropdown = async () => {
     try {
          const { data } = await api.get(`/cluster/dropdown`);
          return data;
     } catch (err) {
          console.error("Error fetching clusters:", err);
          throw err;
     }
}

export const createCluster = async (payload: CreateCluster) => {
  try {
    const { data } = await api.post("/cluster", {
      name: payload.name,
      description: payload.description ?? null,
    });

    toast.success(data?.message || "Cluster created successfully");

    return data;
  } catch (err: any) {
  const message =
    err?.response?.data?.message ||
    err?.message ||
    "Failed to create cluster";

  toast.error(message);

  throw err;
}
};

export const editCluster = async (
  clusterId: string,
  payload: UpdateCluster
) => {
  try {
    const { data } = await api.put(
      `cluster/${clusterId}`,
      {
        name: payload.name,
        description: payload.description ?? null,
      }
    );

    toast.success(
      data?.message || "Cluster updated successfully"
    );

    return data;
  } catch (err: any) {
    console.error(err);

    toast.error(
      err?.response?.data?.message || "Failed to update cluster"
    );

    throw err;
  }
};



export const deleteCluster = async (clusterId: string) => {
     try {
          const { data } = await api.delete(`/cluster/${clusterId}`);
           toast.success(data?.message || "Cluster deleted successfully");
          return data;
     } catch (err: any) {
          console.error(err);

           toast.error(
          err?.response?.data?.message || "Failed to delete cluster"
    );
      throw err;
     }
}