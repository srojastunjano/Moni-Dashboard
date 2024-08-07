import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/src/components/ui/card"
import Menu from "./Filters";
import { useEffect, useState } from "react";

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
  
  interface cardProp {
    chartCategory: string[];
    data: Movement[];
  }

export default function Cards() {
    // const [dateRange, setDateRange] = useState<{ startDate?: Date, endDate?: Date }>({});
    // const [selectedCategory, setSelectedCategory] = useState<string[]>(chartCategory);
    
    // useEffect(() => {
    //     // Filter by date range
    //     const { startDate, endDate } = dateRange;
    //     if (startDate && endDate) {
    //       data = data.filter(item => {
    //         const itemDate = new Date(item.date);
    //         return itemDate >= startDate && itemDate <= endDate;
    //       });
    //     }
    
    //     // Filter by category
    //     if (selectedCategory.length > 0) {
    //       data = data.filter(mvt => selectedCategory.includes(mvt.category));
    //     }
        
    //   }, [selectedCategory, dateRange, data]);

    // const handleDateRangeChange = (startDate?: Date, endDate?: Date) => {
    //     setDateRange({ startDate, endDate });
    //   };
    return (
        <div className="w-full lg:w-[100%] mx-auto">         
            <div className="flex justify-around my-2 flex-row items-center space-x-2 px-4">
                <Card className="w-[30%] h-[100%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                    <CardHeader className="flex-col text-center">
                        <CardTitle className="text-md">Gastos</CardTitle>
                        <CardDescription className="text-sm">$450,000</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[30%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                    <CardHeader className="flex-col text-center">
                        <CardTitle className="text-md">Ingreso</CardTitle>
                        <CardDescription className="text-sm">$4,500,000</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[30%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                    <CardHeader className="flex-col text-center">
                        <CardTitle className="text-md">Balance</CardTitle>
                        <CardDescription className="text-sm">$450,000</CardDescription>
                    </CardHeader>
                </Card>
                {/* <Menu
                    handleDateRangeChange={handleDateRangeChange}
                    selectedCategories={selectedCategory}
                    setSelectedCategories={setSelectedCategory}
                    /> */}
            </div>
        </div>

    )
}

export {Cards};
