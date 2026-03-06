"use client";

import { ArrowRight, Star } from "lucide-react";

const MARQUEE_ITEMS = [
  // Text testimonial (dark)
  {
    type: "text" as const,
    quote:
      "The process was seamless—we got approval in under 48 hours. Best experience we've had with a lender.",
    name: "Ann",
    company: "Seven Oaks Partners",
    cta: "Read full story",
  },
  // Video testimonial
  {
    type: "video" as const,
    name: "DeAnna Nunez",
    company: "VitalMind",
    summary: "Grew her advertising and boosted brand awareness",
    gradient: "from-violet-400 to-indigo-600",
  },
  // Metric dark - Trustpilot
  {
    type: "metric-dark" as const,
    value: "19K+",
    label: "five-star reviews",
    showStars: true,
  },
  // Metric light green
  {
    type: "metric-light" as const,
    value: "14+",
    label: "years of experience",
  },
  // Video testimonial
  {
    type: "video" as const,
    name: "Don Harris",
    company: "GKX Martial Arts",
    summary: "Got a $50,000 loan for his martial arts academy.",
    gradient: "from-amber-500 to-orange-600",
  },
  // Metric light green
  {
    type: "metric-light" as const,
    value: "$16M",
    label: "in SMB funding",
  },
  // Metric dark
  {
    type: "metric-dark" as const,
    value: "400,000+",
    label: "small businesses funded",
    showStars: false,
  },
];

function TextTestimonialCard({
  quote,
  name,
  company,
  cta,
}: {
  quote: string;
  name: string;
  company: string;
  cta: string;
}) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-zinc-800 p-6 text-white shadow-xl">
      <p className="text-sm leading-relaxed text-zinc-200 line-clamp-4">{quote}</p>
      <div className="mt-6 flex items-center justify-between gap-2">
        <span className="text-sm font-medium">
          {name}, {company}
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-white hover:underline"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function VideoTestimonialCard({
  name,
  company,
  summary,
  gradient,
}: {
  name: string;
  company: string;
  summary: string;
  gradient: string;
}) {
  return (
    <div className="relative w-[300px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl">
      {/* Mock image / video frame */}
      <div
        className={`flex h-44 w-full items-center justify-center bg-gradient-to-br ${gradient}`}
      >
        <div className="h-20 w-20 rounded-full border-4 border-white/30 bg-white/20" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-zinc-900/90 px-4 py-3 backdrop-blur-sm">
        <p className="font-semibold text-white">
          {name} | {company}
        </p>
        <p className="mt-0.5 text-sm text-zinc-300">{summary}</p>
        <a
          href="#"
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white hover:underline"
        >
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function MetricDarkCard({
  value,
  label,
  showStars,
}: {
  value: string;
  label: string;
  showStars?: boolean;
}) {
  return (
    <div className="flex w-[240px] shrink-0 flex-col rounded-2xl bg-zinc-800 p-6 text-white shadow-xl">
      {showStars && (
        <div className="mb-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-emerald-500 text-emerald-500"
              aria-hidden
            />
          ))}
        </div>
      )}
      <span className="text-3xl font-bold">{value}</span>
      <span className="mt-1 text-sm text-zinc-300">{label}</span>
    </div>
  );
}

function MetricLightCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-[220px] shrink-0 flex-col rounded-2xl bg-emerald-100 p-6 text-zinc-900 shadow-xl">
      <span className="text-3xl font-bold">{value}</span>
      <span className="mt-1 text-sm text-zinc-600">{label}</span>
    </div>
  );
}

function renderMarqueeCard(item: (typeof MARQUEE_ITEMS)[number]) {
  switch (item.type) {
    case "text":
      return (
        <TextTestimonialCard
          quote={item.quote}
          name={item.name}
          company={item.company}
          cta={item.cta}
        />
      );
    case "video":
      return (
        <VideoTestimonialCard
          name={item.name}
          company={item.company}
          summary={item.summary}
          gradient={item.gradient}
        />
      );
    case "metric-dark":
      return (
        <MetricDarkCard
          value={item.value}
          label={item.label}
          showStars={"showStars" in item ? item.showStars : false}
        />
      );
    case "metric-light":
      return (
        <MetricLightCard value={item.value} label={item.label} />
      );
  }
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden border-t border-zinc-200/60 bg-[#fafafa] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            What our customers say
          </h2>
        </div>

        <div className="relative -mx-6 md:-mx-8">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div
              className="flex w-max gap-6 pr-6 animate-marquee"
              style={{ animationDuration: "50s" }}
            >
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="shrink-0">
                  {renderMarqueeCard(item)}
                </span>
              ))}
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`dup-${i}`} className="shrink-0">
                  {renderMarqueeCard(item)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
