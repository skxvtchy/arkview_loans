"use client"

import { motion } from "framer-motion"
import { GalleryVerticalEnd } from "lucide-react"

import { ResetPasswordForm } from "../../../components/forms/reset-password-form"
import Iridescence from "../../../components/ui/iridesence"

const PasswordResetContent = () => {
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
        One of the best, most <span className="text-blue-600">modern</span> payment &amp; HR systems.
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

export default function PasswordResetPage() {
  return (
    <div className="grid h-svh min-h-0 overflow-hidden lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[1, 1, 1]}
            speed={0.5}
            amplitude={0.5}
            mouseReact={false}
          />
        </div>
        <PasswordResetContent />
      </div>
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
        <div className="relative flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}
