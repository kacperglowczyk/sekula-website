export type Language = "pl" | "en" | "ua" | "ka"

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Translation {
  // Navigation
  home: string
  services: string
  about: string
  contact: string

  // Hero section
  heroTitle: string
  getQuote: string
  callNow: string

  // Stats
  yearsExperience: string
  satisfiedCustomers: string
  qualityGuarantee: string

  // Services
  servicesTitle: string
  servicesSubtitle: string

  // Service items
  postAccidentRepairs: string
  postAccidentDesc: string
  bodyworkServices: string
  bodyworkDesc: string
  automotivePainting: string
  automotivePaintingDesc: string
  technicalInspection: string
  technicalInspectionDesc: string
  generalMechanics: string
  generalMechanicsDesc: string
  engineReplacement: string
  engineReplacementDesc: string
  engineRepairs: string
  engineRepairsDesc: string
  courtesyVehicles: string
  courtesyVehiclesDesc: string
  vehiclePurchase: string
  vehiclePurchaseDesc: string
  pickupDelivery: string
  pickupDeliveryDesc: string
  tradeIn: string
  tradeInDesc: string
  vehicleImport: string
  vehicleImportDesc: string

  // About section
  aboutTitle: string
  aboutSubtitle: string
  expertTechnicians: string
  expertTechniciansDesc: string
  stateOfArt: string
  stateOfArtDesc: string
  qualityParts: string
  qualityPartsDesc: string
  customerSatisfaction: string
  customerSatisfactionDesc: string

  // Contact section
  contactTitle: string
  contactSubtitle: string
  phone: string
  email: string
  address: string
  hours: string
  mondayFriday: string
  saturday: string
  sunday: string
  closed: string

  // Form
  name: string
  emailAddress: string
  message: string
  sendMessage: string

  // Footer
  footerText: string

  // Emergency
  emergency: string
  emergencyNumber: string
}
