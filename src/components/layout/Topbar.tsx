import { Searchbar, UserMenu } from '@components/index'

export const Topbar = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 md:px-6 border-b border-border gap-4">
      <div className="flex items-center flex-1">
        <h1 className="text-lg font-semibold">APP</h1>
      </div>
      <div className="flex justify-center flex-1">
        <Searchbar />
      </div>
      <div className="flex justify-end items-center flex-1 gap-2">
        <UserMenu />
      </div>
    </header>
  )
}
