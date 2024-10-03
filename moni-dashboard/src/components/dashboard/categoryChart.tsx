import { CartesianGrid, YAxis, XAxis, Bar, LabelList, ResponsiveContainer, BarChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../../components/ui/chart";


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
  
export default function CategoryChart({ aggregatedData }: CategoryDataProp) {
    const formatNumber = (value: number) => {
      return value.toLocaleString('en-US');
    };
    return(
        <Card>
          <CardHeader className="flex flex-col">
                <CardTitle className="text-customColor">Gastos por Categoria</CardTitle>
                {/* <CardDescription>Texto Aqui</CardDescription> */}
            <CardDescription className="text-center">
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={aggregatedData}
                        layout="vertical"
                        margin={{ left: 90, right: 65 }}
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
                        width={100}
                        hide
                        />
                        <XAxis
                        dataKey="category_total"
                        type="number"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        domain={['auto', 'auto']}
                        tickFormatter={(value) => formatNumber(value)}
                        tickCount={6}
                        />
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                          dataKey="category_total"
                          layout="vertical"
                          fill="var(--color-desktop)"
                          radius={40}
                          stroke="#FFFFFF" 
                          strokeWidth={2}
                        >
                          <LabelList
                            dataKey="category"
                            position="left"   // Adjust the position to 'left'
                            offset={10}      // Increase offset to move labels outside the bars
                            className="fill-foreground md:text-sm lg:text-xs"
                          />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
    )
}