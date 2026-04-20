import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import PricingFAQ from "@/components/PricingFAQ";
import TryItFree from "@/components/TtyItFree";

export default function PricingPage() {
  return (
    <main>
      <NavBar />
      <Pricing />
      <PricingFAQ />
      <TryItFree />
    </main>
  );
}
