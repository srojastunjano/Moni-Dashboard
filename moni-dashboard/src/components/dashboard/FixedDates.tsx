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
    // endDate.setMonth(endDate.getMonth())
    onDateRangeChange(startDate, endDate)
    return startDate;
  };
  const OneMonths = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 1);
    // endDate.setMonth(endDate.getMonth())
    onDateRangeChange(startDate, endDate)
    return startDate;
  };
  const OneYear = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 12);
    // endDate.setMonth(endDate.getMonth())
    onDateRangeChange(startDate, endDate)
    return startDate;
  };

  return (
    <>
        <Button
          variant="outline"
          role="combobox"
          className=" outline-none border-0 ring-0 focus:ring-0 w-[40%] h-[50%] mx-3 text-xs justify-between lg: w-[3%]"
          onClick={OneMonths}
        >
            1m
        </Button>
        <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-[40%] h-[30%] mx-3 text-xs justify-between lg: w-[3%]"
          onClick={SixMonths}
        >
            6m
        </Button>
        <Button
              variant="outline"
              role="combobox"
              className=" outline-none border-0 ring-0 focus:ring-0 w-[40%] h-[30%] mx-3 text-xs justify-between lg: w-[3%]"
              onClick={OneYear}
        >
            1y
        </Button>
    </>
  )
}
export { FixedDates }