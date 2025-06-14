import type React from "react";
// import { MdAssignment } from "react-icons/md";
import { PiCalendarLight } from "react-icons/pi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import { useNavigate } from "react-router";

interface AppointmentData {
  time: string;
  patient: string;
  type: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

interface ActivityData {
  patient: string;
  type: string;
  time: string;
}

interface ChartDataPoint {
  month: string;
  earnings: number;
}

const DoctorDashboardPage: React.FC = () => {
  const appointments: AppointmentData[] = [
    {
      time: "9:00 AM",
      patient: "Liam Carter",
      type: "Check-up",
      status: "Confirmed",
    },
    {
      time: "10:30 AM",
      patient: "Olivia Bennett",
      type: "Consultation",
      status: "Confirmed",
    },
    {
      time: "1:00 PM",
      patient: "Noah Davis",
      type: "Follow-up",
      status: "Pending",
    },
  ];

  const recentActivity: ActivityData[] = [
    {
      patient: "Olivia Bennett",
      type: "Consultation",
      time: "10:30 AM",
    },
    {
      patient: "Noah Davis",
      type: "Follow-up",
      time: "1:00 PM",
    },
    {
      patient: "Ethan Clark",
      type: "Check-up",
      time: "2:30 PM",
    },
  ];

  // Chart data for monthly earnings
  const earningsData: ChartDataPoint[] = [
    { month: "Jan", earnings: 8500 },
    { month: "Feb", earnings: 12000 },
    { month: "Mar", earnings: 9500 },
    { month: "Apr", earnings: 11000 },
    { month: "May", earnings: 13500 },
    { month: "Jun", earnings: 10500 },
    { month: "Jul", earnings: 14000 },
    { month: "Aug", earnings: 12500 },
    { month: "Sep", earnings: 15000 },
    { month: "Oct", earnings: 11500 },
    { month: "Nov", earnings: 13000 },
    { month: "Dec", earnings: 12500 },
  ];

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

  // Add this stats data array before the return statement
  const statsData = [
    {
      id: "total-patients",
      label: "Total Patients",
      value: "250",
    },
    {
      id: "new-patients",
      label: "New Patients",
      value: "15",
    },
    {
      id: "appointments-today",
      label: "Appointments Today",
      value: "3",
    },
  ];

  const navigate = useNavigate();

  return (
    <DoctorDashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Dashboard
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            Welcome back, Dr. Turner
          </p>
        </div>

        {/* Quick Actions */}
        <div className=" mt-5 mb-4">
          <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/doctor/appointments")}
              className="bg-[#2D5BFF] px-4 py-2 rounded-lg font-bold text-[#F7FAFC] font-Outfit text-sm hover:bg-blue-600 transition-colors"
            >
              View Appointments
            </button>
            <button
              onClick={() => navigate("/doctor/schedule")}
              className="bg-white px-4 py-2 rounded-lg font-bold text-[#000] font-Outfit text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              View Schedules
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className=" p-6 rounded-lg border border-gray-200"
            >
              <p
                className={`text-base text-[#0D171C] font-medium font-Outfit mb-2 `}
              >
                {stat.label}
              </p>
              <p className={` font-Outfit text-[#0D171C] font-bold text-2xl`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div className=" p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-base font-medium text-[#0D141C] font-Inter mb-1">
                Monthly Earnings
              </h3>
              <p className="text-3xl font-bold text-[#0D141C] font-Inter">
                $12,500
              </p>
              <p className="text-base text-[#4F7396] font-Inter font-normal">
                Last 12 Months{" "}
                <span className="text-[#088738] font-Inter font-medium text-base">
                  +15%
                </span>
              </p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={earningsData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorEarnings"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#2D5BFF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2D5BFF" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontFamily: "Outfit", fill: "#6B7280" }}
                />
                <YAxis hide />
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
        </div>

        {/* Today's Schedule */}
        <div>
          <h2 className=" font-Outfit font-bold text-xl text-[#0D141C] mb-4">
            Today's Schedule
          </h2>
          <div className=" rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#0D171C] uppercase tracking-wider font-Outfit">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#0D171C] uppercase tracking-wider font-Outfit">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#0D171C] uppercase tracking-wider font-Outfit">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#0D171C] uppercase tracking-wider font-Outfit">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4F7A96] font-normal font-Outfit">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0D171C] font-normal font-Outfit">
                      {appointment.patient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-8 py-1 inline-flex text-sm leading-5 font-medium rounded-lg bg-[#E8EDF2] text-[#0D171C] font-Outfit">
                        {appointment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-5 py-1 inline-flex text-sm font-Outfit leading-5 font-medium rounded-lg ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        } font-Outfit`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold text-[#0D171C] font-Outfit mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E8EDF2] rounded-lg flex items-center justify-center flex-shrink-0">
                  <PiCalendarLight className="w-4 h-4 text-[#0D171C]" />
                </div>
                <div>
                  <p className="text-base font-medium text-[#0D171C] font-Outfit">
                    {activity.patient} - {activity.type}
                  </p>
                  <p className="text-sm text-[#4F7A96] font-normal font-Outfit">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorDashboardPage;
