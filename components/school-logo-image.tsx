import Image from "next/image"

export function SchoolLogoImage({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src="/tcs-logo.png" alt="Trinity Christian School Logo" width={48} height={48} className="h-12 w-auto" />
    </div>
  )
}
