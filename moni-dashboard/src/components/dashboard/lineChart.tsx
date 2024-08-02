"use client"

// Importing necessary components from Recharts and other libraries
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, ComposedChart, XAxis, Bar, LabelList, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart"
import { useEffect, useState } from "react"


interface Movement {
  PK: string;
  SK: string;
  GS1PK: string;
  GS1SK: string;
  GS2PK: string;
  GS2SK: string;
  userPhoneNumber: string;
  messageId: string;
  amount: number;
  currency: string;
  description: string;
  date: string;
  movementType: string;
  category: string;
  createdAt: string;
  movementExpenseType: string | null;
  movementIncomeType: string | null;
}

// Configuration for the chart, defining labels and colors
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface DiscreteDataProp {
  discreteData: { date: string; date_total: number }[];
  cumulativeData: { date: string; date_cumulative: number }[];
}


// Main component function
export default function LineChart({discreteData, cumulativeData}:DiscreteDataProp){
  return (
    <Card>
      {/* Card header containing title and description */}
      <CardHeader className="flex flex-col">
        <CardTitle>Line and Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      
      {/* Card content containing the chart */}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={discreteData}  // Data for the chart
              margin={{        // Margins for the chart
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={true} />  {/* Grid lines for the chart */}
              <XAxis
                dataKey="date"  // X-axis using month as data key
                tickLine={false}  // Disable tick lines
                tickMargin={10}  // Margin for ticks
                axisLine={false}  // Disable axis line
                tickFormatter={(value) => value.slice(0, 3)}  // Format ticks to show first 3 letters
              />
              <Tooltip content={<ChartTooltipContent />} />  {/* Tooltip for the chart */}
              
              {/* Bar component for desktop data */}
              <Bar dataKey="date_total" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"  // Position labels at the top of bars
                  offset={12}  // Offset for labels
                  className="fill-foreground"
                  fontSize={12}  // Font size for labels
                />
              </Bar>
              
              {/* Line component for desktop data */}
              <Line
                dataKey="date_cumulative"
                type="natural"  // Line type
                stroke="var(--color-desktop)"  // Stroke color
                strokeWidth={2}  // Stroke width
                dot={{ fill: "var(--color-desktop)" }}  // Dot configuration
                activeDot={{ r: 6 }}  // Active dot configuration
              />
              
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={cumulativeData}  // Data for the chart
              margin={{        // Margins for the chart
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={true} />  {/* Grid lines for the chart */}
              <XAxis
                dataKey="date"  // X-axis using month as data key
                tickLine={false}  // Disable tick lines
                tickMargin={10}  // Margin for ticks
                axisLine={false}  // Disable axis line
                tickFormatter={(value) => value.slice(0, 3)}  // Format ticks to show first 3 letters
              />
              <Tooltip content={<ChartTooltipContent />} />  {/* Tooltip for the chart */}
              
              {/* Line component for desktop data */}
              <Line
                dataKey="date_total"
                type="natural"  // Line type
                stroke="var(--color-desktop)"  // Stroke color
                strokeWidth={2}  // Stroke width
                dot={{ fill: "var(--color-desktop)" }}  // Dot configuration
                activeDot={{ r: 6 }}  // Active dot configuration
              />
              
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      
      {/* Card footer containing additional information */}
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}


export {LineChart}