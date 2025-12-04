import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import L from "leaflet";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Bell, MapPin, AlertTriangle, School } from "lucide-react";

export default function SchoolMapSection() {
  const baseLat = 30.0444;
  const baseLng = 31.2357;

  // Pre-defined stable positions for 10 students
  const children = [
    // Students inside safe zone (green - normal)
    {
      name: "طالب 1",
      grade: "الصف 1",
      status: "استغاثة",
      position: [baseLat + 0.0008, baseLng + 0.0005],
    },
    {
      name: "طالب 2",
      grade: "الصف 2",
      status: "طبيعي",
      position: [baseLat + 0.0012, baseLng - 0.0008],
    },
    {
      name: "طالب 3",
      grade: "الصف 3",
      status: "طبيعي",
      position: [baseLat - 0.001, baseLng + 0.0012],
    },
    {
      name: "طالب 4",
      grade: "الصف 4",
      status: "طبيعي",
      position: [baseLat - 0.0008, baseLng - 0.001],
    },
    {
      name: "طالب 5",
      grade: "الصف 5",
      status: "طبيعي",
      position: [baseLat + 0.0005, baseLng + 0.0015],
    },
    {
      name: "طالب 6",
      grade: "الصف 6",
      status: "طبيعي",
      position: [baseLat - 0.0012, baseLng - 0.0005],
    },

    // Students outside safe zone
    {
      name: "طالب 7",
      grade: "الصف 7",
      status: "خارج المنطقة الآمنة",
      position: [baseLat + 0.0035, baseLng + 0.0025],
    },
    {
      name: "طالب 8",
      grade: "الصف 8",
      status: "فقد الاتصال",
      position: [baseLat - 0.004, baseLng + 0.003],
    },
    {
      name: "طالب 9",
      grade: "الصف 9",
      status: "خارج المنطقة الآمنة",
      position: [baseLat + 0.0025, baseLng - 0.0045],
    },
    {
      name: "طالب 10",
      grade: "الصف 10",
      status: "خارج المنطقة الآمنة",
      position: [baseLat - 0.003, baseLng - 0.0035],
    },
  ];

  const getColor = (status) => {
    if (status === "طبيعي") return "green";
    if (status === "خارج المنطقة الآمنة") return "orange";
    if (status === "فقد الاتصال") return "purple";
    return "red";
  };

  const icon = (status) =>
    new L.Icon({
      iconUrl: `https://maps.google.com/mapfiles/ms/icons/${getColor(
        status
      )}-dot.png`,
      iconSize: [32, 32],
    });

  const safeZoneCenter = [baseLat, baseLng];

  // Count students by status
  const statusCounts = children.reduce((acc, child) => {
    acc[child.status] = (acc[child.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <School className="text-blue-600" size={24} />
            <CardTitle>خريطة مواقع الطلاب - المنطقة الآمنة للمدرسة</CardTitle>
          </div>
          <div className="text-sm text-gray-600">
            إجمالي الطلاب: <span className="font-bold">{children.length}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Status Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-green-700">
                طبيعي
              </span>
            </div>
            <p className="text-2xl font-bold text-green-700">
              {statusCounts["طبيعي"] || 0}
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-semibold text-orange-700">
                خارج المنطقة
              </span>
            </div>
            <p className="text-2xl font-bold text-orange-700">
              {statusCounts["خارج المنطقة الآمنة"] || 0}
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-semibold text-purple-700">
                فقد الاتصال
              </span>
            </div>
            <p className="text-2xl font-bold text-purple-700">
              {statusCounts["فقد الاتصال"] || 0}
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700">
                استغاثة
              </span>
            </div>
            <p className="text-2xl font-bold text-red-700">
              {statusCounts["استغاثة"] || 0}
            </p>
          </div>
        </div>

        {/* Map */}
        <MapContainer
          center={safeZoneCenter}
          zoom={15}
          style={{ height: "500px", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* SMALL SAFE ZONE - SCHOOL PREMISES ONLY - 200m radius */}
          <Circle
            center={safeZoneCenter}
            pathOptions={{
              color: "green",
              fillColor: "lightgreen",
              fillOpacity: 0.2,
              weight: 3,
            }}
            radius={200} // 200 meters radius - school building and grounds only
          />

          {/* School Center Marker */}
          <Marker
            position={safeZoneCenter}
            icon={
              new L.Icon({
                iconUrl:
                  "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                iconSize: [40, 40],
              })
            }
          >
            <Popup>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <School className="text-blue-600" size={16} />
                  <strong>المدرسة</strong>
                </div>
                <p className="text-gray-700">الموقع المركزي</p>
              </div>
            </Popup>
          </Marker>

          {/* Student Markers */}
          {children.map((child, idx) => (
            <Marker
              key={idx}
              position={child.position}
              icon={icon(child.status)}
            >
              <Popup>
                <div className="space-y-2 text-sm" dir="rtl">
                  <div className="flex items-center gap-2">
                    <User className="text-blue-600" size={16} />
                    <strong>{child.name}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <School size={16} className="text-gray-500" />
                    <span className="text-gray-700">{child.grade}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-700">الموقع الحالي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {child.status === "استغاثة" ? (
                      <AlertTriangle size={16} className="text-red-500" />
                    ) : (
                      <Bell size={16} className="text-gray-500" />
                    )}
                    <span>
                      الحالة:
                      <span
                        className="font-semibold mr-1"
                        style={{ color: getColor(child.status) }}
                      >
                        {child.status}
                      </span>
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend */}
        <div
          className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600"
          dir="rtl"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>طبيعي - داخل المنطقة الآمنة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span>خارج المنطقة الآمنة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
            <span>فقد الاتصال</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span>استغاثة - يحتاج تدخل فوري</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>موقع المدرسة</span>
          </div>
        </div>

        {/* Alert if emergency exists */}
        {statusCounts["استغاثة"] > 0 && (
          <div className="mt-4 bg-red-50 border-r-4 border-red-500 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={20} />
              <p className="text-red-800 font-semibold">
                تنبيه: يوجد {statusCounts["استغاثة"]} طالب في حالة استغاثة!
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
