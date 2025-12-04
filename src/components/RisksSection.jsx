import { AlertTriangle, AlertCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// بيانات تجريبية للمخاطر المكتشفة
const risksData = [
  {
    type: "تنمر",
    severity: "عالي",
    count: 3,
    color: "bg-red-500",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    type: "قلق اجتماعي",
    severity: "متوسط",
    count: 5,
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    type: "حزن مستمر",
    severity: "متوسط",
    count: 4,
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    type: "عزلة اجتماعية",
    severity: "منخفض",
    count: 2,
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

const RisksSection = () => {
  // حساب إجمالي المخاطر
  const totalRisks = risksData.reduce((acc, curr) => acc + curr.count, 0);

  // عد المخاطر العالية
  //   const highRisks = risksData.filter((risk) => risk.severity === "عالي").length;

  // الحصول على أيقونة حسب نوع الخطر
  const getRiskIcon = (severity) => {
    if (severity === "عالي") return AlertTriangle;
    if (severity === "متوسط") return AlertCircle;
    return Shield;
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 animate-in fade-in duration-700 slide-in-from-bottom-4"
      dir="rtl "
    >
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-lg">
            <AlertTriangle className="text-red-500" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              المخاطر المكتشفة
            </h3>
            <p className="text-sm text-gray-500">تحليل تلقائي للمحادثات</p>
          </div>
        </div>
        <div className="text-left">
          <p className="text-3xl font-bold text-gray-800">{totalRisks}</p>
          <p className="text-xs text-gray-500">إجمالي الحالات</p>
        </div>
      </div>

      {/* Risks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {risksData.map((risk, index) => {
          const RiskIcon = getRiskIcon(risk.severity);
          return (
            <div
              key={index}
              className={` ${risk.borderColor} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 ${risk.bgLight}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <RiskIcon className={risk.textColor} size={20} />
                  <h4 className="font-bold text-gray-800">{risk.type}</h4>
                </div>
                <span
                  className={`${risk.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {risk.severity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`${risk.color} w-2 h-2 rounded-full animate-pulse`}
                  ></div>
                  <p className="text-gray-600 text-sm">
                    تم اكتشافه <span className="font-bold">{risk.count}</span>{" "}
                    مرات
                  </p>
                </div>
                <button
                  className={`text-xs ${risk.textColor} font-semibold hover:underline`}
                >
                  عرض التفاصيل ←
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Critical Alert if high risk exists
      {highRisks > 0 && (
        <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg mb-4 animate-pulse-slow">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
            <div>
              <p className="text-red-800 font-semibold mb-1">
                ⚠️ تنبيه عالي الأولوية
              </p>
              <p className="text-red-700 text-sm">
                تم اكتشاف مؤشرات على تنمر محتمل. يُنصح بالتواصل الفوري مع ولي
                الأمر أو المختص النفسي.
              </p>
            </div>
          </div>
        </div>
      )} */}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link
          to="/upgrade"
          className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 hover:cursor-pointer"
        >
          <Shield size={18} />
          عرض التوصيات
        </Link>
      </div>

      {/* Risk Level Indicator */}
      {/* <div className="mt-6 p-4 bg-linear-to-r from-gray-50 to-gray-100 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-gray-700">
            مستوى الخطر الإجمالي
          </p>
          <span
            className={`${
              highRisks > 0 ? "text-red-600" : "text-yellow-600"
            } font-bold text-sm`}
          >
            {highRisks > 0 ? "عالي" : "متوسط"}
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ${
              highRisks > 0
                ? "bg-linear-to-r from-red-500 to-red-600"
                : "bg-linear-to-r from-yellow-500 to-orange-500"
            }`}
            style={{ width: `${highRisks > 0 ? "85%" : "55%"}` }}
          ></div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RisksSection;
