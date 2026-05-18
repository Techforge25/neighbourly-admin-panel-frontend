"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

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
      headerDate="Tuesday, May 5, 2026"
      userName="John Alex"
      userRole="Admin"
    >
      {children}
    </AdminShell>
  );
}