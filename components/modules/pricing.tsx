"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For individuals and small teams getting started.",
    features: ["Up to 3 users", "Pipeline & contacts", "Basic dashboards", "Email support"],
    cta: "Start free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$29",
    period: "per user / month",
    description: "For growing sales teams that need more power.",
    features: [
      "Unlimited users",
      "Advanced dashboards",
      "Custom fields",
      "API access",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large orgs with advanced security and compliance.",
    features: [
      "Everything in Team",
      "SSO & SAML",
      "Dedicated success manager",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact sales",
    href: "/contact",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1220px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Start free. Scale as your team grows. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-200/30"
                  : "border-zinc-200/80 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-3 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-3xl font-bold tracking-tight ${
                    plan.highlighted ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-zinc-400" : "text-zinc-500"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${plan.highlighted ? "text-zinc-300" : "text-zinc-600"}`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlighted ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    <span className="text-zinc-400" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
