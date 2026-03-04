"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const crmQuestions = [
  {
    question: "What is Arkview CRM?",
    answer:
      "Arkview is a B2B CRM built for revenue teams. It centralizes your pipeline, contacts, and activity in one place and gives you dashboards for forecasting, win rates, and deal hygiene so you can close more predictably.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Starter is free forever for up to 3 users. Team is $29 per user per month with advanced dashboards, API access, and priority support. Enterprise is custom pricing with SSO, dedicated success, and SLA—contact sales for a quote.",
  },
  {
    question: "Can I import my existing data?",
    answer:
      "Yes. You can import contacts, accounts, and deals via CSV or our API. We support migrations from Salesforce, HubSpot, Pipedrive, and other CRMs. Our team can help with a one-time migration plan on Team and Enterprise.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We’re SOC 2 Type II compliant and use encryption in transit and at rest. You get granular RBAC, audit logs, and optional regional data residency. Enterprise plans can add SSO/SAML and stricter compliance controls.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We integrate with email (Gmail, Outlook), calendar, and popular tools via API and webhooks. Enterprise includes custom integrations and a dedicated success manager to align with your stack.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes. Start a free trial on Team—no credit card required. You get full access for 14 days. For a guided walkthrough and custom migration plan, book a demo with our team.",
  },
];

export function Questions() {
  return (
    <section className="border-t border-zinc-100 bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
          Everything you need to know about Arkview CRM.
        </p>
        <Accordion type="single" collapsible className="mt-12">
          {crmQuestions.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-zinc-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
