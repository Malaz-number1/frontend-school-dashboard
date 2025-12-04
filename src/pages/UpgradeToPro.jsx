import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock } from "lucide-react";

export default function UpgradeToPro() {
  return (
    <div dir="rtl" className="flex items-center justify-center h-full p-6">
      <Card className="max-w-xl w-full shadow-md">
        <CardContent className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Lock className="mx-auto text-[#285273]" size={44} />
            <h1 className="text-2xl font-bold text-[#285273]">
              ميزة التوصيات متاحة فقط في خطة Pro
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              للحصول على تحليلات أعمق لحالة طفلك، وتوصيات مخصصة مبنية على
              سلوكياته ومحادثاته مع المساعد الذكي… قم بالترقية الآن.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">ماذا ستستفيد من خطة Pro؟</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                توصيات مخصصة لصحة الطفل النفسية والسلوكية
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                تحليل عميق لمحادثات الطفل مع المساعد
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                تنبيهات ذكية عند ملاحظة سلوك غير طبيعي
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                تقارير أسبوعية مفصلة عن حالة طفلك
              </li>
            </ul>
          </div>

          {/* Price Box
          <div className="bg-[#ECFFE5] p-4 rounded-lg border">
            <p className="font-semibold text-[#285273] text-center">
              سعر الاشتراك: 79 جنيه / شهرياً
            </p>
          </div> */}

          {/* Upgrade Button */}
          <Button className="w-full bg-[#285273] hover:bg-[#52796f] text-white text-lg py-6">
            ترقية الخطة إلى Pro
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
