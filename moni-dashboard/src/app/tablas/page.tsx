"use client";

import Categorias from "@/src/components/dashboard/ds-categories";
import DatePicker from "@/src/components/dashboard/ds-date";
import AlgoMal from "@/src/components/dashboard/ds-suggestions";
import Tables from "@/src/components/dashboard/ds-table";
import dummyMvt from "@/lib/dummyMvt";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/src/components/ui/menubar"

import { useState, useEffect } from "react";
import { Card, CardHeader } from "@/src/components/ui/card";
import FixedDates from "@/src/components/dashboard/FixedDates";
import Menu from "@/src/components/dashboard/Filters";

export default function Home() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState(dummyMvt);
    const [dateRange, setDateRange] = useState<{ startDate?: Date, endDate?: Date }>({});
  
    const handleDateRangeChange = (startDate?: Date, endDate?: Date) => {
      setDateRange({ startDate, endDate });
    };
  
    useEffect(() => {
      const { startDate, endDate } = dateRange;
      
      let filtered = dummyMvt;

      if (startDate && endDate) {
        filtered = filtered.filter(item => {
          const itemDate = new Date(item.date);
          return itemDate >= startDate && itemDate <= endDate;
        });
      }

      if (selectedCategories.length > 0) {
        filtered = filtered.filter(item => selectedCategories.includes(item.category));
      }

      setFilteredData(filtered);
    }, [dateRange, selectedCategories]);
  
    return (
      <>
        <head>
          <title>Moni</title>
        </head>
        <body>
          <header className='z-[1000] bg-[rgb(69,194,100)] w-full py-3 lg:w-[70%] lg:mx-auto lg:py-2'>
            <nav className="text-center flex">
              <h3 className="font-bold flex-1 ml-16">MIS FINANZAS!!</h3>
              <p className="font-light flex-2 text-xs mr-2">
                <AlgoMal/>
              </p>
            </nav>
          </header>
          <main>
            <div className="lg:w-[65%] lg:mx-auto">
              <Menu
                handleDateRangeChange={handleDateRangeChange}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>
            <div className="w-full max-w-4xl mx-auto px-4">
              <Tables selectedCategory={selectedCategories.length === 1 ? selectedCategories[0] : "TODAS"} data={filteredData} />
            </div>
            <nav className="py-4 bottom-0 left-0 fixed bg-[rgb(69,194,100)] w-full flex justify-center text-center z-[1000] overflow-hidden lg:w-[70%] lg:left-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:py-2">
              <div className="flex justify-evenly w-full lg:w-auto lg:flex-grow">
                <h3><Link href="/app/graficos">GRÁFICOS</Link></h3>
                <h3><Link href="/tablas">TABLAS</Link></h3>
                <h3><Link href="/">USUARIO</Link></h3>
              </div>
            </nav>
          </main>
        </body>
      </>
    );
  }