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
    data: Movement[];
  }

export default function Cards({data}: cardProp) {

    const [gastosTotals, setGastos] = useState(0);
    const [ingresos, setIngresos] = useState(0);
    const [balance, setBalance] = useState(0);
    useEffect(() => {

        let gastosTotals = 0;
        let ingresos = 0;
        
        data.forEach(mvt => {
            const { category, amount } = mvt; // extracts category & amount from mvt
            if (category !== "AHORROS" && category !== "INGRESO") {
                gastosTotals += amount
                } else {
                    ingresos += amount; // Add to the otherCategoriesTotal variable
                }
            })
        
        const balance = ingresos - gastosTotals

        setGastos(gastosTotals);
        setIngresos(ingresos);
        setBalance(balance);
    }, [data]);


    return (
        <div className="w-full lg:w-[100%] mx-auto">         
            <div className="flex justify-around my-2 flex-row items-center space-x-2 px-4">
            <Card className="color-[#29292] w-[30%] h-[100%] my-1.5 bg-[#292929] border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="flex flex-col justify-center items-center text-center h-full">
                    <CardTitle className="text-white text-md lg:text-2xl xl:text-md">Gastos</CardTitle>
                    <CardDescription className="text-sm lg:text-lg xl:text-sm flex justify-center items-center h-full">
                        {gastosTotals.toLocaleString('en-US')}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-[30%] h-[100%] my-1.5 bg-[#292929] border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="flex flex-col justify-center items-center text-center h-full">
                    <CardTitle className="text-white text-md lg:text-2xl xl:text-md">Ingreso</CardTitle>
                    <CardDescription className="text-sm lg:text-lg xl:text-sm flex justify-center items-center h-full">
                        {ingresos.toLocaleString('en-US')}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-[30%] h-[100%] my-1.5 bg-[#292929] border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="flex flex-col justify-center items-center text-center h-full">
                    <CardTitle className="text-white text-md lg:text-2xl xl:text-md">Balance</CardTitle>
                    <CardDescription className="text-sm lg:text-lg xl:text-sm flex justify-center items-center h-full">
                        {balance.toLocaleString('en-US')}
                    </CardDescription>
                </CardHeader>
            </Card>
            </div>
        </div>

    )
}

export {Cards};
