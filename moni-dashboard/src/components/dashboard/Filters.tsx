import { Card, CardHeader } from "../ui/card"
import FancyMultiSelect from "../ui/multiSelect";
import Categories from "./ds-categories"
import DatePicker from "./ds-date"

interface MenuProps {
    handleDateRangeChange: () => void;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

export default function Filters({handleDateRangeChange, selectedCategories, setSelectedCategories}: MenuProps){
    return (
        <>
            <div className="flex flex-row justify-center w-full">
                <Card className="mt-1 justify-center w-[95%] h-auto my-1.5 bg-white border border-gray-300 rounded-lg shadow-md md:py-3 xl:py-0">
                    <CardHeader className="p-0 space-between flex flex-col justify-center sm:flex-row">
                        {/* <FixedDates onDateRangeChange={handleDateRangeChange}/> */}
                        <div className="mx-auto">
                            <DatePicker onDateRangeChange={handleDateRangeChange} />
                        </div>
                        <div className="w-[60%] mx-auto">
                        <FancyMultiSelect
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            />
                        </div>
                        {/* <Reset onDateRangeChange={handleDateRangeChange}/> */}
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}

export {Filters}