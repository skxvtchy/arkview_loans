"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { GalleryVerticalEnd } from "lucide-react"

import Iridescence from "@/components/ui/iridesence"

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

const questions: {
  key: QuestionKey
  label: string
  helper?: string
  type: "number" | "text" | "month" | "select"
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
    label: "What’s your business called?",
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
    label: "What’s your annual profit?",
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
    helper: "Enter the state where your business is formed.",
    type: "text",
    required: true,
  },
  {
    key: "entityType",
    label: "What’s your business entity type?",
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
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    required: true,
  },
  {
    key: "isFranchise",
    label: "Is your business a franchise?",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    required: true,
  },
  {
    key: "invoicesCustomers",
    label: "Do you invoice your customers?",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    required: true,
  },
  {
    key: "creditScoreRange",
    label: "What’s your personal credit score range?",
    helper: "An estimate is fine.",
    type: "select",
    options: [
      { value: "720+", label: "720+" },
      { value: "660-719", label: "660–719" },
      { value: "600-659", label: "600–659" },
      { value: "<600", label: "Below 600" },
      { value: "not_sure", label: "Not sure" },
    ],
    required: true,
  },
  {
    key: "hadBankruptcy",
    label: "Have you ever had a bankruptcy?",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    required: true,
  },
  {
    key: "loanPurpose",
    label: "What’s the main purpose of this funding?",
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

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 z-10 flex flex-col items-center justify-center px-12 text-center"
    >
      <motion.p
        variants={itemVariants}
        className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-4xl"
      >
        One of the best, most{" "}
        <span className="text-blue-600">modern</span> payment &amp; HR
        systems.
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="mt-6 text-sm font-medium uppercase tracking-wide text-zinc-500 md:text-base"
      >
        Built for teams that scale.
      </motion.p>
    </motion.div>
  )
}

export default function BusinessFundingPage() {
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
  const progress = Math.round(((step + 1) / total) * 100)

  const handleChange = (value: string) => {
    setForm((prev) => ({ ...prev, [current.key]: value }))
  }

  const handleNext = () => {
    if (step < total - 1) {
      setStep((s) => s + 1)
    } else {
      console.log("Submit payload", { email, ...form })
      // TODO: send to API
    }
  }

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const isDisabled =
    current.required && !form[current.key]?.toString().trim().length

  return (
    <div className="grid min-h-svh lg:grid-cols-2 overflow-hidden bg-zinc-50">
      {/* Left column with Iridescence + hero */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[1, 1, 1]}
            speed={0.5}
            amplitude={0.5}
            mouseReact={false}
          />
        </div>
        <HeroContent />
      </div>

      {/* Right column: brand + one-question flow, same scheme */}
      <div className="relative flex flex-col gap-4 overflow-hidden p-6 md:p-10">
        {/* Subtle blue radial gradients */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[60vw] max-h-[400px] w-[60vw] max-w-[400px] rounded-full bg-blue-500/10 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[50vw] max-h-[320px] w-[50vw] max-w-[320px] rounded-full bg-blue-400/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-10 top-1/2 h-[40vw] max-h-[280px] w-[40vw] max-w-[280px] -translate-y-1/2 rounded-full bg-blue-600/8 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 top-1/3 h-[35vw] max-h-[240px] w-[35vw] max-w-[240px] rounded-full bg-blue-300/10 blur-[70px]"
          aria-hidden
        />

        {/* Brand row */}
        <div className="relative flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>

        {/* Flow container */}
        <div className="relative mt-6 flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            {/* Progress */}
            <div className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-wide text-zinc-400">
              <span>Business funding</span>
              <span className="text-zinc-500">
                {step + 1} of {total}
              </span>
            </div>

            <div className="mb-6 h-1.5 w-full rounded-full bg-zinc-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question card */}
            <div className="relative rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm">
              <div className="absolute -top-10 right-6 h-16 w-16 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-14 left-10 h-24 w-24 rounded-full bg-blue-400/10 blur-3xl" />

              <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
                {current.label}
              </h1>
              {current.helper && (
                <p className="mt-2 text-sm text-zinc-500 max-w-md">
                  {current.helper}
                </p>
              )}

              <div className="mt-6">
                {current.type === "select" && current.options ? (
                  <div className="grid grid-cols-1 gap-2">
                    {current.options.map((opt) => {
                      const selected = form[current.key] === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleChange(opt.value)}
                          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-all ${
                            selected
                              ? "border-blue-500 bg-blue-50 text-zinc-900 shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
                              : "border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:border-blue-200 hover:bg-blue-50/60"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {selected && (
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="mt-1">
                    <input
                      type={current.type === "month" ? "month" : "text"}
                      inputMode={
                        current.type === "number" ? "numeric" : undefined
                      }
                      value={form[current.key] ?? ""}
                      onChange={(e) => handleChange(e.target.value)}
                      className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      placeholder={
                        current.key === "amountRequesting"
                          ? "e.g. 50000"
                          : current.key === "annualRevenue"
                          ? "e.g. 250000"
                          : current.key === "annualProfit"
                          ? "e.g. 75000"
                          : current.key === "businessName"
                          ? "e.g. Acme Inc."
                          : current.key === "state"
                          ? "e.g. NY"
                          : ""
                      }
                    />
                  </div>
                )}
              </div>

              {/* Nav buttons */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="text-xs font-medium text-zinc-400 hover:text-zinc-700 disabled:opacity-40 disabled:hover:text-zinc-400"
                >
                  {step === 0 ? "" : "Back"}
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isDisabled}
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-40"
                >
                  {step === total - 1 ? "Submit" : "Continue"}
                </button>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-zinc-500 text-center">
              It usually takes under 2 minutes to finish these questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
