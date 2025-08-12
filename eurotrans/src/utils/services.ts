import {
  Car,
  Wrench,
  Paintbrush,
  Search,
  DollarSign,
  Truck,
  Globe,
} from "lucide-react"
import { Service, Translation } from "../types"

export const getServices = (t: Translation): Service[] => [
  { icon: Car, title: t.postAccidentRepairs, description: t.postAccidentDesc },
  { icon: Wrench, title: t.bodyworkServices, description: t.bodyworkDesc },
  { icon: Paintbrush, title: t.automotivePainting, description: t.automotivePaintingDesc },
  { icon: Search, title: t.technicalInspection, description: t.technicalInspectionDesc },
  { icon: Wrench, title: t.generalMechanics, description: t.generalMechanicsDesc },
  { icon: Car, title: t.engineReplacement, description: t.engineReplacementDesc },
  { icon: Wrench, title: t.engineRepairs, description: t.engineRepairsDesc },
  { icon: Car, title: t.courtesyVehicles, description: t.courtesyVehiclesDesc },
  { icon: DollarSign, title: t.vehiclePurchase, description: t.vehiclePurchaseDesc },
  { icon: Truck, title: t.pickupDelivery, description: t.pickupDeliveryDesc },
  { icon: Car, title: t.tradeIn, description: t.tradeInDesc },
  { icon: Globe, title: t.vehicleImport, description: t.vehicleImportDesc },
]
