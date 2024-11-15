import { NavBar } from "@/components/nav-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}