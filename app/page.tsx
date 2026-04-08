'use client';

import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import ContactSales from "@/components/ContactSales";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import TryItFree from '@/components/TtyItFree';
import Services from "@/components/Services";
import { Box } from "@mui/material";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: scrolled ? '#F8FAFC' : 'white' }}>
      <NavBar />
      <About />
      <Services />
      <FAQ />
      <TryItFree />
    </Box>
  );
}
