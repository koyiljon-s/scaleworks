import NavBar from "@/components/NavBar";
import About from "@/components/About";
import TryItFree from '@/components/TtyItFree';
import Services from '@/components/Services';
import FreeLayoutSection from '@/components/FreeLayoutSection';
import TalentPoolSection from '@/components/TalentPoolSection';
import HiringNarrative from '@/components/HiringNarrative';
import AutoRotatingCards from '@/components/AutoRotatingCards';
import FAQ from '@/components/FAQ';
import { Box } from "@mui/material";

const sectionAnchorStyles = {
  scrollMarginTop: { xs: 72, md: 88 },
};

export default function Home() {
  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: "column", bgcolor: 'white' }}>
      <NavBar />
      <Box component="section" id="home" sx={sectionAnchorStyles}>
        <About />
      </Box>
      <Box component="section" id="products" sx={sectionAnchorStyles}>
        <Services />
        <FreeLayoutSection />
        <TalentPoolSection />
      </Box>
      <Box component="section" id="solutions" sx={sectionAnchorStyles}>
        <AutoRotatingCards />
        <HiringNarrative />
      </Box>
      <Box component="section" id="faq" sx={sectionAnchorStyles}>
        <FAQ />
      </Box>
      <TryItFree />
    </Box>
  );
}
