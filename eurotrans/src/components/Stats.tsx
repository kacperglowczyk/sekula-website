import { Award, Users, Shield } from "lucide-react"
import { Translation } from "../types"

interface StatsProps {
  t: Translation
}

export default function Stats({ t }: StatsProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">{t.yearsExperience}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2000+</h3>
            <p className="text-gray-600">{t.satisfiedCustomers}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">{t.qualityGuarantee}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
