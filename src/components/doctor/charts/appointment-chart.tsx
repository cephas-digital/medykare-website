import type React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface AppointmentChartProps {
  data: Array<{ name: string; appointments: number }>;
  height?: number;
  color?: string;
}

const AppointmentChart: React.FC<AppointmentChartProps> = ({
  data,
  height = 200,
  color = "#2D5BFF",
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="font-Outfit text-sm">{`${label}`}</p>
          <p className="font-Outfit text-sm font-medium">{`${payload[0].value} appointments`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontFamily: "Outfit", fill: "#6B7280" }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="appointments" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentChart;
