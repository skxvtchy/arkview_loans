"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const lendingQuestions = [
  {
    question: "What is a lending broker?",
    answer:
      "We connect businesses with lenders that fit their needs. As a broker, we don't lend directly—we help you compare options, complete one application, and get matched with the right funding so you can focus on running your business instead of shopping around.",
  },
  {
    question: "What types of funding do you offer?",
    answer:
      "We work with a range of lenders to offer term loans, lines of credit, equipment financing, and other business funding. Amounts and terms depend on your business profile and the lender. We'll match you with options that make sense for your situation.",
  },
  {
    question: "How long does it take to get funded?",
    answer:
      "Many applicants get a decision within 24–48 hours. Once approved, funding can land in your account in as little as a few days, depending on the product and lender. We'll keep you updated at each step.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "Checking your rate or starting an application typically uses a soft inquiry, which does not impact your personal credit score. If you move forward with a specific lender, they may run a hard pull—we'll explain before that happens.",
  },
  {
    question: "What do I need to apply?",
    answer:
      "You'll need basic business details (name, industry, time in business, revenue), ownership information, and sometimes bank or financial statements. We only ask for what's needed to match you with the right options.",
  },
  {
    question: "Is there a fee to use your service?",
    answer:
      "There is no upfront fee to apply or check your options through us. If you accept an offer from a lender we connect you with, that lender may charge interest and/or fees as disclosed in your agreement—we're transparent about how we're compensated.",
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
          Everything you need to know about business funding and how we work.
        </p>
        <Accordion type="single" collapsible className="mt-12">
          {lendingQuestions.map((item, i) => (
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
