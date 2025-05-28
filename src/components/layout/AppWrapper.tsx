import { MainContent, Sidebar } from '@components/index'

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-background text-foreground">
    <Sidebar />
    <MainContent>{children}</MainContent>
  </div>
)
