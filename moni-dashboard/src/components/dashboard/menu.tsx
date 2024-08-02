import { Card, CardHeader } from "../ui/card"
import Categories from "./ds-categories"
import DatePicker from "./ds-date"
import FixedDates from "./FixedDates"
import Reset from "./reset";

interface MenuProps {
    handleDateRangeChange: () => void;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

export default function Menu({handleDateRangeChange, selectedCategories, setSelectedCategories}: MenuProps){
    return (
        <>
            <div className="flex flex-row justify-center w-full">
                <Card className="mt-1 justify-center w-full h-auto ">
                    <CardHeader className="p-0 justify-center flex flex-wrap sm:space-x-">
                        <FixedDates onDateRangeChange={handleDateRangeChange}/>
                        <DatePicker onDateRangeChange={handleDateRangeChange} />
                        <Categories
                            selectedCategorys={selectedCategories}
                            setSelectedCategorys={setSelectedCategories}
                        />
                        <Reset onDateRangeChange={handleDateRangeChange}/>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}

export {Menu}