import { Skeleton } from "@/components/ui/skeleton"
 
export default function TableSkeleton() { 
    return (
        <div>       
            <div className="flex justify-between space-x-4 p-4">
                {['Gastos', 'Ingreso', 'Balance'].map((title) => (
                    <div key={title} className="flex-1 bg-black rounded-lg shadow p-4">
                    <div className="flex flex-col space-y-2">
                        <Skeleton className="h-6 w-20" /> 
                        <Skeleton className="h-8 w-32" />
                    </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center p-4 mb-5 bg-black rounded-lg shadow">
                <Skeleton className="h-10 w-48 rounded-md" />
                <Skeleton className="h-10 w-36 rounded-md" />
                </div>
                <div className="bg-black rounded-lg shadow overflow-hidden">
                <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-20" />
                    </div>
                    {[...Array(10)].map((_, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 mb-4">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-16" />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export {TableSkeleton};
