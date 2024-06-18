import ComingSoon from "@/components/ComingSoon";
import HomeHead from "@/components/HomeHead";
import Navbar from "@/components/FrontEnd/Navbar";
import LocalSpotlight from "@/components/LocalSpotlight";
import BayDeNox from "@/components/BayDeNox";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HomeHead />
      <LocalSpotlight />
      <BayDeNox />
    </div>
  );
}
