import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const gradeLinks = [
    { name: "Grade 1", url: "https://sites.google.com/view/grade-1-tcs/home" },
    { name: "Grade 2", url: "https://sites.google.com/view/grade-2-tcs/home" },
    { name: "Grade 3", url: "https://sites.google.com/view/grade-3-tcs/home" },
    { name: "Grade 4", url: "https://sites.google.com/view/grade-4-tcs/home" },
    { name: "Grade 5", url: "https://sites.google.com/view/grade-5-tcs/news" },
    { name: "Grade 9", url: "https://sites.google.com/view/grade-9-tcs/home" },
    { name: "Grade 10", url: "https://sites.google.com/view/grade-10-tcs/home" },
    { name: "Grade 11", url: "https://sites.google.com/view/grade-11-tcs/home" },
    { name: "Grade 12", url: "https://sites.google.com/view/grade-12-tcs/home" },
    { name: "Grade K", url: "https://sites.google.com/view/grade-k-tcs/home" },
  ]

  const schoolLinks = [
    { name: "Early Elementary", url: "https://sites.google.com/view/early-elementary-tcs/home" },
    { name: "Elementary", url: "https://sites.google.com/view/elementary-tcs/home" },
    { name: "Middle School", url: "https://sites.google.com/view/middle-school-tcs/home" },
    { name: "High School", url: "https://sites.google.com/view/high-school-tcs/home" },
    { name: "Church", url: "https://www.tri-church.com/" },
    { name: "Preschool Info", url: "https://tcslions.org/preschool-info" },
    { name: "Agape", url: "https://www.tri-church.com/agape" },
    { name: "Preschool", url: "https://www.tri-church.com/preschool" },
  ]

  const quickLinks = [
    { name: "Family Links", url: "https://tcslions.org/family-links" },
    { name: "Tuition Management", url: "https://tcslions.org/tuition-management" },
    { name: "After School Care", url: "https://tcslions.org/after-school" },
    { name: "School Store", url: "https://tcslions.org/store" },
    { name: "School Calendar", url: "https://tcslions.org/school-calendar" },
    { name: "Lunch Program", url: "https://tcslions.org/lunchprogram" },
    { name: "Giving", url: "https://tcslions.org/giving" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Trinity Christian School</h1>
            <nav className="space-x-4">
              <Link href="https://tcslions.org/about-tcs" className="hover:text-purple-200 transition">
                About
              </Link>
              <Link href="https://tcslions.org/welcome" className="hover:text-purple-200 transition">
                Admissions
              </Link>
              <Link href="https://tcslions.org/about-academics" className="hover:text-purple-200 transition">
                Academics
              </Link>
              <Link href="https://athletics.tcslions.org/" className="hover:text-purple-200 transition">
                Athletics
              </Link>
              <Link href="https://tcslions.org/family-links" className="hover:text-purple-200 transition">
                Family
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="h-1 w-full max-w-md mx-auto mb-8 bg-gradient-to-r from-[#1c0333] via-[#360f5a] to-[#1c0333] rounded-full"></div>
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-transparent bg-clip-text">
              Welcome to Trinity Christian School
            </h2>
            <p className="text-gray-700 mb-4">
              Access resources for your grade level or explore school-wide information through our portal.
            </p>
            <div className="flex justify-end">
              <Link
                href="https://tcslions.myschoolapp.com/app#login"
                className="bg-[#1c0333] text-white px-4 py-2 rounded hover:bg-[#360f5a] transition"
              >
                Student/Parent Login
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-transparent bg-clip-text">
            Grade Level Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gradeLinks.map((grade) => (
              <Link key={grade.name} href={grade.url} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-md transition-shadow border-purple-100 hover:border-[#360f5a]">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1c0333] to-[#360f5a] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold">{grade.name.replace("Grade ", "")}</span>
                    </div>
                    <h3 className="font-medium text-center">{grade.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-transparent bg-clip-text">
            School Sections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {schoolLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-md transition-shadow border-purple-100 hover:border-[#360f5a]">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#360f5a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-center">{link.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-transparent bg-clip-text">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-md transition-shadow border-purple-100 hover:border-[#360f5a]">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-center">{link.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-[#1c0333] to-[#360f5a] text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Trinity Christian School</h2>
              <p className="text-sm text-purple-300">Sharpsburg, GA</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://tcslions.org/contact" className="text-purple-300 hover:text-white transition">
                Contact
              </Link>
              <Link
                href="https://tcslions.org/inside-the-pride-newsletter"
                className="text-purple-300 hover:text-white transition"
              >
                Newsletter
              </Link>
              <Link href="mailto:marketing@tcslions.org" className="text-purple-300 hover:text-white transition">
                Email
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-purple-300">
            &copy; {new Date().getFullYear()} Trinity Christian School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
