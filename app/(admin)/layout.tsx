import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
