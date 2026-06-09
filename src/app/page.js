import Image from "next/image";
import Banner from "./components/Banner";
import TopRatedPage from "./components/TopRate";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopRatedPage />
    </div>
  );
}
