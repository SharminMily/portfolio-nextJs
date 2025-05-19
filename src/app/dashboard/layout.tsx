import { AppSidebar } from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white text-black">
      <AppSidebar />
      <div className="flex flex-col flex-1">
        {/* <header className="h-16 bg-black text-white flex items-center px-6 shadow">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header> */}
        <main className="flex-1 p-6 bg-white">{children}</main>
      </div>
    </div>
  )
}
