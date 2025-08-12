import { useState } from "react"
import { Language, Translation } from "../types"
import { translations } from "../translations"

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pl")
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const t: Translation = translations[currentLanguage]

  return {
    currentLanguage,
    setCurrentLanguage,
    isLanguageDropdownOpen,
    setIsLanguageDropdownOpen,
    t,
  }
}
