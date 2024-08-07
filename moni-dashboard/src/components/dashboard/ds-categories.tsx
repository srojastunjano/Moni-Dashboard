import * as React from "react";
import dummyMvt from "@/lib/dummyMvt";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import FancyMultiSelect from "../ui/multiSelect";

interface CategoryProps {
  selectedCategories: string[];
  setSelectedCategories: (category: string[]) => void;
}

export default function Categories({ selectedCategories, setSelectedCategories }: CategoryProps) {

  return (
      <>
        <FancyMultiSelect
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </>
  )
}

export { Categories };