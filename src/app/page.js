import Banner from "./components/Banner";
import DoctorSection from "./components/DoctorSection"; // ✅ নতুন

export default function Home() {
  return (
    <div>
      <Banner />
      <DoctorSection /> {/* ✅ SearchBar + Cards সব এখানে */}
    </div>
  );
}