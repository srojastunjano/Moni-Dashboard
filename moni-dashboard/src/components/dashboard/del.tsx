"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";
import DatePicker from "./ds-date";
import Categories from "./ds-categories";
import { useState, useEffect } from "react";
import FixedDates from "./FixedDates";
import CumulativeChart from "./lineChart";
import Menu from "./menu";

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

interface chartI {
  chartCategory: string[];
  data: Movement[];
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
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export default function Charts({ chartCategory, data }: chartI) {
  const [selectedCategory, setSelectedCategory] = useState<string[]>(chartCategory);
  const [aggregatedData, setAggregatedData] = useState<any[]>([]);
  // const [discreteData, setDiscreteData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState<{ startDate?: Date, endDate?: Date }>({});

  useEffect(() => {
    // Aggregate data by category and sum amounts
    const aggregateData = (data: Movement[]) => {
      const categoryTotals: { [key: string]: number } = {};

      // not necessary to have it in a useEffect they all are caluclated
      data.forEach(mvt => {
        const { category, amount } = mvt; // extracts category & amount from mvt
        if (categoryTotals[category]) {
          categoryTotals[category] += amount;
        } else {
          categoryTotals[category] = amount;
        }
      });

      return Object.entries(categoryTotals).map(([category, category_total]) => ({
        category,
        category_total,
      }));
    };

    // const discreteData = (data: Movement[]) => {
    //   const dateTotals: { [key: string]: number } = {};

    //   // not necessary to have it in a useEffect they all are caluclated
    //   data.forEach(mvt => {
    //     const { date, amount } = mvt; // extracts date & amount from mvt
    //     if (dateTotals[date]) {
    //       dateTotals[date] += amount;
    //     } else {
    //       dateTotals[date] = amount;
    //     }
    //   });

    //   return Object.entries(dateTotals).map(([date, date_total]) => ({
    //     date,
    //     date_total,
    //   }));
    // };

    let filtered = data;

    // Filter by date range
    const { startDate, endDate } = dateRange;
    if (startDate && endDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }

    // Filter by category
    if (selectedCategory.length > 0) {
      filtered = filtered.filter(mvt => selectedCategory.includes(mvt.category));
    }

    const aggregated = aggregateData(filtered);
    // const discrete = discreteData(filtered)
    
    // Sort the aggregated data in descending order
    const sortedAggregated = aggregated.sort((a, b) => b.total - a.total);
    
    setAggregatedData(sortedAggregated);
    // setDiscreteData(discrete)
  }, [selectedCategory, dateRange, data]);

  const handleDateRangeChange = (startDate?: Date, endDate?: Date) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div className="flex justify-center lg:w-[66%] lg:m-auto">
      <Card className="space-x-2 px-4 w-full mb-40">
        <CardHeader className="flex flex-col">
          <CardTitle className="my-2 text-center">
            <h1 className="md:text-5xl">
              Tus Gastos
            </h1>
          </CardTitle>
          <CardDescription className="text-center">
          <Menu
              handleDateRangeChange={handleDateRangeChange}
              selectedCategories={selectedCategory}
              setSelectedCategories={setSelectedCategory}
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              data={aggregatedData} // Use aggregatedData for the chart
              layout="vertical"
              margin={{ right: 65 }}
              barCategoryGap={200}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="category"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
                hide
              />
              <XAxis dataKey="total" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="total"
                layout="vertical"
                fill="var(--color-desktop)"
                radius={40}
              >
                <LabelList
                  dataKey="category"
                  position="insideLeft"
                  offset={10}
                  className="fill-foreground md:text-2xl"
                />
                <LabelList
                  dataKey="total"
                  position="right"
                  offset={12}
                  className="fill-foreground  md:text-2xl"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        {/* <CumulativeChart discrete_Data={ discreteData }/> */}
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {/* <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
}
