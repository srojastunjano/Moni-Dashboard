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

interface CategoryProps {
  selectedCategorys: string[];
  setSelectedCategorys: (category: string[]) => void;
}

export default function Categories({ selectedCategorys, setSelectedCategorys }: CategoryProps) {
  const categorias = Array.from(new Set(dummyMvt.map((mvt) => mvt.category)));

  // Memoize the handleCheckboxChange function using useCallback
  const handleCheckboxChange = React.useCallback((category: string) => {
    setSelectedCategorys((prev: string[]) => {
      if (prev.includes(category)) {
        return prev.filter((item: string) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  }, [setSelectedCategorys]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          className="outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs md:text-lg flex items-center justify-center"
        >
          Categorias
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          {categorias.map((category) => (
            <div key={category} className="flex items-center space-x-2 my-2">
              <Checkbox
                id={category}
                checked={selectedCategorys.includes(category)}
                onCheckedChange={() => handleCheckboxChange(category)}   // Use memoized function here
              />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { Categories };
