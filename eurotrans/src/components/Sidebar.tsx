import { ChevronDown } from "lucide-react"
import { Language, Translation } from "../types"

interface SidebarProps {
  currentLanguage: Language
  setCurrentLanguage: (language: Language) => void
  isLanguageDropdownOpen: boolean
  setIsLanguageDropdownOpen: (isOpen: boolean) => void
  t: Translation
}

export default function Sidebar({
  currentLanguage,
  setCurrentLanguage,
  isLanguageDropdownOpen,
  setIsLanguageDropdownOpen,
  t,
}: SidebarProps) {
  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case "pl":
        return "Polski"
      case "en":
        return "English"
      case "ua":
        return "Українська"
      case "ka":
        return "ქართული"
      default:
        return ""
    }
  }

  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case "pl":
        return "🇵🇱"
      case "en":
        return "🇺🇸"
      case "ua":
        return "🇺🇦"
      case "ka":
        return "🇬🇪"
      default:
        return ""
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-center">
        <img src="/images/sekula-logo-enhanced.png" alt="SEKULA" className="h-20 w-auto max-w-full" />
      </div>

      {/* Navigation */}
      <nav className="mb-8">
        <ul className="space-y-4">
          <li>
            <a href="#home" className="text-lg hover:text-red-400 transition-colors">
              {t.home}
            </a>
          </li>
          <li>
            <a href="#services" className="text-lg hover:text-red-400 transition-colors">
              {t.services}
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg hover:text-red-400 transition-colors">
              {t.about}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-red-400 transition-colors">
              {t.contact}
            </a>
          </li>
        </ul>
      </nav>

      {/* Language Switcher */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-3 text-gray-400">Language</h3>
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center justify-between w-full p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <span>{getLanguageFlag(currentLanguage)}</span>
              <span>{getLanguageName(currentLanguage)}</span>
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isLanguageDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded shadow-lg border border-gray-700 z-50">
              {(["pl", "en", "ua", "ka"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCurrentLanguage(lang)
                    setIsLanguageDropdownOpen(false)
                  }}
                  className={`flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-700 transition-colors ${
                    currentLanguage === lang ? "bg-red-600 text-white" : ""
                  } ${lang === "ka" ? "rounded-b" : ""}`}
                >
                  <span>{getLanguageFlag(lang)}</span>
                  <span>{getLanguageName(lang)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-600 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">{t.emergency}</h3>
        <p className="text-sm">{t.emergencyNumber}</p>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-colors">
          {t.getQuote}
        </button>
        <button className="w-full border border-white text-white hover:bg-white hover:text-gray-900 py-2 px-4 rounded-lg text-lg font-semibold transition-colors">
          {t.callNow}
        </button>
      </div>
    </div>
  )
}
