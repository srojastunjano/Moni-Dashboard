import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/src/components/ui/card"

export default function Cards() {
    return (
        <div className="flex justify-around my-2 flex-row items-center space-x-2 px-4">
            <Card className="w-[30%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-md">Gastos</CardTitle>
                    <CardDescription className="text-sm">$450,000</CardDescription>
                </CardHeader>
                {/* <CardContent>
                <p>Card Content</p>
                </CardContent> */}
            </Card>
            <Card className="w-[30%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-md">Ingreso</CardTitle>
                    <CardDescription className="text-sm">$4,500,000</CardDescription>
                </CardHeader>
                {/* <CardContent>
                <p>Card Content</p>
                </CardContent> */}
            </Card>
            <Card className="w-[30%] my-1.5 bg-white border border-gray-300 rounded-lg shadow-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-md">Balance</CardTitle>
                    <CardDescription className="text-sm">$450,000</CardDescription>
                </CardHeader>
                {/* <CardContent>
                <p>Card Content</p>
                </CardContent> */}
            </Card>
        </div>

    )
}

export {Cards};
