import { ChevronDown } from "lucide-react"
import { Translation } from "../types"
import Image from "next/image"
import businessLocation from '../../assets/business-location.jpeg'

interface HeroProps {
  t: Translation
}

export default function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={businessLocation}
        alt="Business location background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{t.heroTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            {t.getQuote}
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            {t.callNow}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}
