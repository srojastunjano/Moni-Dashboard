import { CartesianGrid, YAxis, XAxis, Bar, LabelList, ResponsiveContainer, BarChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import Filters from "./Filters";


interface AggregatedData {
    category: string;
    category_total: number;
  }

interface CategoryDataProp {
    aggregatedData: AggregatedData[];
  }
  
const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig
  
export default function CategoryChart({ aggregatedData }: CategoryDataProp){
    return(
        <Card>
          <CardHeader className="flex flex-col">
            {/* <CardTitle className="my-2 text-center">  // CardTitle is H3 i am adding h3
              <h1 className="md:text-5xl">
                Tus Gastos
              </h1>
            </CardTitle> */}
            <CardDescription className="text-center">
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={aggregatedData}
                        layout="vertical"
                        margin={{ right: 65 }}
                        barCategoryGap={200}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                        dataKey="category"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value}
                        hide
                        />
                        <XAxis
                        dataKey="category_total"
                        type="number"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        domain={['auto', 'auto']}
                        tickFormatter={(value) => value.toFixed(0)}
                        tickCount={8}
                        />
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                        dataKey="category_total"
                        layout="vertical"
                        fill="var(--color-desktop)"
                        radius={10}
                          
                        >
                        <LabelList
                            dataKey="category"
                            position="insideLeft"
                            offset={10}
                            className="fill-foreground md:text-2xl"
                        />
                        {/* <LabelList
                            dataKey="category_total"
                            position="right"
                            offset={12}
                            className="fill-foreground  md:text-2xl"
                            fontSize={12}
                        /> */}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
    )
}