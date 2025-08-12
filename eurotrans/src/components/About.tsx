import { Users, Wrench, Shield, Star } from "lucide-react"
import { Translation } from "../types"

interface AboutProps {
  t: Translation
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.aboutSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.expertTechnicians}</h3>
            <p className="text-gray-600">{t.expertTechniciansDesc}</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.stateOfArt}</h3>
            <p className="text-gray-600">{t.stateOfArtDesc}</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.qualityParts}</h3>
            <p className="text-gray-600">{t.qualityPartsDesc}</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.customerSatisfaction}</h3>
            <p className="text-gray-600">{t.customerSatisfactionDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
