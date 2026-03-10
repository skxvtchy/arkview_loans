"use client"

import { useState, useCallback, memo, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Star, Shield, ExternalLink, ChevronDown } from "lucide-react"
import Iridescence from "../../../components/ui/iridesence"

type QuestionKey =
  | "amountRequesting"
  | "businessName"
  | "annualRevenue"
  | "annualProfit"
  | "industry"
  | "businessStartDate"
  | "state"
  | "entityType"
  | "isNonProfit"
  | "isFranchise"
  | "invoicesCustomers"
  | "creditScoreRange"
  | "hadBankruptcy"
  | "loanPurpose"
  | "priority"

const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
]

const questions: {
  key: QuestionKey
  label: string
  helper?: string
  type: "number" | "text" | "month" | "select" | "yesno"
  options?: { value: string; label: string }[]
  required?: boolean
}[] = [
  {
    key: "amountRequesting",
    label: "How much are you requesting?",
    helper: "How much funding does your business need?",
    type: "number",
    required: true,
  },
  {
    key: "businessName",
    label: "What's your business called?",
    helper: "Enter the legal name of your business.",
    type: "text",
    required: true,
  },
  {
    key: "annualRevenue",
    label: "How much does your business make annually?",
    helper: "Your total annual revenue for the last 12 months.",
    type: "number",
    required: true,
  },
  {
    key: "annualProfit",
    label: "What's your annual profit?",
    helper: "Profit after expenses for the last 12 months.",
    type: "number",
    required: true,
  },
  {
    key: "industry",
    label: "What industry are you in?",
    helper: "Choose the category that best describes your business.",
    type: "select",
    options: [
      { value: "retail", label: "Retail" },
      { value: "restaurant", label: "Restaurant / Food" },
      { value: "services", label: "Professional services" },
      { value: "construction", label: "Construction" },
      { value: "ecommerce", label: "E‑commerce" },
      { value: "healthcare", label: "Healthcare" },
      { value: "other", label: "Other" },
    ],
    required: true,
  },
  {
    key: "businessStartDate",
    label: "When did your business start?",
    helper: "Month and year you first started operating.",
    type: "month",
    required: true,
  },
  {
    key: "state",
    label: "Where is your business registered?",
    helper: "Select the state where your business is formed.",
    type: "select",
    options: US_STATES,
    required: true,
  },
  {
    key: "entityType",
    label: "What's your business entity type?",
    type: "select",
    options: [
      { value: "sole_prop", label: "Sole proprietor" },
      { value: "llc", label: "LLC" },
      { value: "corp", label: "Corporation" },
      { value: "partnership", label: "Partnership" },
      { value: "nonprofit", label: "Non‑profit" },
      { value: "other", label: "Other" },
    ],
    required: true,
  },
  {
    key: "isNonProfit",
    label: "Is your business a non‑profit?",
    type: "yesno",
    required: true,
  },
  {
    key: "isFranchise",
    label: "Is your business a franchise?",
    type: "yesno",
    required: true,
  },
  {
    key: "invoicesCustomers",
    label: "Do you invoice your customers?",
    type: "yesno",
    required: true,
  },
  {
    key: "hadBankruptcy",
    label: "Have you ever had a bankruptcy?",
    type: "yesno",
    required: true,
  },
  {
    key: "creditScoreRange",
    label: "What's your personal credit score range?",
    helper: "An estimate is fine.",
    type: "select",
    options: [
      { value: "720+", label: "720+" },
      { value: "660-719", label: "660–719" },
      { value: "600-659", label: "600–659" },
      { value: "<600", label: "Below 600" },
    ],
    required: true,
  },
  {
    key: "loanPurpose",
    label: "What's the main purpose of this funding?",
    type: "select",
    options: [
      { value: "expansion", label: "Expansion" },
      { value: "working_capital", label: "Working capital" },
      { value: "payroll", label: "Payroll" },
      { value: "purchase_business", label: "Purchase a business" },
      { value: "equipment", label: "Equipment" },
      { value: "real_estate", label: "Real estate" },
      { value: "start_business", label: "Start a business" },
      { value: "finance_ar", label: "Finance accounts receivable" },
      { value: "other", label: "Other" },
    ],
    required: true,
  },
  {
    key: "priority",
    label: "Which is most important to you?",
    type: "select",
    options: [
      { value: "amount", label: "Amount of funds" },
      { value: "speed", label: "Speed of funds" },
      { value: "cost", label: "Cost of funds" },
    ],
    required: true,
  },
]

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]
const CURRENT_YEAR = new Date().getFullYear()
const START_YEAR = CURRENT_YEAR - 50
const YEARS = Array.from({ length: CURRENT_YEAR - START_YEAR + 1 }, (_, i) => CURRENT_YEAR - i)

