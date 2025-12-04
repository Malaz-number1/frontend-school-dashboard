import MapSection from "../components/MapSection";
import AlertsSection from "../components/AlertsSection";
import DevicesSection from "../components/DevicesSection";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6 font-sans">
      <AlertsSection />
      <MapSection />
      {/* <DevicesSection /> */}
    </div>
  );
}
