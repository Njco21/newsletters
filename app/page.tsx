"use client"

import Link from "next/link"
import { Book, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { SchoolLogo } from "@/components/school-logo"

// Navigation data with submenus
const navigationItems = [
  {
    name: "About",
    href: "#",
    submenu: [
      { name: "The Trinity Way", href: "#" },
      { name: "Administration", href: "#" },
      { name: "Beliefs & History", href: "#" },
      { name: "Employment", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    name: "Admissions",
    href: "#",
    submenu: [
      { name: "Welcome", href: "#" },
      { name: "Apply to TCS", href: "#" },
      { name: "Visit Our Campus", href: "#" },
      { name: "Tuition", href: "#" },
      { name: "Financial Aid", href: "#" },
      { name: "Admissions FAQs", href: "#" },
    ],
  },
  {
    name: "Academics",
    href: "#",
    submenu: [
      { name: "About Our Academics", href: "#" },
      { name: "Early Learning", href: "#" },
      { name: "Elementary School", href: "#" },
      { name: "Middle School", href: "#" },
      { name: "High School", href: "#" },
      { name: "Skills Development", href: "#" },
      { name: "TCS Transcripts", href: "#" },
    ],
  },
  {
    name: "Athletics",
    href: "#",
    submenu: [
      { name: "Athletics Home", href: "#" },
      { name: "Sports Programs", href: "#" },
      { name: "Athletic Calendar", href: "#" },
      { name: "Athletic Forms", href: "#" },
    ],
  },
  {
    name: "Family",
    href: "#",
    submenu: [
      { name: "Family Links", href: "#" },
      { name: "Tuition Management", href: "#" },
      { name: "After School Care", href: "#" },
      { name: "School Store", href: "#" },
      { name: "School Calendar", href: "#" },
      { name: "Lunch Program", href: "#" },
    ],
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<string | null>(null)
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<string[]>([])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close all submenus when closing the mobile menu
    if (mobileMenuOpen) {
      setOpenMobileSubmenus([])
    }
  }

  const toggleDesktopSubmenu = (name: string) => {
    if (openDesktopSubmenu === name) {
      setOpenDesktopSubmenu(null)
    } else {
      setOpenDesktopSubmenu(name)
    }
  }

  const toggleMobileSubmenu = (name: string) => {
    if (openMobileSubmenus.includes(name)) {
      setOpenMobileSubmenus(openMobileSubmenus.filter((item) => item !== name))
    } else {
      setOpenMobileSubmenus([...openMobileSubmenus, name])
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#473877] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-3">
            <SchoolLogo />
            <h1 className="text-xl md:text-2xl font-bold">Trinity Christian School</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center hover:underline focus:outline-none"
                  onClick={() => toggleDesktopSubmenu(item.name)}
                  aria-expanded={openDesktopSubmenu === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${openDesktopSubmenu === item.name ? "rotate-180" : ""}`}
                  />
                </button>
                {openDesktopSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0ebff] hover:text-[#473877]"
                        onClick={() => setOpenDesktopSubmenu(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#473877] border-t border-[#5a4b8e] mt-4">
            <nav className="container mx-auto px-4 py-2 flex flex-col">
              {navigationItems.map((item) => (
                <div key={item.name} className="border-b border-[#5a4b8e] last:border-b-0">
                  <button
                    className="flex items-center justify-between w-full py-3 hover:bg-[#5a4b8e] transition-colors"
                    onClick={() => toggleMobileSubmenu(item.name)}
                    aria-expanded={openMobileSubmenus.includes(item.name)}
                  >
                    {item.name}
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${openMobileSubmenus.includes(item.name) ? "rotate-90" : ""}`}
                    />
                  </button>
                  {openMobileSubmenus.includes(item.name) && (
                    <div className="pl-4 bg-[#3d2f68]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 border-b border-[#5a4b8e] last:border-b-0 hover:bg-[#5a4b8e] transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow bg-[#f8f6ff] py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#473877] mb-2">Welcome to Trinity Christian School</h2>
            <p className="text-gray-700 mb-4">
              Access resources for your grade level or explore school-wide information through our portal.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#473877] text-white px-4 py-2 rounded">Student/Parent Login</button>
            </div>
          </div>

          {/* Grade Level Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#473877] mb-6">Grade Level Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 9, 10, 11, 12, "K"].map((grade, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-[#473877] text-white flex items-center justify-center mb-2 text-xl font-bold">
                    {grade}
                  </div>
                  <span className="text-center font-medium">Grade {grade}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* School Sections */}
          <section>
            <h2 className="text-2xl font-bold text-[#473877] mb-6">School Sections</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Early Elementary",
                "Elementary",
                "Middle School",
                "High School",
                "Church",
                "Preschool Info",
                "Agape",
                "Preschool",
              ].map((section, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f0ebff] text-[#473877] flex items-center justify-center mb-2">
                    <Book size={24} />
                  </div>
                  <span className="text-center font-medium">{section}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#473877] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Trinity Christian School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
