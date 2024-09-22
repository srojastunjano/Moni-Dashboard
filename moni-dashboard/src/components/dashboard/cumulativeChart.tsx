"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Line,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "../ui/chart";

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
} satisfies ChartConfig;

export default function CumulativeChart({
  cumulativeData,
}: CumulativeDataProp) {

  const formatNumber = (value: number) => {
    return value.toLocaleString('en-US');
  };

  // Ensure cumulativeData is not empty before performing operations
  if (!cumulativeData.length) {
    return <div>No data available</div>;
  }

  const dateRangeInDays =
    (new Date(cumulativeData[cumulativeData.length - 1]?.date).getTime() -
      new Date(cumulativeData[0]?.date).getTime()) /
    (1000 * 60 * 60 * 24);

  return (
    <Card className="h-full">
      <CardContent className="my-5">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-customColor">Gastos Acumulados</CardTitle>
        </CardHeader>
        <ChartContainer config={chartConfig} className="h-full">
          <ResponsiveContainer width="100%">
            <ComposedChart
              data={cumulativeData} // Data for the chart
              className="h-full"
              margin={{
                // Margins for the chart
                top: 20,
                left: 12,
                right: 12,
              }}
              >
              <CartesianGrid vertical={true} />{" "}
              {/* Grid lines for the chart */}
              <YAxis
                dataKey="date_total"
                type="number"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                domain={["auto", "auto"]}
                tickFormatter={(value) => formatNumber(value)}
                tickCount={12}
                width={70}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={2}
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
              <Tooltip content={<ChartTooltipContent />} />

              {/* Line component for desktop data */}
              <Line
                dataKey="date_total"
                type="natural" // Line type
                stroke="var(--color-desktop)" // Stroke color
                strokeWidth={2} // Stroke width
                dot={{ fill: "var(--color-desktop)" }} // Dot configuration
                activeDot={{ r: 6 }} // Active dot configuration
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export { CumulativeChart };
