"use client";

import { X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import dummyMvt from "@/lib/dummyMvt";


interface CategoryProps {
  selectedCategories: string[];
  setSelectedCategories: (category: string[]) => void;
}


export default function FancyMultiSelect({selectedCategories, setSelectedCategories}: CategoryProps) {
  const categorias = Array.from(new Set(dummyMvt.map((mvt) => mvt.category)));

  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(true);
  // const [selected, setSelected] = useState<String[]>([categorias[0]]);
  const [inputValue, setInputValue] = useState("");

  const filterFramework = (categories: string[], framework: string) => {
    return categories.filter((s) => s !== framework);
  };
  
  const handleUnselect = useCallback((framework: string) => {
    // const filterFramework = (categories: string[], framework: string) => {
    //   return categories.filter((s) => s !== framework);
    // };
    // setSelectCategories toma un string[] pero le estoy pasando una funcion. Tengo que pasarlo a un const primero
    setSelectedCategories((prev: string[]) => prev.filter((s) => s !== framework));
  }, [setSelectedCategories]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input === "") {
            setSelectedCategories((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = categorias.filter(
    (category) => !selectedCategories.includes(category)
  );

  console.log(selectables, selectedCategories, inputValue);

  return (

      <Command
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none border-0 ring-0 text-xs mt-2" // outline-none border-0 ring-0 focus:ring-0 w-1/4 h-12 mx-3 text-xs flex items-center justify-center
      >
        <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selectedCategories.map((category) => {
              return (
                <Badge key={category} variant="secondary">
                  {category}
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(category);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(category)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder="Categorias..."
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map((category) => {
                    return (
                      <CommandItem
                        key={category}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={(value) => {
                          setInputValue("");
                          setSelectedCategories((prev) => [...prev, category]);
                        }}
                        className={"cursor-pointer"}
                      >
                        {category}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
  );
}

export {FancyMultiSelect}