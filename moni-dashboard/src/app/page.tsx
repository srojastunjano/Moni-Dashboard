"use client";

import React, { useEffect, useState } from "react";
import AlgoMal from "@/src/components/dashboard/ds-suggestions";
import Link from "next/link";
import dummyMvt from "@/lib/dummyMvt";
import Cards from "@/src/components/dashboard/ds-cards";
import Charts from "@/src/components/dashboard/ds-charts";


// Main Page
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
        <header className='bg-[rgb(69,194,100)] w-full py-4 p-[20px]'>
          <nav className="z-[1000] text-center flex">
            <h3 className="font-bold flex-1 ml-16">MIS FINANZAS!!</h3>
            <p className="font-light flex-2 text-xs">
              <AlgoMal/>
            </p>
          </nav>
        </header>
        <main>
          <Cards/>
          <Charts chartCategory={selectedCategories} data={filteredData}/>
          <nav className="py-4 bottom-0 left-0 fixed bg-[rgb(69,194,100)] w-full flex text-center justify-evenly z-[1000] overflow-hidden" >
            <h3><Link href="/app/graficos">GRÁFICOS</Link></h3>
            <h3><Link href="/tablas">TABLAS</Link></h3>
            <h3><Link href="/">USUARIO</Link></h3>
          </nav>
        </main>
      </body>
    </>
  );
}


