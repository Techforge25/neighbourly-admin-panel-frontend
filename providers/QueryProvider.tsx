"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export function QueryProvider({ children }: { children: React.ReactNode }) {
     const router = useRouter();
     const [queryClient] = useState(
          () =>
               new QueryClient({
                    defaultOptions: {
                         queries: {
                              staleTime: 60 * 1000,
                              refetchOnWindowFocus: false,
                              retry: 1,
                         },
                    },
               })
     );

     const [loading, setLoading] = useState(true);

     useLayoutEffect(() => {
          const checkUserAuth = async () => {
               try {
                    const response = await fetch(
                         "https://neighbourly-backend.beneighbourly.com.au/api/v1/admin/auth/me",
                         {
                              credentials: "include",
                         }
                    );

                    if (response.ok) {
                         router.push("/dashboard");
                    } else {
                         router.push("/");
                    }
               } catch (err) {
                    console.error(err);
                    router.push("/");
               } finally {
                    setLoading(false);
               }
          };

          checkUserAuth();
     }, []);

     return (
          <QueryClientProvider client={queryClient}>
               {children}
               <ToastContainer />
               {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools initialIsOpen={false} />
               )}
          </QueryClientProvider>
     );
}