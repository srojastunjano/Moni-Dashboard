   /**
 * v0 by Vercel.
 * @see https://v0.dev/t/4P8eJaEKuJf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Cards from "../components/dashboard/ds-cards";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import dummyMvt from "@/lib/dummyMvt";
import Charts from "../components/dashboard/ds-charts";



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
          <title>HeyMoni</title>
        </head>
        <body>
          <div className="flex h-screen w-full flex-col bg-background">
          <header className="sticky top-0 z-40 border-b bg-background px-4 py-3 md:hidden">
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
                    <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
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
            <nav className="hidden h-full w-14 flex-col border-r bg-background md:flex">
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
                        href="#"
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
            <main className="flex-1 px-4 pt-6 md:px-6">
              <h1 className="text-2xl font-bold">HeyMoni</h1>
              <Charts chartCategory={selectedCategories} data={filteredData}/>
            </main>
          </div>
           {/* Mobile Nav */}
          <nav className="fixed bottom-0 z-40 flex w-full items-center justify-around border-t bg-background px-4 py-3 md:hidden">
            <Link
              href="/"
              className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              <BarChartIcon className="h-5 w-5" />
              <span className="text-xs">Gráfica</span>
            </Link>
            <Link
              href="#"
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


function TableIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
      stroke="currentColor"
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

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}