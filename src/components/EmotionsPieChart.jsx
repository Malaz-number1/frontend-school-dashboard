import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Heart, MessageCircle, PieChart as PieChartIcon } from "lucide-react";

// بيانات تجريبية لأنواع المشاعر
const emotionsData = [
  { name: "سعيد", value: 35, color: "#80ed99" },
  { name: "حزين", value: 25, color: "#22577a" },
  { name: "قلق", value: 20, color: "#57cc99" },
  { name: "خائف", value: 12, color: "#c7f9cc" },
  { name: "غاضب", value: 8, color: "#ffb703" },
];

// Custom tooltip للرسم الدائري
const PieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          {payload[0].value}% من المحادثات
        </p>
      </div>
    );
  }
  return null;
};

const EmotionsPieChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6" dir="rtl">
      {/* Header */}
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <PieChartIcon className="text-[#006466]" size={24} />
        توزيع المشاعر
      </h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={emotionsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            innerRadius={45}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1500}
            animationBegin={0}
          >
            {emotionsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<PieTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-6 space-y-3">
        {emotionsData.map((emotion, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: emotion.color }}
              ></div>
              <span className="text-gray-700 font-medium">{emotion.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800">{emotion.value}%</span>
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${emotion.value}%`,
                    backgroundColor: emotion.color,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {/* <div className="mt-6 p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-pink-500" size={16} />
          <p className="text-sm font-semibold text-gray-700">الشعور السائد</p>
        </div>
        <p className="text-lg font-bold text-gray-800">
          {emotionsData[0].name} ({emotionsData[0].value}%)
        </p>
      </div> */}
    </div>
  );
};

export default EmotionsPieChart;
