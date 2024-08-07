"use client"

import { ResponsiveContainer, ComposedChart, CartesianGrid, YAxis, XAxis, Tooltip, Line } from "recharts";
import { Card, CardContent } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltipContent } from "../ui/chart";



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
  
  interface CumulativeDataProp {
    cumulativeData: { date: string; date_cumulative: number }[];
  }
  
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
  
export default function CumulativeChart({cumulativeData}: CumulativeDataProp){
    return (
        <Card className="h-full ">
            <CardContent className="my-5">
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" className="h-full">
                        <ComposedChart
                        data={cumulativeData}  // Data for the chart
                        className="w-full"
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
        </Card>
    )
}

export {CumulativeChart}