"use client"

import * as React from "react"
import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const STEPS = [
  "Application",
  "Under review",
  "Options presented",
  "Closing",
  "Funded",
] as const

export type ProgressStep = (typeof STEPS)[number]

interface ProgressProps {
  currentStep?: ProgressStep
  className?: string
}

export function Progress({ currentStep = "Application", className }: ProgressProps) {
  const currentIndex = STEPS.indexOf(currentStep)

  return (
    <Card
      className={cn(
        "@container/card bg-gradient-to-t from-primary/5 to-card shadow-xs",
        className
      )}
    >
      <CardHeader>
        <CardDescription>Application progress</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {currentStep}
        </CardTitle>
        <CardAction>
          <div className="flex flex-wrap items-center gap-3">
            <span
              role="status"
              className="flex items-center gap-2 text-sm font-medium text-zinc-600"
              aria-label="In progress"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span>In progress</span>
            </span>
            <Badge variant="outline">
              Step {currentIndex + 1}/{STEPS.length}
            </Badge>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="px-6 pt-2">
        {/* Single grid: no gap, columns can shrink on mobile so lines stay flush */}
        <div
          className="grid w-full grid-cols-[repeat(9,minmax(0,1fr))] items-center gap-0"
          style={{
            gridTemplateRows: "2.5rem auto",
          }}
        >
          {/* Row 1: bubbles and connectors */}
          {STEPS.map((step, index) => {
            const isCompleted = index < currentIndex
            const isCurrent = index === currentIndex
            const isPending = index > currentIndex

            return (
              <React.Fragment key={step}>
                <div className="relative z-10 flex h-10 min-w-0 items-center justify-center overflow-visible">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                      isCompleted &&
                        "border-primary bg-primary text-primary-foreground",
                      isCurrent &&
                        "border-primary bg-primary text-primary-foreground ring-4 ring-primary/20",
                      isPending &&
                        "border-muted-foreground/30 bg-muted/50 text-muted-foreground"
                    )}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    {isCompleted ? (
                      <svg
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="relative z-0 flex h-10 min-w-0 items-center overflow-hidden">
                    <span
                      className={cn(
                        "block h-0.5 w-full rounded-full transition-colors",
                        currentIndex > index ? "bg-primary" : "bg-zinc-200 dark:bg-zinc-700"
                      )}
                      aria-hidden
                    />
                  </div>
                )}
              </React.Fragment>
            )
          })}
          {/* Row 2: labels (same column positions as bubbles) */}
          {STEPS.map((step, index) => {
            const isCurrent = index === currentIndex
            const isCompleted = index < currentIndex
            const isPending = index > currentIndex
            const colStart = index * 2 + 1
            return (
              <span
                key={`label-${step}`}
                className={cn(
                  "mt-2 text-center text-xs font-medium sm:text-sm",
                  isCurrent && "text-foreground",
                  isCompleted && "text-muted-foreground",
                  isPending && "text-muted-foreground/70"
                )}
                style={{ gridColumn: colStart, gridRow: 2 }}
              >
                {step}
              </span>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {currentStep} <IconTrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">Application pipeline</div>
      </CardFooter>
    </Card>
  )
}
