// import { Charts } from "@/src/components/dashboard/ds-charts";
import AlgoMal from "@/src/components/dashboard/ds-suggestions";
import DatePicker from "@/src/components/dashboard/ds-date";
import Link from "next/link";

export default function Graficos() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="/Style/main.css" />
        <title>Moni - Graficos</title>
      </head>
      <body>
        <header className='bg-[rgb(69,194,100)] w-full py-4 p-[20px]'>
          <nav className="z-[1000] text-center">
            <h3 className="font-bold">MIS FINANZAS!!</h3>
          </nav>
        </header>
        <main>
          {/* <Charts /> */}
          <nav className="py-4 bottom-0 left-0 fixed bg-[rgb(69,194,100)] w-full flex text-center justify-evenly z-[1000] overflow-hidden">
            <AlgoMal />
            <h3><Link href="/graficos">GRÁFICOS</Link></h3>
            <h3><Link href="app/tablas.tsx">TABLAS</Link></h3>
            <h3><Link href="/">USUARIO</Link></h3>
            <DatePicker onDateRangeChange={function (startDate: Date | undefined, endDate: Date | undefined): void {
              throw new Error("Function not implemented.");
            } } />
          </nav>
        </main>
      </body>
    </>
  );
}