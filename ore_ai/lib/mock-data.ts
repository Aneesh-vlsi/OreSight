// Realistic mock data for OreSight AI — manganese reserve estimation & production analytics.
// Modeled loosely on MOIL Limited's mine network across Maharashtra & Madhya Pradesh.
// All figures are synthetic and for demonstration only.

export type MineStatus = "operational" | "expansion" | "survey"

export interface Mine {
  id: string
  name: string
  state: string
  status: MineStatus
  // relative position on the schematic map (0-100 %)
  x: number
  y: number
  estimatedReserveMt: number // million tonnes (AI-estimated)
  gradePct: number // average Mn grade %
  confidence: number // AI confidence 0-100
  annualProductionKt: number // thousand tonnes / year
}

export const mines: Mine[] = [
  { id: "BAL", name: "Balaghat", state: "Madhya Pradesh", status: "operational", x: 52, y: 34, estimatedReserveMt: 34.8, gradePct: 42.1, confidence: 94, annualProductionKt: 512 },
  { id: "UKW", name: "Ukwa", state: "Madhya Pradesh", status: "operational", x: 47, y: 41, estimatedReserveMt: 12.3, gradePct: 38.7, confidence: 91, annualProductionKt: 168 },
  { id: "MUN", name: "Munsar", state: "Maharashtra", status: "operational", x: 58, y: 55, estimatedReserveMt: 9.7, gradePct: 40.2, confidence: 89, annualProductionKt: 143 },
  { id: "BEL", name: "Beldongri", state: "Maharashtra", status: "operational", x: 61, y: 60, estimatedReserveMt: 4.2, gradePct: 36.9, confidence: 86, annualProductionKt: 61 },
  { id: "GUM", name: "Gumgaon", state: "Maharashtra", status: "expansion", x: 55, y: 63, estimatedReserveMt: 7.8, gradePct: 39.4, confidence: 82, annualProductionKt: 98 },
  { id: "CHK", name: "Chikla", state: "Maharashtra", status: "operational", x: 64, y: 49, estimatedReserveMt: 6.5, gradePct: 41.0, confidence: 88, annualProductionKt: 112 },
  { id: "DON", name: "Dongri Buzurg", state: "Maharashtra", status: "operational", x: 69, y: 57, estimatedReserveMt: 8.9, gradePct: 43.5, confidence: 90, annualProductionKt: 121 },
  { id: "KAN", name: "Kandri", state: "Maharashtra", status: "survey", x: 51, y: 58, estimatedReserveMt: 3.1, gradePct: 37.2, confidence: 71, annualProductionKt: 0 },
  { id: "TIR", name: "Tirodi", state: "Madhya Pradesh", status: "expansion", x: 49, y: 47, estimatedReserveMt: 5.6, gradePct: 38.1, confidence: 79, annualProductionKt: 74 },
  { id: "PARSO", name: "Parsoda", state: "Maharashtra", status: "survey", x: 66, y: 66, estimatedReserveMt: 2.4, gradePct: 35.8, confidence: 68, annualProductionKt: 0 },
]

export const totalReserveMt = mines.reduce((s, m) => s + m.estimatedReserveMt, 0)
export const totalAnnualProductionKt = mines.reduce((s, m) => s + m.annualProductionKt, 0)
export const avgGrade =
  mines.reduce((s, m) => s + m.gradePct, 0) / mines.length
export const avgConfidence =
  mines.reduce((s, m) => s + m.confidence, 0) / mines.length

// ---- Production: actual vs AI forecast vs target (monthly, thousand tonnes) ----
export interface ProductionPoint {
  month: string
  actual: number | null
  forecast: number
  target: number
}

