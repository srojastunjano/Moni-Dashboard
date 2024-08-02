"use client"
 
import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/src/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/src/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover"
 
interface DatePickerProps {
    onDateRangeChange: (
      startDate: Date | undefined, 
      endDate: Date | undefined) => void;
  }
 
export default function Reset({ onDateRangeChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const resetFecha = () => {
    console.log("Menthod Called!@")
    const startDate = new Date();
    const endDate = new Date
    startDate.setMonth(startDate.getMonth() - 100);
    onDateRangeChange(startDate, endDate)
    return startDate;
  };
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
        >
          Reiniciar
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="flex flex-col">
                    <Button
                        variant="outline"
                        role="combobox"
                        className="outline-none border-0 ring-0 focus:ring-0 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
                        >
                        Categorias
                    </Button>
                    <Button
                        variant="outline"
                        role="combobox"
                        className="outline-none border-0 ring-0 focus:ring-0 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
                        onClick={resetFecha}
                        >
                        Fecha
                    </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export {Reset}