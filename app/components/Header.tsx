import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Grade 6</h1>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8 pr-4"
        />
      </div>
    </header>
  )
}
