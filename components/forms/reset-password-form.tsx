"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const inputClass =
  "block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"

export function ResetPasswordForm({
  className = "",
  ...props
}: React.ComponentProps<"form">) {
  const [step, setStep] = useState<"email" | "code" | "password">("email")
  const [email, setEmail] = useState("")

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]')
    if (emailInput?.value) {
      setEmail(emailInput.value)
      setStep("code")
    }
  }

  function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget
    const codeInput = form.querySelector<HTMLInputElement>('input[name="verificationCode"]')
    if (codeInput?.value?.trim()) {
      setStep("password")
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step === "email") {
      handleEmailSubmit(e)
    } else if (step === "code") {
      handleCodeSubmit(e)
    } else {
      // Password step: would call API to reset password, then redirect to login
      const form = e.currentTarget
      const password = form.querySelector<HTMLInputElement>('input[name="password"]')?.value
      const confirm = form.querySelector<HTMLInputElement>('input[name="confirmPassword"]')?.value
      if (password && confirm && password === confirm) {
        // TODO: call reset API
        window.location.href = "/login"
      }
    }
  }

  return (
    <form
      className={`flex flex-col gap-6 ${className}`.trim()}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {step === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold text-zinc-900">
                  Reset your password
                </h1>
                <p className="text-sm text-zinc-500 text-balance">
                  Enter your email and we&apos;ll let you set a new password
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reset-email"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Email
                </label>
                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Continue
              </button>
            </motion.div>
          )}
          {step === "code" && (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold text-zinc-900">
                  Check your email
                </h1>
                <p className="text-sm text-zinc-500 text-balance">
                  We sent a verification code to{" "}
                  <span className="font-medium text-zinc-700">{email}</span>
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="verification-code"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Verification code
                </label>
                <input
                  id="verification-code"
                  name="verificationCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Enter 6-digit code"
                  required
                  maxLength={6}
                  className={inputClass}
                />
                <p className="text-xs text-zinc-500">
                  Didn&apos;t receive it? Check spam or{" "}
                  <button
                    type="button"
                    className="font-medium text-zinc-700 underline underline-offset-2 hover:no-underline"
                  >
                    resend code
                  </button>
                </p>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Verify
              </button>
            </motion.div>
          )}
          {step === "password" && (
            <motion.div
              key="password"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold text-zinc-900">
                  Create new password
                </h1>
                <p className="text-sm text-zinc-500 text-balance">
                  Enter your new password below
                </p>
                {email && (
                  <p className="text-xs text-zinc-400 mt-1">{email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-zinc-700"
                >
                  New password
                </label>
                <input
                  id="new-password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  className={inputClass}
                  placeholder="At least 8 characters"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  required
                  minLength={8}
                  className={inputClass}
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Reset password
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="text-center text-sm text-zinc-500">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-medium text-zinc-900 underline underline-offset-4 hover:no-underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}
