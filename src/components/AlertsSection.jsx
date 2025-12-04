import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  WifiOff,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AlertsSection() {
  const navigate = useNavigate();
  const alerts = [
    {
      id: 1,
      child: "محمد علي",
      type: "استغاثة",
      location: "بوابة المدرسة",
      time: "قبل دقيقة",
      severity: "high",
    },
    {
      id: 2,
      child: "سارة محمود",
      type: "فقد الاتصال",
      location: "آخر نقطة معروفة",
      time: "قبل 5 دقائق",
      severity: "medium",
    },
  ];

  const getAlertStyle = (type) => {
    if (type === "استغاثة") {
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: AlertTriangle,
        iconColor: "text-red-500",
        textColor: "text-red-700",
      };
    }
    return {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: WifiOff,
      iconColor: "text-purple-500",
      textColor: "text-purple-700",
    };
  };

  return (
    <Card className="border shadow-sm" dir="rtl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="text-red-500" size={24} />
            التنبيهات الحالية
          </CardTitle>
          <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
            {alerts.length} تنبيه
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="mx-auto mb-2 text-green-500" size={48} />
            <p className="font-semibold">لا توجد تنبيهات حالياً</p>
            <p className="text-sm">جميع الطلاب في أمان</p>
          </div>
        ) : (
          alerts.map((alert, idx) => {
            const style = getAlertStyle(alert.type);
            const Icon = style.icon;

            return (
              <div
                key={idx}
                onClick={() => navigate(`/child/${alert.id}`)}
                className={`flex justify-between items-center p-4 border-2 ${style.border} ${style.bg} rounded-lg hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`${style.iconColor} mt-1`}>
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">
                      {alert.child}
                    </p>
                    <p
                      className={`text-sm font-semibold ${style.textColor} mb-1`}
                    >
                      {alert.type}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold"
                  size="sm"
                >
                  <CheckCircle size={16} className="ml-1" />
                  تم الحل
                </Button>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
