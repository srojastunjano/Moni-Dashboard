"use client";
import {
  Card,
} from "@/components/ui/card";
import {
  ChartConfig,
} from "@/components/ui/chart";
import { useState, useEffect } from "react";
import { DiscreteChart } from "./discreteChart";
import { Filters } from "./Filters";
import CumulativeChart from "./cumulativeChart";
import CategoryChart from "./categoryChart";
import Cards from "./ds-cards";

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
  rawData: Movement[];
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

export default function Charts({ chartCategory, data}: chartI) {
  const [selectedCategory, setSelectedCategory] = useState<string[]>(chartCategory);
  const [aggregatedData, setAggregatedData] = useState<any[]>([]);
  const [totalfilteredData, setTotalFilteredData] = useState<any[]>([]);
  const [datefilteredData, setdateFilteredData] = useState<any[]>([]);
  const [discreteData, setDiscreteData] = useState<any[]>([]);
  const [cumulativeData, setCumulativeData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState<{ startDate?: Date, endDate?: Date }>({});
  
  useEffect(() => {
    // Aggregate data by category and sum amounts
    const aggregateData = (data: Movement[]) => {
      const categoryTotals: { [key: string]: number } = {};

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

    const processData = (data: Movement[]) => {
      const dateTotals: { [key: string]: number } = {};
      const dateCumulative: {[key: string]: number} = {}

    
      data.forEach(mvt => {
        const { date, amount } = mvt; // extracts date & amount from mvt
        if (dateTotals[date]) {
          dateTotals[date] += amount;
        } else {
          dateTotals[date] = amount;
        }
      });
      
      
      const sortedDates = Object.keys(dateTotals).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      // Calculate cumulative totals
      let cummulativeTotal = 0;
      sortedDates.forEach(date => {
        cummulativeTotal += dateTotals[date]
        dateCumulative[date] = cummulativeTotal;
      })

      const discrete = sortedDates.map(date => ({
        date,
        date_total: dateTotals[date],
      }));

      const cumulative = Object.entries(dateCumulative).map(([date, date_total]) => ({
        date,
        date_total,
      }));

      return {discrete, cumulative}
    }; 

    let filtered = data;

    // Filter by date range
    const { startDate, endDate } = dateRange;
    if (startDate && endDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }

    setdateFilteredData(filtered)

    // Filter by category
    if (selectedCategory.length > 0) {
      filtered = filtered.filter(mvt => selectedCategory.includes(mvt.category));
    }

    const filteredData = filtered.filter(item => item.category !== "INGRESO" && item.category !== "AHORROS");

    const aggregated = aggregateData(filtered);
    const { cumulative, discrete} = processData(filteredData);
    
    // Sort the aggregated data in descending order
    const sortedAggregated = aggregated.sort((a, b) => b.category_total - a.category_total);
    
    setAggregatedData(sortedAggregated);
    setDiscreteData(discrete);
    setCumulativeData(cumulative);
    setTotalFilteredData(filtered)
  }, [selectedCategory, dateRange, data]);

  const handleDateRangeChange = (startDate?: Date, endDate?: Date) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div className="flex flex-col justify-center lg:w-[100%] lg:m-auto">
      <div className="flex flex-col"> 
        <main className="flex-1 container mx-auto grid grid-cols-1 mb-20 xl:grid-cols-[3fr_2fr] gap-4 pt-2 px-0 lg:gap-8 lg:pt-2 lg:pt-2 lg:mb-17 xl:mb-5">
          <div className="space-y-8">
            <Card className="bg-[rgba(51,153,118,255)] rounded-lg shadow overflow-hidden h-full">
              <Cards data={datefilteredData}/>
              <Filters
                handleDateRangeChange={handleDateRangeChange}
                selectedCategories={selectedCategory}
                setSelectedCategories={setSelectedCategory}
              />
              <CumulativeChart cumulativeData={cumulativeData}/>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="bg-[#d0f0c0]">
              <DiscreteChart discreteData={discreteData}/>
            </Card>
            <Card className="bg-[#d0f0c0]">
              <CategoryChart aggregatedData={aggregatedData}/>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
