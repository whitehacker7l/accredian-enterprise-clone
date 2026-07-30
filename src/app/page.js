import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrackRecord from "../components/sections/TrackRecord";
import WhyAccredian from "../components/sections/WhyAccredian";
import Partners from "../components/sections/Partners";
import HowItWorks from "../components/ui/HowItWorks";
import ReferralBenefits from "../components/sections/ReferralBenefits";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";



export default function Home() {
  return (
  <>
  <Navbar/>
  <main className="w-full overflow-x-hidden">
    <Hero/>
    <TrackRecord/>
    <WhyAccredian/>
    <Partners/>
    <HowItWorks/>
    <ReferralBenefits/>
    <FAQ/>

  </main> 
  <Footer/>
</>
);
}