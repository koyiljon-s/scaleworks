import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import FreeLayoutSection from "@/components/FreeLayoutSection";
import TryItFree from "@/components/TtyItFree";
import TalentPoolSection from "@/components/TalentPoolSection";
import CoordinateInterviewSchedule from "@/components/CoordinateInterviewSchedule";


export default function PricingPage() {
  return (
    <main>
      <NavBar />
      <Services />
      <FreeLayoutSection />
      <TalentPoolSection />
      <TryItFree />
    </main>
  );
}
