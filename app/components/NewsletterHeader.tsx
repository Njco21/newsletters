import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function NewsletterHeader() {
  return (
    <div className="w-full">
      {/* Header with curved design */}
      <div className="relative bg-[#2A1B54] text-white overflow-hidden">
        <div className="absolute right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-[#2A1B54]" 
            style={{
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/placeholder.svg"
              alt="Trinity Christian School Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              INSIDE THE PRIDE
            </h1>
            <p className="text-xl">NEWSLETTER</p>
            <p className="text-lg mt-2">always forward</p>
          </div>
        </div>
      </div>

      {/* Publication info */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-purple-800">
        <p>Published weekly to keep you informed about all things Trinity</p>
        <p className="mt-2">Newsletter - Volume 24.4 - Published December 1, 2024</p>
      </div>

      {/* Navigation */}
      <div className="bg-[#2A1B54] text-white py-4">
        <nav className="max-w-6xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            <li>
              <Link href="/calendar" className="hover:underline">
                SCHOOL CALENDAR
              </Link>
            </li>
            <li>
              <Link href="/dining" className="hover:underline">
                DINING PROGRAM/LUNCH MENUS
              </Link>
            </li>
            <li>
              <Link href="/store" className="hover:underline">
                TRINITY STORE
              </Link>
            </li>
            <li>
              <Link href="/website" className="hover:underline">
                WEBSITE
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* News Section Header */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-[#6B4E9F] text-white py-3 px-6">
          <h2 className="text-xl font-bold text-center">
            SCHOOL WIDE NEWS
          </h2>
        </div>
      </div>
    </div>
  )
}
