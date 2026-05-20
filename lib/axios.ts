import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
     baseURL: API_URL,
     withCredentials: true,
     headers: {
          "Content-Type": "application/json",
     },
});

const refreshClient = axios.create({
     baseURL: API_URL,
     withCredentials: true,
});

let isRefreshing = false;

let failedQueue: any[] = [];

const processQueue = (error?: unknown) => {
     failedQueue.forEach((p) => {
          if (error) p.reject(error);
          else p.resolve();
     });

     failedQueue = [];
};

api.interceptors.response.use(
     (response) => response,

     async (error) => {
          const originalRequest = error.config;

          if (!error.response) {
               return Promise.reject({ message: "Network error" });
          }

          const status = error.response.status;

          const isRefreshRequest =
               originalRequest.url?.includes("/auth/refreshToken");

          if (
               status === 401 &&
               !originalRequest._retry &&
               !isRefreshRequest
          ) {
               originalRequest._retry = true;

               if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                         failedQueue.push({
                              resolve: () => resolve(api(originalRequest)),
                              reject,
                         });
                    });
               }

               isRefreshing = true;

               try {
                    await refreshClient.get("/auth/refreshToken");
                    processQueue();
                    return api(originalRequest);
               } catch (err) {
                    processQueue(err);

                    if (typeof window !== "undefined") {
                         window.location.href = "/";
                    }

                    return Promise.reject(err);
               } finally {
                    isRefreshing = false;
               }
          }

          return Promise.reject(
               error?.response?.data || {
                    message: error?.message || "Something went wrong",
               }
          );
     }
);

export default api;