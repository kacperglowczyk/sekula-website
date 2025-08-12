import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Translation } from "../types"

interface ContactProps {
  t: Translation
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contactSubtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.phone}</h3>
                <p className="text-gray-600">+48 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.email}</h3>
                <p className="text-gray-600">info@sekula.pl</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.address}</h3>
                <p className="text-gray-600">
                  ul. Przykładowa 123
                  <br />
                  00-000 Warszawa, Polska
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.hours}</h3>
                <div className="text-gray-600 space-y-1">
                  <p>{t.mondayFriday}: 8:00 - 18:00</p>
                  <p>{t.saturday}: 9:00 - 15:00</p>
                  <p>
                    {t.sunday}: {t.closed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
