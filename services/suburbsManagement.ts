import api from "@/lib/axios";
import { toast } from "react-toastify";
import { CreateSuburb,  UpdateSuburb } from "@/types";

export const getSuburbs = async (page = 1) => {
     try {
          const { data } = await api.get(`/suburb?page=${page}`);
          return data;
     } catch (err) {
          console.error("Error fetching Suburb:", err);
          throw err;
     }
}

export const createSuburb = async (payload: CreateSuburb) => {
  try {
    const { data } = await api.post("/suburb", {
      clusterId: payload.clusterId,
      name: payload.name,
      description: payload.description ?? null,
    });

    toast.success(data?.message || "Suburb created successfully");

    return data;
  } catch (err: any) {
    console.error(err);

    toast.error(
      err?.response?.data?.message || "Failed to create Suburb"
    );

    throw err;
  }
};

export const editSuburb = async (
  suburbId: string,
  payload: UpdateSuburb
) => {
  try {
    const { data } = await api.put(
      `suburb/${suburbId}`,
      {
        name: payload.name,
        description: payload.description ?? null,
        clusterId: payload.clusterId,
      }
    );

    toast.success(
      data?.message || "Suburb updated successfully"
    );

    return data;
  } catch (err: any) {
    console.error(err);

    toast.error(
      err?.response?.data?.message || "Failed to update Suburb"
    );

    throw err;
  }
};



export const deleteSuburb = async (suburbId: string) => {
     try {
          const { data } = await api.delete(`/suburb/${suburbId}`);
           toast.success(data?.message || "Suburb deleted successfully");
          return data;
     } catch (err: any) {
          console.error(err);

           toast.error(
          err?.response?.data?.message || "Failed to delete Suburb"
    );
      throw err;
     }
}