"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Book,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Users,
  Building,
  History,
  Briefcase,
  Phone,
  GraduationCap,
  BookOpen,
  Award,
  FileText,
  Calendar,
  FileCheck,
  Home,
  Clock,
  ShoppingBag,
  Coffee,
  DollarSign,
} from "lucide-react"
import { useState } from "react"

// Navigation data with mega menu content
const navigationItems = [
  {
    name: "About",
    href: "#",
    icon: <Users size={18} />,
    megaMenu: {
      columns: [
        {
          title: "About TCS",
          items: [
            { name: "The Trinity Way", href: "#", icon: <Building size={16} /> },
            { name: "Administration", href: "#", icon: <Users size={16} /> },
            { name: "Beliefs & History", href: "#", icon: <History size={16} /> },
            { name: "Employment", href: "#", icon: <Briefcase size={16} /> },
            { name: "Contact Us", href: "#", icon: <Phone size={16} /> },
          ],
        },
        {
          title: "Our Community",
          items: [
            { name: "Faculty & Staff", href: "#", icon: <Users size={16} /> },
            { name: "Board of Directors", href: "#", icon: <Users size={16} /> },
            { name: "Campus Safety", href: "#", icon: <Building size={16} /> },
            { name: "News & Events", href: "#", icon: <Calendar size={16} /> },
          ],
        },
        {
          title: "Quick Links",
          items: [
            { name: "School Calendar", href: "#", icon: <Calendar size={16} /> },
            { name: "Directions", href: "#", icon: <Building size={16} /> },
            { name: "Inside the Pride Newsletter", href: "#", icon: <FileText size={16} /> },
          ],
        },
      ],
      featured: {
        title: "Visit Our Campus",
        description: "Schedule a tour to see what makes Trinity Christian School special.",
        link: { name: "Schedule a Tour", href: "#" },
        image: "/placeholder.svg?key=ps3jn",
      },
    },
  },
  {
    name: "Admissions",
    href: "#",
    icon: <GraduationCap size={18} />,
    megaMenu: {
      columns: [
        {
          title: "Admissions Process",
          items: [
            { name: "Welcome", href: "#", icon: <Home size={16} /> },
            { name: "Apply to TCS", href: "#", icon: <FileCheck size={16} /> },
            { name: "Visit Our Campus", href: "#", icon: <Building size={16} /> },
            { name: "Tuition", href: "#", icon: <DollarSign size={16} /> },
            { name: "Financial Aid", href: "#", icon: <DollarSign size={16} /> },
            { name: "Admissions FAQs", href: "#", icon: <FileText size={16} /> },
          ],
        },
        {
          title: "Grade Levels",
          items: [
            { name: "Early Learning", href: "#", icon: <Book size={16} /> },
            { name: "Elementary School", href: "#", icon: <Book size={16} /> },
            { name: "Middle School", href: "#", icon: <Book size={16} /> },
            { name: "High School", href: "#", icon: <Book size={16} /> },
          ],
        },
        {
          title: "Resources",
          items: [
            { name: "New Families", href: "#", icon: <Users size={16} /> },
            { name: "International Students", href: "#", icon: <GraduationCap size={16} /> },
            { name: "Transfer Students", href: "#", icon: <GraduationCap size={16} /> },
          ],
        },
      ],
      featured: {
        title: "Apply Now for 2023-2024",
        description: "Applications are now being accepted for the upcoming school year.",
        link: { name: "Start Application", href: "#" },
        image: "/placeholder.svg?key=8r2mm",
      },
    },
  },
  {
    name: "Academics",
    href: "#",
    icon: <BookOpen size={18} />,
    megaMenu: {
      columns: [
        {
          title: "Programs",
          items: [
            { name: "About Our Academics", href: "#", icon: <BookOpen size={16} /> },
            { name: "Early Learning", href: "#", icon: <Book size={16} /> },
            { name: "Elementary School", href: "#", icon: <Book size={16} /> },
            { name: "Middle School", href: "#", icon: <Book size={16} /> },
            { name: "High School", href: "#", icon: <Book size={16} /> },
            { name: "Skills Development", href: "#", icon: <Award size={16} /> },
            { name: "TCS Transcripts", href: "#", icon: <FileText size={16} /> },
          ],
        },
        {
          title: "Enrichment",
          items: [
            { name: "Performing Arts", href: "#", icon: <Award size={16} /> },
            { name: "Visual Arts", href: "#", icon: <Award size={16} /> },
            { name: "Music Arts Academy", href: "#", icon: <Award size={16} /> },
            { name: "Elective Offerings", href: "#", icon: <Award size={16} /> },
          ],
        },
        {
          title: "Resources",
          items: [
            { name: "College Counseling", href: "#", icon: <GraduationCap size={16} /> },
            { name: "Library", href: "#", icon: <Book size={16} /> },
            { name: "Technology", href: "#", icon: <BookOpen size={16} /> },
          ],
        },
      ],
      featured: {
        title: "Academic Excellence",
        description: "Trinity Christian School offers a rigorous curriculum in a Christ-centered environment.",
        link: { name: "Learn More", href: "#" },
        image: "/trinity-christian-classroom.png",
      },
    },
  },
  {
    name: "Athletics",
    href: "#",
    icon: <Award size={18} />,
    megaMenu: {
      columns: [
        {
          title: "Athletics Programs",
          items: [
            { name: "Athletics Home", href: "#", icon: <Home size={16} /> },
            { name: "Sports Programs", href: "#", icon: <Award size={16} /> },
            { name: "Athletic Calendar", href: "#", icon: <Calendar size={16} /> },
            { name: "Athletic Forms", href: "#", icon: <FileCheck size={16} /> },
          ],
        },
        {
          title: "Sports",
          items: [
            { name: "Fall Sports", href: "#", icon: <Award size={16} /> },
            { name: "Winter Sports", href: "#", icon: <Award size={16} /> },
            { name: "Spring Sports", href: "#", icon: <Award size={16} /> },
          ],
        },
        {
          title: "Resources",
          items: [
            { name: "Athletic Handbook", href: "#", icon: <FileText size={16} /> },
            { name: "Coaches Directory", href: "#", icon: <Users size={16} /> },
            { name: "Athletic Achievements", href: "#", icon: <Award size={16} /> },
          ],
        },
      ],
      featured: {
        title: "Go Lions!",
        description: "Trinity Christian School athletics develops character, teamwork, and excellence.",
        link: { name: "View Schedule", href: "#" },
        image: "/placeholder.svg?key=1qbtc",
      },
    },
  },
  {
    name: "Family",
    href: "#",
    icon: <Users size={18} />,
    megaMenu: {
      columns: [
        {
          title: "Family Resources",
          items: [
            { name: "Family Links", href: "#", icon: <Users size={16} /> },
            { name: "Tuition Management", href: "#", icon: <DollarSign size={16} /> },
            { name: "After School Care", href: "#", icon: <Clock size={16} /> },
            { name: "School Store", href: "#", icon: <ShoppingBag size={16} /> },
            { name: "School Calendar", href: "#", icon: <Calendar size={16} /> },
            { name: "Lunch Program", href: "#", icon: <Coffee size={16} /> },
          ],
        },
        {
          title: "Parent Involvement",
          items: [
            { name: "Parent Teacher Fellowship", href: "#", icon: <Users size={16} /> },
            { name: "Volunteer Opportunities", href: "#", icon: <Users size={16} /> },
            { name: "Booster Club", href: "#", icon: <Award size={16} /> },
          ],
        },
        {
          title: "Quick Links",
          items: [
            { name: "Student/Parent Handbook", href: "#", icon: <FileText size={16} /> },
            { name: "Health & Safety", href: "#", icon: <FileCheck size={16} /> },
            { name: "Transportation", href: "#", icon: <Building size={16} /> },
          ],
        },
      ],
      featured: {
        title: "Parent Portal",
        description: "Access grades, attendance, and more through our secure parent portal.",
        link: { name: "Login to Portal", href: "#" },
        image: "/placeholder.svg?key=86qjs",
      },
    },
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
            <div className="bg-white rounded-full p-1 flex items-center justify-center h-12 w-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OcD8C8y7HHEouS7MUfZts99xB0e9Sg.png"
                alt="Trinity Christian School Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
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
                  <span className="flex items-center">
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.name}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${openDesktopSubmenu === item.name ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega Menu */}
                {openDesktopSubmenu === item.name && item.megaMenu && (
                  <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white rounded-md shadow-lg py-6 px-4 z-10 -translate-x-1/4">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Menu Columns */}
                      {item.megaMenu.columns.map((column, idx) => (
                        <div key={idx} className="space-y-4">
                          <h3 className="text-[#473877] font-bold text-lg border-b border-gray-200 pb-2">
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="flex items-center text-gray-700 hover:text-[#473877] hover:bg-[#f0ebff] px-2 py-1 rounded transition-colors"
                                  onClick={() => setOpenDesktopSubmenu(null)}
                                >
                                  {subItem.icon && <span className="mr-2 text-[#473877]">{subItem.icon}</span>}
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Featured Content */}
                      {item.megaMenu.featured && (
                        <div className="bg-[#f0ebff] rounded-lg p-4 flex flex-col">
                          <h3 className="text-[#473877] font-bold text-lg mb-2">{item.megaMenu.featured.title}</h3>
                          <p className="text-gray-700 text-sm mb-3">{item.megaMenu.featured.description}</p>
                          <div className="mb-3">
                            <Image
                              src={item.megaMenu.featured.image || "/placeholder.svg"}
                              alt={item.megaMenu.featured.title}
                              width={200}
                              height={120}
                              className="rounded-md w-full h-auto object-cover"
                            />
                          </div>
                          <Link
                            href={item.megaMenu.featured.link.href}
                            className="mt-auto bg-[#473877] text-white px-4 py-2 rounded text-center text-sm hover:bg-[#5a4b8e] transition-colors"
                            onClick={() => setOpenDesktopSubmenu(null)}
                          >
                            {item.megaMenu.featured.link.name}
                          </Link>
                        </div>
                      )}
                    </div>
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
                    <span className="flex items-center">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.name}
                    </span>
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${openMobileSubmenus.includes(item.name) ? "rotate-90" : ""}`}
                    />
                  </button>
                  {openMobileSubmenus.includes(item.name) && item.megaMenu && (
                    <div className="pl-4 bg-[#3d2f68]">
                      {item.megaMenu.columns.map((column) => (
                        <div key={column.title} className="mb-2">
                          <h3 className="text-white font-semibold py-2 border-b border-[#5a4b8e]">{column.title}</h3>
                          <ul>
                            {column.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="flex items-center py-2 text-white hover:bg-[#5a4b8e] transition-colors"
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.megaMenu.featured && (
                        <div className="bg-[#5a4b8e] p-3 rounded mb-2">
                          <h3 className="text-white font-semibold mb-1">{item.megaMenu.featured.title}</h3>
                          <p className="text-white text-sm mb-2">{item.megaMenu.featured.description}</p>
                          <Link
                            href={item.megaMenu.featured.link.href}
                            className="inline-block bg-white text-[#473877] px-3 py-1 rounded text-sm font-medium"
                            onClick={toggleMobileMenu}
                          >
                            {item.megaMenu.featured.link.name}
                          </Link>
                        </div>
                      )}
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