export const productionTrend: ProductionPoint[] = [
  { month: "Apr", actual: 118, forecast: 120, target: 125 },
  { month: "May", actual: 124, forecast: 123, target: 125 },
  { month: "Jun", actual: 121, forecast: 126, target: 128 },
  { month: "Jul", actual: 130, forecast: 129, target: 128 },
  { month: "Aug", actual: 127, forecast: 131, target: 130 },
  { month: "Sep", actual: 134, forecast: 133, target: 132 },
  { month: "Oct", actual: 138, forecast: 137, target: 135 },
  { month: "Nov", actual: null, forecast: 141, target: 138 },
  { month: "Dec", actual: null, forecast: 144, target: 140 },
  { month: "Jan", actual: null, forecast: 148, target: 142 },
  { month: "Feb", actual: null, forecast: 151, target: 145 },
  { month: "Mar", actual: null, forecast: 156, target: 148 },
]

// ---- Reserve estimation by ore grade band (million tonnes) ----
export const gradeDistribution = [
  { band: "High (>42% Mn)", reserve: 38.4, fill: "var(--chart-1)" },
  { band: "Medium (38-42%)", reserve: 31.7, fill: "var(--chart-2)" },
  { band: "Low (34-38%)", reserve: 22.9, fill: "var(--chart-3)" },
  { band: "Sub-grade (<34%)", reserve: 12.3, fill: "var(--chart-4)" },
]

// ---- Satellite-derived spectral indices over time (normalized 0-1) ----
export interface SpectralPoint {
  period: string
  ferricIndex: number // iron-oxide alteration proxy
  clayIndex: number // hydrothermal clay proxy
  vegetation: number // NDVI (lower = more exposed ore body)
}

export const spectralTrend: SpectralPoint[] = [
  { period: "2019", ferricIndex: 0.42, clayIndex: 0.31, vegetation: 0.68 },
  { period: "2020", ferricIndex: 0.45, clayIndex: 0.33, vegetation: 0.64 },
  { period: "2021", ferricIndex: 0.51, clayIndex: 0.36, vegetation: 0.58 },
  { period: "2022", ferricIndex: 0.57, clayIndex: 0.4, vegetation: 0.51 },
  { period: "2023", ferricIndex: 0.63, clayIndex: 0.44, vegetation: 0.46 },
  { period: "2024", ferricIndex: 0.69, clayIndex: 0.47, vegetation: 0.41 },
  { period: "2025", ferricIndex: 0.74, clayIndex: 0.5, vegetation: 0.37 },
]

// ---- AI model performance / prospectivity scoring ----
export const satelliteScenes = 2418

export const modelMetrics = [
  { label: "Reserve estimation accuracy", value: 93.6, suffix: "%", pct: 93.6 },
  { label: "Prospectivity precision", value: 88.1, suffix: "%", pct: 88.1 },
  { label: "Production forecast (100 − MAPE)", value: 95.8, suffix: "%", pct: 95.8 },
  { label: "Anomaly detection recall", value: 90.3, suffix: "%", pct: 90.3 },
]

// ---- Quarterly production by mine (thousand tonnes) ----
export const productionByMine = [
  { quarter: "Q1 24", balaghat: 121, dongriBuzurg: 29, ukwa: 40, chikla: 27, gumgaon: 22 },
  { quarter: "Q2 24", balaghat: 126, dongriBuzurg: 30, ukwa: 41, chikla: 28, gumgaon: 24 },
  { quarter: "Q3 24", balaghat: 124, dongriBuzurg: 31, ukwa: 42, chikla: 28, gumgaon: 23 },
  { quarter: "Q4 24", balaghat: 130, dongriBuzurg: 32, ukwa: 43, chikla: 29, gumgaon: 25 },
  { quarter: "Q1 25", balaghat: 133, dongriBuzurg: 33, ukwa: 43, chikla: 30, gumgaon: 26 },
  { quarter: "Q2 25", balaghat: 138, dongriBuzurg: 34, ukwa: 44, chikla: 31, gumgaon: 27 },
]

// ---- Domestic demand vs. supply (million tonnes / year) ----
export const demandVsSupply = [
  { year: "2022", demand: 6.4, supply: 5.1 },
  { year: "2023", demand: 6.8, supply: 5.3 },
  { year: "2024", demand: 7.3, supply: 5.6 },
  { year: "2025", demand: 7.9, supply: 5.9 },
]

