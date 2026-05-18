import api from "@/lib/axios";

export const fetchBusinesses = async (page: number, trade?: string, suburb?: string, search?: any) => {
     try {
          const { data } = await api.get(`/business?trade=${trade}&suburb=${suburb}&search=${search}&page=${page}&limit=5`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const viewBusiness = async (businessId: string) => {
     try {
          const { data } = await api.get(`/business/${businessId}`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const getRecentPendingRecommendations = async () => {
     try {
          const { data } = await api.get("/dashboard/recent-pending");
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const getAllPendingRecommendations = async (page: number) => {
     try {
          const { data } = await api.get(`/dashboard/all-pending?page=${page}&limit=10`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const viewPendingRecommendations = async (recommendationId: string) => {
     try {
          const { data } = await api.get(`/dashboard/recommendation/${recommendationId}`);
          return data;
     } catch (err) {
          console.error(err)
     }
}

export const updateRecommendationStatus = async (recommendationId: string, status: string) => {
     try {
          const { data } = await api.patch(`/dashboard/recommendation/${recommendationId}`, { status });
          return data;
     } catch (err) {
          console.error(err)
     }
}