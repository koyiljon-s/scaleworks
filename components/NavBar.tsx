'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './NavLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid #E5E7EB' : 'none',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'space-between',
          minHeight: { xs: 64, md: 72 },
          px: { xs: 2, sm: 3, md: 8, lg: 14 },
        }}
      >
        <Typography
          fontWeight="700"
          component={Link}
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          sx={{
            fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: { xs: '1.25rem', md: '1.4rem' },
            letterSpacing: '-0.03em',
            color: '#2563EB',
            textDecoration: 'none',
          }}
        >
          Scaleworks
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
          <NavLinks />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Button component={Link} href="/contact" variant="contained" sx={{ textTransform: 'none', bgcolor: '#2563EB', '&:hover': { bgcolor: '#1D4ED8' }, fontSize: '1rem', fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            Contact
          </Button>
        </Box>

        <IconButton
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#1f2937' }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Box
        sx={{
          display: { xs: mobileMenuOpen ? 'block' : 'none', md: 'none' },
          px: 2,
          pb: 2,
          bgcolor: 'white',
          borderTop: '1px solid #F1F5F9',
        }}
      >
        <NavLinks direction="column" onNavigate={() => setMobileMenuOpen(false)} />
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          fullWidth
          onClick={() => setMobileMenuOpen(false)}
          sx={{
            mt: 1,
            minHeight: 44,
            textTransform: 'none',
            bgcolor: '#2563EB',
            '&:hover': { bgcolor: '#1D4ED8' },
            fontSize: '1rem',
            fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Contact
        </Button>
      </Box>
    </AppBar>
  );
}
