"use client";
import { useAuth } from "./AuthProvider";

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
     const { loading } = useAuth();

     if (loading) {
          return (
               <div className="flex h-screen items-center justify-center">
                    Loading...
               </div>
          );
     }

     return <>{children}</>;
};