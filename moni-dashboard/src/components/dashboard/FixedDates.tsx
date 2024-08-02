"use client"

import * as React from "react"
import dummyMvt from "@/lib/dummyMvt" 
import { Button } from "@/src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

interface DatePickerProps {
  onDateRangeChange: (
    startDate: Date | undefined, 
    endDate: Date | undefined) => void;
}

// const handleSelect = (ranges: RangeKeyDict) => {
//   const { selection } = ranges;
//   setRange([selection as MyDateRange]);
//   onDateRangeChange(selection.startDate, selection.endDate);
// };

export default function FixedDates({ onDateRangeChange }: DatePickerProps) {
  const categorias = Array.from(new Set(dummyMvt.map(mvt => mvt.category)));

  const SixMonths = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 6);
    onDateRangeChange(startDate, endDate)
    return startDate;
  };
  const OneMonths = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 1);
    onDateRangeChange(startDate, endDate)
    return startDate;
  };
  const OneYear = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 12);
    onDateRangeChange(startDate, endDate)
    return startDate;
  };

  return (
    <>
        <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
          onClick={OneMonths}
        >
          1m
        </Button>
        <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
          onClick={SixMonths}
        >
          6m
        </Button>
        <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
          onClick={OneYear}
        >
          1y
        </Button>
    </>
  )
}
export { FixedDates }