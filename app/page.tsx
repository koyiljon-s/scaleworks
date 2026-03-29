import NavBar from "@/components/NavBar";
import TryItFree from "@/components/TtyItFree";
import { Box } from "@mui/material";



export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} />
      <TryItFree />
    </Box>
  )
}