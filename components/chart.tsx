"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", profit: 222, lose: 150 },
  { date: "2024-04-02", profit: 97, lose: 180 },
  { date: "2024-04-03", profit: 167, lose: 120 },
  { date: "2024-04-04", profit: 242, lose: 260 },
  { date: "2024-04-05", profit: 373, lose: 290 },
  { date: "2024-04-06", profit: 301, lose: 340 },
  { date: "2024-04-07", profit: 245, lose: 180 },
  { date: "2024-04-08", profit: 409, lose: 320 },
  { date: "2024-04-09", profit: 59, lose: 110 },
  { date: "2024-04-10", profit: 261, lose: 190 },
  { date: "2024-04-11", profit: 327, lose: 350 },
  { date: "2024-04-12", profit: 292, lose: 210 },
  { date: "2024-04-13", profit: 342, lose: 380 },
  { date: "2024-04-14", profit: 137, lose: 220 },
  { date: "2024-04-15", profit: 120, lose: 170 },
  { date: "2024-04-16", profit: 138, lose: 190 },
  { date: "2024-04-17", profit: 446, lose: 360 },
  { date: "2024-04-18", profit: 364, lose: 410 },
  { date: "2024-04-19", profit: 243, lose: 180 },
  { date: "2024-04-20", profit: 89, lose: 150 },
  { date: "2024-04-21", profit: 137, lose: 200 },
  { date: "2024-04-22", profit: 224, lose: 170 },
  { date: "2024-04-23", profit: 138, lose: 230 },
  { date: "2024-04-24", profit: 387, lose: 290 },
  { date: "2024-04-25", profit: 215, lose: 250 },
  { date: "2024-04-26", profit: 75, lose: 130 },
  { date: "2024-04-27", profit: 383, lose: 420 },
  { date: "2024-04-28", profit: 122, lose: 180 },
  { date: "2024-04-29", profit: 315, lose: 240 },
  { date: "2024-04-30", profit: 454, lose: 380 },
  { date: "2024-05-01", profit: 165, lose: 220 },
  { date: "2024-05-02", profit: 293, lose: 310 },
  { date: "2024-05-03", profit: 247, lose: 190 },
  { date: "2024-05-04", profit: 385, lose: 420 },
  { date: "2024-05-05", profit: 481, lose: 390 },
  { date: "2024-05-06", profit: 498, lose: 520 },
  { date: "2024-05-07", profit: 388, lose: 300 },
  { date: "2024-05-08", profit: 149, lose: 210 },
  { date: "2024-05-09", profit: 227, lose: 180 },
  { date: "2024-05-10", profit: 293, lose: 330 },
  { date: "2024-05-11", profit: 335, lose: 270 },
  { date: "2024-05-12", profit: 197, lose: 240 },
  { date: "2024-05-13", profit: 197, lose: 160 },
  { date: "2024-05-14", profit: 448, lose: 490 },
  { date: "2024-05-15", profit: 473, lose: 380 },
  { date: "2024-05-16", profit: 338, lose: 400 },
  { date: "2024-05-17", profit: 499, lose: 420 },
  { date: "2024-05-18", profit: 315, lose: 350 },
  { date: "2024-05-19", profit: 235, lose: 180 },
  { date: "2024-05-20", profit: 177, lose: 230 },
  { date: "2024-05-21", profit: 82, lose: 140 },
  { date: "2024-05-22", profit: 81, lose: 120 },
  { date: "2024-05-23", profit: 252, lose: 290 },
  { date: "2024-05-24", profit: 294, lose: 220 },
  { date: "2024-05-25", profit: 201, lose: 250 },
  { date: "2024-05-26", profit: 213, lose: 170 },
  { date: "2024-05-27", profit: 420, lose: 460 },
  { date: "2024-05-28", profit: 233, lose: 190 },
  { date: "2024-05-29", profit: 78, lose: 130 },
  { date: "2024-05-30", profit: 340, lose: 280 },
  { date: "2024-05-31", profit: 178, lose: 230 },
  { date: "2024-06-01", profit: 178, lose: 200 },
  { date: "2024-06-02", profit: 470, lose: 410 },
  { date: "2024-06-03", profit: 103, lose: 160 },
  { date: "2024-06-04", profit: 439, lose: 380 },
  { date: "2024-06-05", profit: 88, lose: 140 },
  { date: "2024-06-06", profit: 294, lose: 250 },
  { date: "2024-06-07", profit: 323, lose: 370 },
  { date: "2024-06-08", profit: 385, lose: 320 },
  { date: "2024-06-09", profit: 438, lose: 480 },
  { date: "2024-06-10", profit: 155, lose: 200 },
  { date: "2024-06-11", profit: 92, lose: 150 },
  { date: "2024-06-12", profit: 492, lose: 420 },
  { date: "2024-06-13", profit: 81, lose: 130 },
  { date: "2024-06-14", profit: 426, lose: 380 },
  { date: "2024-06-15", profit: 307, lose: 350 },
  { date: "2024-06-16", profit: 371, lose: 310 },
  { date: "2024-06-17", profit: 475, lose: 520 },
  { date: "2024-06-18", profit: 107, lose: 170 },
  { date: "2024-06-19", profit: 341, lose: 290 },
  { date: "2024-06-20", profit: 408, lose: 450 },
  { date: "2024-06-21", profit: 169, lose: 210 },
  { date: "2024-06-22", profit: 317, lose: 270 },
  { date: "2024-06-23", profit: 480, lose: 530 },
  { date: "2024-06-24", profit: 132, lose: 180 },
  { date: "2024-06-25", profit: 141, lose: 190 },
  { date: "2024-06-26", profit: 434, lose: 380 },
  { date: "2024-06-27", profit: 448, lose: 490 },
  { date: "2024-06-28", profit: 149, lose: 200 },
  { date: "2024-06-29", profit: 103, lose: 160 },
  { date: "2024-06-30", profit: 446, lose: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-1))",
  },
  lose: {
    label: "Lose",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartSections() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
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
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
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
              dataKey="profit"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="lose"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
