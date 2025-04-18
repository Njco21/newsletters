import { Shield } from "lucide-react"

export function SchoolLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Shield className="text-white w-10 h-10" />
        <div className="absolute inset-0 flex items-center justify-center text-[#473877] font-bold text-xs">
          <span className="mt-1">TCS</span>
        </div>
      </div>
    </div>
  )
}
