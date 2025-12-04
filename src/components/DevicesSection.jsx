import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, Battery, WifiOff, Wrench, TrendingUp } from "lucide-react";

export default function DevicesSection() {
  const data = {
    active: 120,
    batteryLow: 13,
    offline: 6,
    damaged: 2,
  };

  const total = data.active + data.batteryLow + data.offline + data.damaged;
  const activePercentage = ((data.active / total) * 100).toFixed(1);

  const boxes = [
    {
      label: "متصلة",
      value: data.active,
      color: "bg-green-50 border-green-300",
      textColor: "text-green-700",
      iconColor: "text-green-500",
      bgIcon: "bg-green-100",
      icon: Smartphone,
    },
    {
      label: "تحتاج شحن",
      value: data.batteryLow,
      color: "bg-yellow-50 border-yellow-300",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-500",
      bgIcon: "bg-yellow-100",
      icon: Battery,
    },
    {
      label: "غير متصلة",
      value: data.offline,
      color: "bg-red-50 border-red-300",
      textColor: "text-red-700",
      iconColor: "text-red-500",
      bgIcon: "bg-red-100",
      icon: WifiOff,
    },
    {
      label: "تحتاج صيانة",
      value: data.damaged,
      color: "bg-gray-50 border-gray-300",
      textColor: "text-gray-700",
      iconColor: "text-gray-500",
      bgIcon: "bg-gray-100",
      icon: Wrench,
    },
  ];

  return (
    <Card className="border shadow-sm" dir="rtl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="text-blue-500" size={24} />
            حالة الأجهزة
          </CardTitle>
          <div className="text-sm text-gray-600">
            إجمالي: <span className="font-bold">{total}</span> جهاز
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Summary Bar */}
        <div className="mb-6 p-4 bg-linear-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-500" size={20} />
              <span className="text-sm font-semibold text-gray-700">
                معدل التشغيل
              </span>
            </div>
            <span className="text-2xl font-bold text-green-600">
              {activePercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-linear-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${activePercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Device Status Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {boxes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 border-2 rounded-xl text-center ${item.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`${item.bgIcon} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className={item.iconColor} size={24} />
                </div>
                <p className={`font-bold text-3xl mb-1 ${item.textColor}`}>
                  {item.value}
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Alerts if needed */}
        {data.batteryLow > 10 && (
          <div className="mt-4 bg-yellow-50 border-r-4 border-yellow-500 p-3 rounded-lg">
            <p className="text-yellow-800 text-sm font-semibold">
              ⚠️ تنبيه: {data.batteryLow} جهاز يحتاج للشحن قريباً
            </p>
          </div>
        )}

        {data.offline > 5 && (
          <div className="mt-2 bg-red-50 border-r-4 border-red-500 p-3 rounded-lg">
            <p className="text-red-800 text-sm font-semibold">
              🔴 تحذير: {data.offline} أجهزة غير متصلة بالشبكة
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
