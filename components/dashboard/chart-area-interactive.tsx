"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", revenue: 18420, expenses: 14200 },
  { date: "2024-04-02", revenue: 17980, expenses: 9800 },
  { date: "2024-04-03", revenue: 19110, expenses: 12150 },
  { date: "2024-04-04", revenue: 17350, expenses: 8900 },
  { date: "2024-04-05", revenue: 20560, expenses: 17600 },
  { date: "2024-04-06", revenue: 14890, expenses: 7200 },
  { date: "2024-04-07", revenue: 15220, expenses: 7600 },

  { date: "2024-04-08", revenue: 21240, expenses: 13400 },
  { date: "2024-04-09", revenue: 21980, expenses: 9900 },
  { date: "2024-04-10", revenue: 19870, expenses: 18800 },
  { date: "2024-04-11", revenue: 23120, expenses: 11200 },
  { date: "2024-04-12", revenue: 24750, expenses: 26500 },
  { date: "2024-04-13", revenue: 16040, expenses: 8400 },
  { date: "2024-04-14", revenue: 15890, expenses: 9100 },

  { date: "2024-04-15", revenue: 23860, expenses: 14700 },
  { date: "2024-04-16", revenue: 25240, expenses: 10100 },
  { date: "2024-04-17", revenue: 24410, expenses: 12800 },
  { date: "2024-04-18", revenue: 26190, expenses: 9400 },
  { date: "2024-04-19", revenue: 27350, expenses: 28900 },
  { date: "2024-04-20", revenue: 17020, expenses: 8300 },
  { date: "2024-04-21", revenue: 16870, expenses: 8700 },

  { date: "2024-04-22", revenue: 28410, expenses: 13900 },
  { date: "2024-04-23", revenue: 27680, expenses: 22100 },
  { date: "2024-04-24", revenue: 30110, expenses: 11800 },
  { date: "2024-04-25", revenue: 29540, expenses: 9700 },
  { date: "2024-04-26", revenue: 31820, expenses: 25400 },
  { date: "2024-04-27", revenue: 18230, expenses: 7600 },
  { date: "2024-04-28", revenue: 17690, expenses: 8200 },

  { date: "2024-04-29", revenue: 30980, expenses: 14600 },
  { date: "2024-04-30", revenue: 33420, expenses: 15800 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--primary)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = React.useMemo(() => {
    const dates = chartData.map((item) => new Date(item.date))
    const referenceDate = new Date(Math.max(...dates.map(Number)))
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return chartData.filter((item) => new Date(item.date) >= startDate)
  }, [timeRange])

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Revenue & Expenses</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Revenue and expenses for the selected period
          </span>
          <span className="@[540px]/card:hidden">Selected period</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillExpenses)"
              stroke="var(--color-expenses)"
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
