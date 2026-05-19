import api from "@/lib/axios";

export const getDashboardStats = async () => {
     try {
          const { data } = await api.get("/dashboard/stats");
          return data;
     } catch (err) {
          console.error(err)
     }

}

export const getTopRecommenders = async () => {
     try {
          const { data } = await api.get("/dashboard/top-recommenders");
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

export const getAllPendingRecommendations = async (page: number, search: string, suburb: string, category: string) => {
     try {
          const { data } = await api.get(`/dashboard/all-pending?page=${page}&limit=2&suburb=${category}&search=${search}&trade=${suburb}`);
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
     console.log(status, 'statusss')
     try {
          const { data } = await api.patch(`/dashboard/recommendation/${recommendationId}`, { status });
          return data;
     } catch (err) {
          console.error(err)
     }
}