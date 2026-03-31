import NavBar from "@/components/NavBar";
import TryItFree from "@/components/TtyItFree";
import ContactSales from "@/components/ContactSales";
import About from "@/components/About";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <About />
      <Box id="contact" sx={{ flexGrow: 1 }}>
        <ContactSales />
      </Box>
    </Box>
  );
}