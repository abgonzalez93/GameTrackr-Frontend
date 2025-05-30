import { Sidebar, Topbar } from '@components/index'

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
