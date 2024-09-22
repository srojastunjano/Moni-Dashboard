import * as React from "react";
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