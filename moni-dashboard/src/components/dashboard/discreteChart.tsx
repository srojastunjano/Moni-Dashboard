"use client"

// Importing necessary components from Recharts and other libraries
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, ComposedChart, XAxis, Bar, LabelList, Tooltip, ResponsiveContainer, YAxis } from "recharts"

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
}


// Main component function
export default function DiscreteChart({discreteData}:DiscreteDataProp){
  if (!discreteData.length) {
    return <div>No data available</div>;
  }

  const dateRangeInDays =
    (new Date(discreteData[discreteData.length - 1]?.date).getTime() -
      new Date(discreteData[0]?.date).getTime()) /
    (1000 * 60 * 60 * 24);

  return (
    <Card>
      {/* Card header containing title and description */}
      <CardHeader className="flex flex-col">
        <CardTitle className="text-customColor">Gastos Discretos</CardTitle>
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
              <YAxis
                dataKey="date_total"
                type="number"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                domain={['auto', 'auto']}
                tickFormatter={(value) => value.toFixed(0)}
                tickCount={12}
              />
              <XAxis
                 dataKey="date"
                 tickLine={false}
                 tickMargin={5}
                 axisLine={false}
                 tickFormatter={(value) => {
                   const date = new Date(value);
 
                   // Conditional formatting based on date range
                   if (dateRangeInDays > 180) {
                     // Long term (more than ~6 months)
                     return date.toLocaleString("default", {
                       month: "short",
                       year: "numeric",
                     });
                   } else {
                     // Short term
                     return date.toLocaleString("default", {
                       month: "short",
                       day: "numeric",
                     });
                   }
                 }}
                 tick={{ fontSize: 8 }}
                 interval={"preserveStartEnd"}
              />
              <Tooltip content={<ChartTooltipContent />} />  {/* Tooltip for the chart */}
              
              {/* Bar component for desktop data */}
              <Bar dataKey="date_total" fill="var(--color-desktop)" radius={8}>
                {/* <LabelList
                  position="top"  // Position labels at the top of bars
                  offset={12}  // Offset for labels
                  className="fill-foreground"
                  fontSize={12}  // Font size for labels
                /> */}
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
      
      {/* Card footer containing additional information */}
      {/* <CardFooter>
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
      </CardFooter> */}
    </Card>
  )
}


export {DiscreteChart}