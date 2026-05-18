"use client";

import api from "@/lib/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
     user: any;
     loading: boolean;
     isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
     user: null,
     loading: true,
     isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
     const router = useRouter();

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const initAuth = async () => {
          try {
               const res = await api.get("/auth/me", {
                    withCredentials: true,
               });

               setUser(res.data);
          } catch (err) {
               try {
                    await api.get("/admin/auth/refreshToken", {
                         withCredentials: true,
                    });

                    const res = await api.get("/auth/me", {
                         withCredentials: true,
                    });

                    setUser(res.data);
               } catch {
                    setUser(null);
                    router.replace("/"); // IMPORTANT: replace not push
               }
          } finally {
               setLoading(false); // ALWAYS runs
          }
     };

     useEffect(() => {
          initAuth();
     }, []);

     return (
          <AuthContext.Provider
               value={{
                    user,
                    loading,
                    isAuthenticated: !!user,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
};

export const useAuth = () => useContext(AuthContext);