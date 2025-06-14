import type React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface EarningsChartProps {
  data: Array<{ month: string; earnings: number }>;
  height?: number;
  showGrid?: boolean;
  showYAxis?: boolean;
}

const EarningsChart: React.FC<EarningsChartProps> = ({
  data,
  height = 256,
  showGrid = false,
  showYAxis = false,
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="font-Outfit text-sm">{`${label}`}</p>
          <p className="font-Outfit text-sm font-medium">{`Earnings: $${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D5BFF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2D5BFF" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={false}
            />
          )}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontFamily: "Outfit", fill: "#6B7280" }}
          />
          {showYAxis && (
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontFamily: "Outfit", fill: "#6B7280" }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
          )}
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#2D5BFF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorEarnings)"
            dot={{ fill: "#2D5BFF", strokeWidth: 2, r: 6 }}
            activeDot={{
              r: 8,
              fill: "#2D5BFF",
              strokeWidth: 2,
              stroke: "#fff",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