const MonthYearPicker = memo(function MonthYearPicker({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [monthOpen, setMonthOpen] = useState(false)
  const [yearOpen, setYearOpen] = useState(false)
  const [y, m] = (value || "").split("-")
  const monthNum = m ? parseInt(m, 10) : 0
  const monthLabel = monthNum >= 1 && monthNum <= 12 ? MONTHS[monthNum - 1] : ""
  const yearLabel = y || ""

  const handleMonth = (monthIndex: number) => {
    const newMonth = (monthIndex + 1).toString().padStart(2, "0")
    onChange(`${y || CURRENT_YEAR}-${newMonth}`)
    setMonthOpen(false)
  }
  const handleYear = (year: number) => {
    onChange(`${year}-${m || "01"}`)
    setYearOpen(false)
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative">
        <label className="mb-1.5 block text-xs font-medium text-zinc-500">Month</label>
        <button
          type="button"
          onClick={() => { setMonthOpen((o) => !o); setYearOpen(false) }}
          className={`flex h-[52px] w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium text-zinc-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
            monthLabel ? "border-blue-500 bg-blue-50/50" : "border-zinc-200 bg-white hover:border-zinc-300"
          }`}
        >
          <span className="truncate">{monthLabel || "Select month"}</span>
          <ChevronDown className={`size-5 shrink-0 text-zinc-500 transition-transform ${monthOpen ? "rotate-180" : ""}`} />
        </button>
        {monthOpen && (
          <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-56 overflow-auto rounded-2xl border border-zinc-200 bg-white py-1 shadow-lg ring-1 ring-zinc-100">
            {MONTHS.map((month, i) => (
              <button
                key={month}
                type="button"
                onClick={() => handleMonth(i)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-blue-50 ${
                  monthLabel === month ? "bg-blue-50 text-blue-900" : "text-zinc-900"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <label className="mb-1.5 block text-xs font-medium text-zinc-500">Year</label>
        <button
          type="button"
          onClick={() => { setYearOpen((o) => !o); setMonthOpen(false) }}
          className={`flex h-[52px] w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium text-zinc-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
            yearLabel ? "border-blue-500 bg-blue-50/50" : "border-zinc-200 bg-white hover:border-zinc-300"
          }`}
        >
          <span>{yearLabel || "Select year"}</span>
          <ChevronDown className={`size-5 shrink-0 text-zinc-500 transition-transform ${yearOpen ? "rotate-180" : ""}`} />
        </button>
        {yearOpen && (
          <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-56 overflow-auto rounded-2xl border border-zinc-200 bg-white py-1 shadow-lg ring-1 ring-zinc-100">
            {YEARS.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => handleYear(year)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-blue-50 ${
                  yearLabel === String(year) ? "bg-blue-50 text-blue-900" : "text-zinc-900"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
})

interface QuestionCardProps {
  current: typeof questions[number]
  value: string
  onChange: (value: string) => void
  onBack: () => void
  onNext: () => void
  step: number
  total: number
  disabled: boolean
  isLastStep: boolean
}

const QuestionCard = memo(function QuestionCard({
  current,
  value,
  onChange,
  onBack,
  onNext,
  step,
  total,
  disabled,
  isLastStep,
}: QuestionCardProps) {
  const [selectOpen, setSelectOpen] = useState(false)

  return (
    <div className="relative rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm shadow-zinc-200/60">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-10 right-6 h-16 w-16 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 left-10 h-24 w-24 rounded-full bg-blue-400/10 blur-3xl" />

      <h1 className="text-xl font-semibold tracking-tight text-black">
        {current.label}
      </h1>
      {current.helper && (
        <p className="mt-2 text-sm text-zinc-700 max-w-md leading-relaxed">
          {current.helper}
        </p>
      )}

      <div className="mt-6">
        {current.type === "yesno" ? (
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ].map((option) => {
              const selected = value === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange(option.value)}
                  className={`flex h-[52px] min-w-[140px] items-center justify-center rounded-2xl border px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                    selected
                      ? "border-blue-500 bg-blue-50/50"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        ) : current.type === "select" && current.options ? (
          current.key === "state" ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectOpen((o) => !o)}
                className={`flex h-[52px] w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-medium text-zinc-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                  value
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <span className="truncate">
                  {value ? current.options.find((o) => o.value === value)?.label : "Select an option"}
                </span>
                <ChevronDown className={`size-5 shrink-0 text-zinc-500 transition-transform ${selectOpen ? "rotate-180" : ""}`} />
              </button>
              {selectOpen && (
                <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-auto rounded-2xl border border-zinc-200 bg-white py-1 shadow-lg ring-1 ring-zinc-100">
                  {current.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onChange(opt.value)
                        setSelectOpen(false)
                      }}
                      className={`w-full px-5 py-3 text-left text-sm font-medium transition-colors hover:bg-blue-50 ${
                        value === opt.value ? "bg-blue-50 text-blue-900" : "text-zinc-900"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {current.options.map((opt) => {
                const selected = value === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange(opt.value)}
                    className={`flex min-h-[52px] min-w-[120px] items-center justify-center rounded-2xl border px-4 py-3 text-center text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      selected
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          )
        ) : current.type === "month" ? (
          <MonthYearPicker value={value} onChange={onChange} />
        ) : (
          <div className="mt-1">
            <input
              type={current.type === "number" ? "text" : current.type}
              inputMode={current.type === "number" ? "numeric" : undefined}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-900 placeholder:text-zinc-500 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 h-[52px]"
              placeholder={
                current.key === "amountRequesting"
                  ? "$50,000"
                  : current.key === "annualRevenue"
                  ? "$250,000"
                  : current.key === "annualProfit"
                  ? "$75,000"
                  : current.key === "businessName"
                  ? "Arkview Studio"
                  : ""
              }
            />
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className="text-sm font-semibold text-zinc-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 px-2 py-1"
        >
          {step === 0 ? "" : "← Back"}
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={disabled}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.98]"
        >
          <span>{isLastStep ? "Submit Application" : "Continue →"}</span>
        </button>
      </div>
    </div>
  )
})

QuestionCard.displayName = "QuestionCard"

type Question = (typeof questions)[number]

function getYesNoBatch(step: number): Question[] | null {
  if (questions[step]?.type !== "yesno") return null
  const batch: Question[] = []
  for (let i = step; i < questions.length && questions[i].type === "yesno"; i++) {
    batch.push(questions[i])
  }
  return batch.length > 0 ? batch : null
}

interface YesNoGroupCardProps {
  questions: Question[]
  form: Record<QuestionKey, string>
  onChange: (key: QuestionKey, value: string) => void
  onBack: () => void
  onNext: () => void
  disabled: boolean
  isLastStep: boolean
  stepDisplay: string
}

const YesNoGroupCard = memo(function YesNoGroupCard({
  questions: batch,
  form,
  onChange,
  onBack,
  onNext,
  disabled,
  isLastStep,
  stepDisplay,
}: YesNoGroupCardProps) {
  return (
    <div className="relative rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm shadow-zinc-200/60">
      <div className="pointer-events-none absolute -top-10 right-6 h-16 w-16 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 left-10 h-24 w-24 rounded-full bg-blue-400/10 blur-3xl" />

      <h1 className="text-xl font-semibold tracking-tight text-black">
        A few quick questions
      </h1>
      <p className="mt-2 text-sm text-zinc-700 max-w-md leading-relaxed">
        Answer the following about your business.
      </p>

      <div className="mt-6 space-y-6">
        {batch.map((q) => (
          <div key={q.key}>
            <p className="mb-2 text-sm font-medium text-black">{q.label}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ].map((option) => {
                const value = form[q.key] ?? ""
                const selected = value === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(q.key, option.value)}
                    className={`flex h-[52px] min-w-[140px] items-center justify-center rounded-2xl border px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      selected
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-semibold text-zinc-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 px-2 py-1"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={disabled}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.98]"
        >
          <span>{isLastStep ? "Submit Application" : "Continue →"}</span>
        </button>
      </div>
    </div>
  )
})

function BusinessFundingPageInner() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") ?? undefined

  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Record<QuestionKey, string>>({
    amountRequesting: "",
    businessName: "",
    annualRevenue: "",
    annualProfit: "",
    industry: "",
    businessStartDate: "",
    state: "",
    entityType: "",
    isNonProfit: "",
    isFranchise: "",
    invoicesCustomers: "",
    creditScoreRange: "",
    hadBankruptcy: "",
    loanPurpose: "",
    priority: "",
  })

  const current = questions[step]
  const total = questions.length
  const yesNoBatch = getYesNoBatch(step)
  const yesNoStartIndex = questions.findIndex((q) => q.type === "yesno")
  const yesNoBatchLength = yesNoStartIndex >= 0 ? (getYesNoBatch(yesNoStartIndex)?.length ?? 0) : 0
  const totalDisplay = yesNoBatchLength > 0 ? total - yesNoBatchLength + 1 : total
  const displayStep =
    yesNoBatchLength > 0 && step >= yesNoStartIndex
      ? step === yesNoStartIndex
        ? yesNoStartIndex + 1
        : step - yesNoBatchLength + 2
      : step + 1
  const progress = Math.round((displayStep / totalDisplay) * 100)
  const isLastStep: boolean = yesNoBatch ? step + yesNoBatch.length === total : step === total - 1

  const handleChange = useCallback((value: string) => {
    setForm((prev) => ({ ...prev, [current.key]: value }))
  }, [current.key])

  const handleBatchChange = useCallback((key: QuestionKey, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  const handleNext = useCallback(() => {
    if (yesNoBatch) {
      setStep((s) => s + yesNoBatch.length)
    } else if (step < total - 1) {
      setStep((s) => s + 1)
    } else {
      console.log("Submit payload", { email, ...form })
      // TODO: send to API
    }
  }, [step, total, yesNoBatch, email, form])

  const handleBack = useCallback(() => {
    if (
      yesNoStartIndex >= 0 &&
      yesNoBatchLength > 0 &&
      step === yesNoStartIndex + yesNoBatchLength
    ) {
      setStep(yesNoStartIndex)
    } else if (step > 0) {
      setStep((s) => s - 1)
    }
  }, [step, yesNoStartIndex, yesNoBatchLength])

  const currentValue = form[current.key] ?? ""
  const isDisabled: boolean = yesNoBatch
    ? yesNoBatch.some((q) => !(form[q.key] ?? "").trim())
    : Boolean(current.required && !currentValue.trim().length)

  return (
    <div className="relative min-h-svh overflow-x-hidden">
      {/* Fullscreen iridescence background - fixed so it stays in place when scrolling */}
      <div className="fixed inset-0 -z-10">
        <Iridescence
          color={[1, 1, 1]}
          speed={0.5}
          amplitude={0.5}
          mouseReact={false}
        />
      </div>

      {/* Soft overlays */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[70vw] max-h-[420px] w-[70vw] max-w-[420px] rounded-full bg-blue-500/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 -bottom-32 h-[60vw] max-h-[380px] w-[60vw] max-w-[380px] rounded-full bg-blue-400/10 blur-[100px]"
        aria-hidden
      />

      {/* Centered content */}
      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col px-4 py-6 pb-12 md:px-8 md:pb-16">
        {/* Brand row - same logo as navbar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-black">
            ARKVIEW
          </Link>
          <span className="hidden text-xs font-medium uppercase tracking-wide text-black md:inline">
            Business funding made simple
          </span>
        </div>

        {/* Center card + progress */}
        <div className="flex flex-1 items-center justify-center mt-20">
          <div className="w-full max-w-xl">
            {/* Progress */}
            <div className="mb-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-black">
              <span>Business funding</span>
              <span className="text-black">
                {displayStep} of {totalDisplay}
              </span>
            </div>

            <div className="mb-8 h-2 w-full rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question card or Yes/No group */}
            {yesNoBatch ? (
              <YesNoGroupCard
                questions={yesNoBatch}
                form={form}
                onChange={handleBatchChange}
                onBack={handleBack}
                onNext={handleNext}
                disabled={isDisabled}
                isLastStep={isLastStep}
                stepDisplay={`${displayStep} of ${totalDisplay}`}
              />
            ) : (
              <QuestionCard
                key={current.key}
                current={current}
                value={currentValue}
                onChange={handleChange}
                onBack={handleBack}
                onNext={handleNext}
                step={step}
                total={total}
                disabled={isDisabled}
                isLastStep={isLastStep}
              />
            )}

            <p className="mt-8 text-[11px] text-zinc-600 text-center font-medium">
              Usually takes under 2 minutes • Secure & confidential
            </p>
          </div>
        </div>

        {/* Footer area - centered */}
        <div className="flex w-full flex-col items-center">
          {/* Trust indicators + footer */}
          <div className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-6 border-t border-zinc-200/60 pt-8 pb-6 md:flex-row md:gap-8">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-700">
              <div className="flex items-center gap-2 font-semibold">
                <Star className="size-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                <span>4.9/5 Google Reviews</span>
                <ExternalLink className="size-3" />
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Star className="size-4 fill-current drop-shadow-sm" />
                <span>4.8/5 Trustpilot</span>
                <ExternalLink className="size-3" />
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Shield className="size-4 text-blue-600 drop-shadow-sm" />
                <span>BBB A+</span>
              </div>
            </div>
          </div>

          {/* Copyright + legal */}
          <div className="flex w-full max-w-xl flex-col items-center gap-3 pb-6 text-center text-[10px] text-zinc-500">
            <div>
              Copyright © 2026 Arkview. All Rights Reserved. | 123 Finance Way, Suite 200, New York, NY 10001
            </div>
            {/* Broker disclaimer */}
            <p className="max-w-xl text-xs leading-relaxed text-zinc-600">
              Arkview Capital is not a lender and does not make credit decisions. Loan terms and eligibility are determined by participating lenders. Arkview Capital may receive compensation from lenders for referrals or funded loans. Not all financing options in the market are listed. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>  
          </div>
        </div>
      </div>
    </div>
  )
}

function OnboardingFallback() {
  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <Iridescence color={[1, 1, 1]} speed={0.5} amplitude={0.5} mouseReact={false} />
      </div>
      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col px-4 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-black">
            ARKVIEW
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center mt-20">
          <div className="h-12 w-12 animate-pulse rounded-2xl bg-zinc-200" aria-hidden />
        </div>
      </div>
    </div>
  )
}

export default function BusinessFundingPage() {
  return (
    <Suspense fallback={<OnboardingFallback />}>
      <BusinessFundingPageInner />
    </Suspense>
  )
}
