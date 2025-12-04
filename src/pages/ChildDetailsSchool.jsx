import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function ChildDetailsSchool() {
  const { id } = useParams();

  // بيانات تجريبية — مستقبلاً تجي من DB
  const child = {
    id,
    name: "محمد علي",
    age: "8 سنوات",
    grade: "الثاني الابتدائي",
    lastLocation: [30.0444, 31.2357],
    parent: {
      name: "علي محمد",
      phone: "01012345678",
      email: "ali_parent@email.com",
    },
    status: "استغاثة",
  };

  const icon = new L.Icon({
    iconUrl: `https://maps.google.com/mapfiles/ms/icons/red-dot.png`,
    iconSize: [32, 32],
  });

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle> بيانات الطالب</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>اسم الطالب:</strong> {child.name}
          </p>
          <p>
            <strong>العمر:</strong> {child.age}
          </p>
          <p>
            <strong>الصف:</strong> {child.grade}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle> بيانات ولي الأمر</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>الاسم:</strong> {child.parent.name}
          </p>
          <p>
            <strong>رقم الهاتف:</strong> {child.parent.phone}
          </p>
          <p>
            <strong>البريد:</strong> {child.parent.email}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle> آخر موقع معروف</CardTitle>
        </CardHeader>
        <CardContent>
          <MapContainer
            center={child.lastLocation}
            zoom={15}
            style={{ height: "350px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={child.lastLocation} icon={icon}>
              <Popup>آخر موقع للطالب</Popup>
            </Marker>
          </MapContainer>
        </CardContent>
      </Card>
    </div>
  );
}
