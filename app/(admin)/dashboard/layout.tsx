"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { useRouter } from "next/navigation";
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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");

        setLoading(false);
      } catch (error) {
        router.replace("/");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <AdminShell
      headerTitle="Dashboard Overview"
      headerDate={moment().format("dddd, MMMM D, YYYY")}
      userName="Admin"
    >
      {children}
    </AdminShell>
  );
}