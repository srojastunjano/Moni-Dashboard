import { Skeleton } from "@/components/ui/skeleton"
 
export default function ChartSkeleton() {
  return (
    <div className="flex flex-col justify-center lg:w-[100%] lg:m-auto min-h-screen">
    <div className="flex flex-col flex-1">
      <main className="flex-1 container mx-auto grid grid-cols-1 mb-20 xl:grid-cols-[3fr_2fr] gap-4 pt-2 px-0 lg:gap-8 lg:pt-2 lg:mb-17 xl:mb-5">
        <div className="space-y-8 h-full">
          <Skeleton className="h-[100%] w-full rounded-xl lg:h-[92%]" />
        </div>
        <div className="space-y-4 h-full">
          <Skeleton className="h-[45%] w-full rounded-xl" />
          <Skeleton className="h-[45%] w-full rounded-xl" />
        </div>
      </main>
    </div>
  </div>
  )
}

export {ChartSkeleton};
