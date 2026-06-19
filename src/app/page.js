import Banner from "./components/Banner";
import DoctorSection from "./components/DoctorSection"; // ✅ নতুন
import SpecialtySection from "./components/SpecialtySection";
import WhyChooseUs from "./components/WhyChooseUs";


export const metadata = {
  title: "Home",
  description:
    "Book appointments with experienced doctors and specialists through DocAppoint.",
};


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