// ---- Reserve depletion forecast with 90% confidence band (million tonnes) ----
// `lower` is the invisible base; `span` = upper bound − lower bound (the shaded band).
export const reserveForecast = [
  { year: "2025", estimate: 52, lower: 50, span: 4 },
  { year: "2027", estimate: 47, lower: 44, span: 6 },
  { year: "2029", estimate: 41, lower: 37, span: 8 },
  { year: "2031", estimate: 34, lower: 29, span: 11 },
  { year: "2033", estimate: 27, lower: 21, span: 13 },
  { year: "2035", estimate: 20, lower: 13, span: 15 },
  { year: "2037", estimate: 13, lower: 6, span: 17 },
  { year: "2040", estimate: 6, lower: 1, span: 18 },
]

// ---- AI-ranked exploration targets ----
export interface ExplorationTarget {
  id: string
  name: string
  score: number // prospectivity 0-100
  expectedMt: number
  recommended: boolean
  rationale: string
}

export const explorationTargets: ExplorationTarget[] = [
  { id: "P-01", name: "Balaghat North Ridge", score: 91, expectedMt: 5.2, recommended: true, rationale: "Strong ferric alteration along a structural lineament with historic float samples." },
  { id: "P-02", name: "Dongri East Extension", score: 87, expectedMt: 3.4, recommended: true, rationale: "Gossan signature continuous with the producing Dongri Buzurg ore body." },
  { id: "P-03", name: "Chikla South Corridor", score: 79, expectedMt: 4.1, recommended: false, rationale: "Clay alteration coincident with a magnetic low; warrants ground follow-up." },
  { id: "P-04", name: "Tirodi West Block", score: 73, expectedMt: 2.8, recommended: false, rationale: "Vegetation suppression over an interpreted lineament intersection." },
]

export interface Prospect {
  id: string
  zone: string
  score: number // 0-100 prospectivity
  areaKm2: number
  predictedGradePct: number
  drivers: string[]
}

export const prospects: Prospect[] = [
  { id: "P-01", zone: "Balaghat North Ridge", score: 91, areaKm2: 6.8, predictedGradePct: 43.2, drivers: ["Ferric alteration", "Structural lineament", "Historic float"] },
  { id: "P-02", zone: "Dongri East Extension", score: 87, areaKm2: 4.1, predictedGradePct: 42.0, drivers: ["Ferric alteration", "Gossan signature"] },
  { id: "P-03", zone: "Chikla South Corridor", score: 79, areaKm2: 5.3, predictedGradePct: 40.5, drivers: ["Clay alteration", "Magnetic low"] },
  { id: "P-04", zone: "Tirodi West Block", score: 73, areaKm2: 3.6, predictedGradePct: 38.9, drivers: ["Vegetation suppression", "Structural lineament"] },
  { id: "P-05", zone: "Kandri Deep", score: 64, areaKm2: 2.9, predictedGradePct: 37.4, drivers: ["Geophysical anomaly"] },
]

// ---- Production shortfall alerts ----
export type AlertLevel = "critical" | "warning" | "info"
export interface Alert {
  id: string
  level: AlertLevel
  mine: string
  message: string
  time: string
}

export const alerts: Alert[] = [
  { id: "a1", level: "critical", mine: "Gumgaon", message: "Projected 8.4% shortfall vs. quarterly target — face development lagging.", time: "2h ago" },
  { id: "a2", level: "warning", mine: "Beldongri", message: "Grade dilution detected in Bench 3; blend ratio adjustment advised.", time: "6h ago" },
  { id: "a3", level: "info", mine: "Balaghat", message: "New high-prospectivity zone (P-01) flagged from Nov satellite pass.", time: "1d ago" },
  { id: "a4", level: "warning", mine: "Munsar", message: "Haulage cycle time up 11% — forecast confidence reduced.", time: "1d ago" },
  { id: "a5", level: "info", mine: "Dongri Buzurg", message: "Reserve model re-estimated: +0.6 Mt after drillhole assimilation.", time: "2d ago" },
]

export const statusLabels: Record<MineStatus, string> = {
  operational: "Operational",
  expansion: "Expansion",
  survey: "Under Survey",
}
