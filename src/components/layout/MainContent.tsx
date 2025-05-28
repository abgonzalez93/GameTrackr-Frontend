import { Topbar } from '@components/index'

export const MainContent = ({ children }: { children: React.ReactNode }) => (
  <main className="flex-1 flex flex-col">
    <Topbar />
    <div className="p-4 md:p-6 space-y-6 overflow-y-auto">{children}</div>
  </main>
)
