"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { About, Contact, Footer, Hero, Services, Sidebar, Stats } from "../components"
import { useLanguage } from "../hooks/useLanguage"
import { getServices } from "../utils/services"

export default function AutoRepairWebsite() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { currentLanguage, setCurrentLanguage, isLanguageDropdownOpen, setIsLanguageDropdownOpen, t } = useLanguage()

  const services = getServices(t)

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Sidebar
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          isLanguageDropdownOpen={isLanguageDropdownOpen}
          setIsLanguageDropdownOpen={setIsLanguageDropdownOpen}
          t={t}
        />
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        <Hero t={t} />
        <Stats t={t} />
        <Services t={t} services={services} />
        <About t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  )
}
