import api from "@/lib/axios";
import { toast } from "react-toastify";

export const fetchBusinesses = async (
  page: number,
  trade?: string,
  suburb?: string,
  search?: any,
) => {
  try {
    const { data } = await api.get(
      `/business?trade=${trade}&suburb=${suburb}&search=${search}&page=${page}&limit=50`,
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const viewBusiness = async (businessId: string) => {
  try {
    const { data } = await api.get(`/business/${businessId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getRecentPendingRecommendations = async () => {
  try {
    const { data } = await api.get("/dashboard/recent-pending");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteRecommendation = async (recommendationId: string) => {
  try {
    const { data } = await api.delete(`/recommendation/${recommendationId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getAllPendingRecommendations = async (page: number) => {
  try {
    const { data } = await api.get(
      `/dashboard/all-pending?page=${page}&limit=10`,
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const viewPendingRecommendations = async (recommendationId: string) => {
  try {
    const { data } = await api.get(
      `/dashboard/recommendation/${recommendationId}`,
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateRecommendationStatus = async (
  recommendationId: string,
  status: string,
) => {
  try {
    const { data } = await api.patch(
      `/dashboard/recommendation/${recommendationId}`,
      { status },
    );
    console.log(data?.message, "message");
    toast.success(data?.message || "Recommendation has been approved");

    return data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Failed to update recommendation status";

    toast.error(message);

    throw err;
  }
};