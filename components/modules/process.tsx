"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Apply online",
    description:
      "Complete our streamlined application in minutes. We only request essential business information to get you started.",
    image: "/step-apply.jpg",
  },
  {
    number: "02",
    title: "Quick review",
    description:
      "Our underwriting team analyzes your application using advanced data insights. Most decisions are made within 24 hours.",
    image: "/step-review.jpg",
  },
  {
    number: "03",
    title: "Get funded",
    description:
      "Once approved, funds are deposited directly to your account. Put your capital to work immediately.",
    image: "/step-funded.jpg",
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};



export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white px-6 py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600">
            <span
              className="relative flex h-2 w-2"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            How it works
          </span>
          <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            Funding in three simple steps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-zinc-500 lg:text-base">
            We&apos;ve streamlined the lending process to get capital into your
            hands faster than traditional lenders.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="group"
            >
              <div className="h-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    priority={step.number === "01"}
                    loading={step.number === "01" ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-semibold text-zinc-900 shadow-sm">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
            Start your application
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
