import { Translation } from "../types"

interface FooterProps {
  t: Translation
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <img src="/images/sekula-logo-white.png" alt="SEKULA" className="h-10 w-auto mx-auto" />
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </div>
    </footer>
  )
}
