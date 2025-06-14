import type React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface PatientDemographicsChartProps {
  data: Array<{ name: string; value: number }>;
  colors?: string[];
  height?: number;
}

const PatientDemographicsChart: React.FC<PatientDemographicsChartProps> = ({
  data,
  colors = ["#2D5BFF", "#10B981", "#F59E0B", "#EF4444"],
  height = 200,
}) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const total = payload[0].payload.payload.reduce(
        (sum: number, item: any) => sum + item.value,
        0
      );
      const percentage = ((data.value / total) * 100).toFixed(1);

      return (
        <div className="bg-black text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="font-Outfit text-sm font-medium">{`${data.name}`}</p>
          <p className="font-Outfit text-sm">{`${data.value} (${percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    if (percent < 0.05) return null; // Don't show labels for slices smaller than 5%

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-Outfit text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              paddingTop: "20px",
              fontSize: "12px",
              fontFamily: "Outfit",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientDemographicsChart;
