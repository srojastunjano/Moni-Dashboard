"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/src/components/ui/button"
import { DateRange as ReactDateRange, RangeKeyDict } from 'react-date-range'
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from 'react'

interface MyDateRange {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string;
}

interface DatePickerProps {
  onDateRangeChange: (
    startDate: Date | undefined, 
    endDate: Date | undefined) => void;
}

export default function DatePicker({ onDateRangeChange }: DatePickerProps) {
  const [range, setRange] = React.useState<MyDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setRange([selection as MyDateRange]);
    onDateRangeChange(selection.startDate, selection.endDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild className="outline-none">
        <Button
          variant={"outline"}
          className={cn(
            "outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center",
            !range[0].startDate && "text-muted-foreground"
          )}
        >
          Fecha
        </Button> 
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <ReactDateRange
          editableDateInputs={false}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={range}
        />
      </PopoverContent>
    </Popover>
  )
}

export {DatePicker}