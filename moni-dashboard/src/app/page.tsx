   /**
 * v0 by Vercel.
 * @see https://v0.dev/t/4P8eJaEKuJf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import dummyMvt from "@/lib/dummyMvt";
import Charts from "../components/dashboard/ds-charts";
import ChartSkeleton from "../components/dashboard/chartsSkeleton";



// Main Page
export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(dummyMvt);
  const [activeSkeleton, setActiveSkeleton] = useState<boolean>(true);
  
  const [dateRange, setDateRange] = useState<{ startDate?: Date, endDate?: Date }>({});
  const { startDate, endDate } = dateRange;
  let filtered = dummyMvt;
  useEffect(() => {
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
    setActiveSkeleton(false);
  }, [dateRange, selectedCategories]);
  return (
      <>
        <head>
          <title>HeyMoni</title>
        </head>
        <body>
          <div className="flex h-screen w-full flex-col bg-background">
          <header className="hidden sticky top-0 z-40 border-b bg-background px-4 py-0 md:block md:py-4 xl:hidden">
            <div className="flex items-center justify-between">
              {/* Moni Logo */}
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <LineChartIcon className="h-6 w-6" />
                <span className="sr-only">HeyMoni</span>
              </Link>
              {/* Opened Nav Bar */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MenuIcon className="h-15 w-600" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-4 px-4 py-6">
                    <Link href="/" className="flex items-center gap-2 font-medium" prefetch={false}>
                      <BarChartIcon className="h-5 w-5" />
                        Gráfica
                    </Link>
                    <Link href="./tablas" className="flex items-center gap-2 font-medium" prefetch={false}>
                      <TableIcon className="h-5 w-5" />
                        Tablas
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          <div className="flex flex-1">
            {/* Closed Nav Bar */}
            <nav className="hidden h-full w-14 flex-col border-r bg-background md:flex md:hidden xl:block">
              <div className="flex flex-1 flex-col items-center gap-4 px-2 py-5">
                <Link
                  href="/"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground"
                  prefetch={false}
                >
                  <LineChartIcon className="h-5 w-5" />
                  <span className="sr-only">HeyMoni</span>
                </Link>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                        prefetch={false}
                      >
                        <BarChartIcon className="h-5 w-5" />
                        <span className="sr-only">Gráfica</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Gráfica</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="./tablas"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                        prefetch={false}
                      >
                        <TableIcon className="h-5 w-5" />
                        <span className="sr-only">Tablas</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Tablas</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </nav>
            <main className="flex-1 px-1 pt-6 md:px-7 md:pt-2">
              <h1 className="text-white text-2xl ml-2 font-bold md:text-2xl lg:ml-7 lg:mt-2 xl:text-2xl xl:ml-0">HeyMoni</h1>
              {activeSkeleton ?
                <ChartSkeleton/>  
                :  
              <Charts chartCategory={selectedCategories} data={filteredData} rawData={dummyMvt}/>
            }
            </main>
          </div>
           {/* Mobile Nav */}
            <nav className="fixed bottom-0 z-40 py-3 flex w-full items-center justify-around border-t bg-background px-4 py-3 md:py-2 lg:hidden">
            <Link
              href="/"
              className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <BarChartIcon className="h-5 w-5" />
              <span className="text-xs">Gráfica</span>
            </Link>
            <Link
              href="./tablas"
              className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <TableIcon className="h-5 w-5" />
              <span className="text-xs">Tablas</span>
            </Link>
            </nav>
        </div>
        </body>
      </>
  )
}


function LineChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a777b6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-5 xl:h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a777b6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function TableIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 xl:w-5 xl:h-5"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a777b6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}