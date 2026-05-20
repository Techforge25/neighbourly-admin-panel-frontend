"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import moment from "moment";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       await api.get("/auth/me");

  //       setLoading(false);
  //     } catch (error) {
  //       router.replace("/");
  //     }
  //   };

  //   checkAuth();
  // }, [router]);

  const path = pathname.includes('sponsorship') ? 'Sponsorship' : pathname.includes('recommendation') ? 'Businesses' : 'Dashboard Overview'

  return (
    <AdminShell
      headerTitle={path}
      headerDate={moment().format("dddd, MMMM D, YYYY")}
      userName="Admin"
    >
      {children}
    </AdminShell>
  );
}