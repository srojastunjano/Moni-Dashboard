import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/src/components/ui/table";
import dummyMvt from "@/lib/dummyMvt";

interface Movement {
  PK: string;
  SK: string;
  GS1PK: string;
  GS1SK: string;
  GS2PK: string;
  GS2SK: string;
  userPhoneNumber: string;
  messageId: string;
  amount: number;
  currency: string;
  description: string;
  date: string;
  movementType: string;
  category: string;
  createdAt: string;
  movementExpenseType: string | null;
  movementIncomeType: string | null;
}

interface tableI {
  selectedCategory: string;
  data: Movement[]; 
}

export default function Tables({ selectedCategory, data }: tableI) {

  const filteredData = selectedCategory === "TODAS"
    ? data
    : data.filter((mvt) => mvt.category === selectedCategory);

  return (
    <div className="flex">
      <main className="flex-grow p-2 w-full overflow-x-auto mb-40">
        <Table className="min-w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/6 py-2 px-1 text-xs sm:text-sm">Fecha</TableHead>
              <TableHead className="w-1/3 py-2 px-1 text-xs sm:text-sm">Descripcion</TableHead>
              <TableHead className="w-1/6 py-2 px-1 text-xs sm:text-sm">Categoria</TableHead>
              <TableHead className="w-1/6 py-2 px-1 text-xs sm:text-sm text-right">Cantidad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((mvt) => (
              <TableRow key={mvt.messageId}>
                <TableCell className="py-1 px-1 text-xs sm:text-sm">{mvt.date}</TableCell>
                <TableCell className="py-1 px-1 text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">{mvt.description}</TableCell>
                <TableCell className="py-1 px-1">
                  <span className="px-1 py-0.5 text-xs sm:text-sm bg-green-200 text-green-800 rounded-md whitespace-nowrap">
                    {mvt.category}
                  </span>
                </TableCell>
                <TableCell className="py-1 px-1 text-xs sm:text-sm text-right">{mvt.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

export { Tables }