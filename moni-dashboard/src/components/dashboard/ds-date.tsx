"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from 'react'
import { RangeKeyDict } from 'react-date-range'
import { DateRangePicker } from "../../../components/ui/DateRangePicker"
import { DateRange } from "react-day-picker"

interface DatePickerProps {
  onDateRangeChange: (startDate: Date | undefined, endDate: Date | undefined) => void;
}

export default function DatePicker({ onDateRangeChange }: DatePickerProps) {

  const handleDateRangeChange = (values: { range: DateRange; rangeCompare?: DateRange | undefined }) => {
    const { range } = values;
    const { from, to } = range;
    onDateRangeChange(from, to);
  };
  return (
    <DateRangePicker
      onUpdate={(values) => handleDateRangeChange(values)} 
      initialDateFrom="2022-01-01"
      initialDateTo="2030-12-31"
      align="start"
      locale="en-GB"
      showCompare={false}
    />
  )
}

export { DatePicker }