'use client';

import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'white', borderBottom: scrolled ? '1px solid #E5E7EB' : 'none' }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 14 }}>

        {/* Logo */}
        <Typography fontWeight="700" component="a" href="/" sx={{fontFamily: 'Inter, sans-serif', fontSize: '1.4rem', letterSpacing: '-0.03em', color: '#2563EB'}}>
          Scaleworks
        </Typography>

        {/* Desktop Links - centered */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
          <NavLinks />
        </Box>

        {/* Right side buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/*<Button component={Link} href="/login" sx={{ textTransform: 'none', fontWeight: '650', fontSize: '1rem', color: '#3D3D3D', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}>
              Login
            </Button>
            */}
          <Button component="a" href="/contact" variant="contained" sx={{ textTransform: 'none', bgcolor: '#2563EB', '&:hover': { bgcolor: '#1D4ED8' }, fontSize: '1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}>
            Contact
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}