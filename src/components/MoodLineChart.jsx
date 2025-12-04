import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Smile, Heart, AlertTriangle } from "lucide-react";

// بيانات تجريبية لمزاج الطفل عبر المحادثات الأخيرة
const moodData = [
  { chat: "محادثة 1", score: 75, date: "2024-01-15" },
  { chat: "محادثة 2", score: 65, date: "2024-01-16" },
  { chat: "محادثة 3", score: 45, date: "2024-01-17" },
  { chat: "محادثة 4", score: 40, date: "2024-01-18" },
  { chat: "محادثة 5", score: 55, date: "2024-01-19" },
  { chat: "محادثة 6", score: 60, date: "2024-01-20" },
  { chat: "محادثة 7", score: 70, date: "2024-01-21" },
];

// تحديد حالة المزاج بناءً على النقاط
const getMoodStatus = (score) => {
  if (score >= 70)
    return {
      text: "جيد",
      color: "text-green-500",
      bg: "bg-green-100",
      icon: Smile,
    };
  if (score >= 50)
    return {
      text: "متوسط",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
      icon: Heart,
    };
  return {
    text: "يحتاج انتباه",
    color: "text-red-500",
    bg: "bg-red-100",
    icon: AlertTriangle,
  };
};

// Custom tooltip للرسم البياني
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    const status = getMoodStatus(score);
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800">{payload[0].payload.chat}</p>
        <p className={`text-sm ${status.color} font-semibold`}>
          المزاج: {score}%
        </p>
        <p className="text-xs text-gray-500 mt-1">{payload[0].payload.date}</p>
      </div>
    );
  }
  return null;
};

const MoodLineChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("أسبوع");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="text-[#006466]" size={24} />
          تطور المزاج عبر المحادثات
        </h3>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#006466] transition-all"
        >
          <option className="">أسبوع</option>
          <option>شهر</option>
          <option>3 أشهر</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={315}>
        <LineChart data={moodData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="chat"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            stroke="#9ca3af"
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            stroke="#9ca3af"
            label={{
              value: "المزاج %",
              angle: -90,
              position: "insideLeft",
              style: { fill: "#6b7280" },
            }}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* خط المزاج الرئيسي */}
          <Line
            type="monotone"
            dataKey="score"
            stroke="#006466"
            strokeWidth={3}
            dot={{ fill: "#006466", r: 5, strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 7, strokeWidth: 2, stroke: "#006466" }}
            animationDuration={1500}
          />

          {/* خط مرجعي للمستوى الطبيعي */}
          <Line
            type="monotone"
            dataKey={() => 70}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#006466] rounded-full"></div>
          <span className="font-medium">مزاج الطفل</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-green-500 border-2 border-dashed border-green-500"></div>
          <span className="font-medium">المستوى الطبيعي (70%)</span>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-6 flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="bg-[#d5f2e3] p-2 rounded-lg">
            <TrendingUp className="text-[#006466]" size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500">الاتجاه العام</p>
            <p className="text-sm font-bold text-gray-800">تحسن تدريجي</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`${
              getMoodStatus(moodData[moodData.length - 1].score).bg
            } p-2 rounded-lg`}
          >
            {(() => {
              const MoodIcon = getMoodStatus(
                moodData[moodData.length - 1].score
              ).icon;
              return (
                <MoodIcon
                  className={
                    getMoodStatus(moodData[moodData.length - 1].score).color
                  }
                  size={20}
                />
              );
            })()}
          </div>
          <div>
            <p className="text-xs text-gray-500">آخر محادثة</p>
            <p
              className={`text-sm font-bold ${
                getMoodStatus(moodData[moodData.length - 1].score).color
              }`}
            >
              {getMoodStatus(moodData[moodData.length - 1].score).text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodLineChart;
