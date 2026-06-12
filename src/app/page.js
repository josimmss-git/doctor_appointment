import Banner from "./components/Banner";
import DoctorSection from "./components/DoctorSection"; // ✅ নতুন
import SpecialtySection from "./components/SpecialtySection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <DoctorSection />
      <SpecialtySection />
      <WhyChooseUs />
    </div>
  );
}