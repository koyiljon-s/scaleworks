'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

const navItems = [
  { label: 'Why Scaleworks',      href: '/whyscaleworks' },
  { label: 'Products',      href: '/products' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
];

export default function NavLinks() {
  return (
    <Box sx={{display: { xs: 'none', md: 'flex'}, alignItems: 'center', gap: 3}}>

      {/* Nav Links */}
      {navItems.map(item => (
        <Button 
          key={item.href} 
          component={Link} 
          href={item.href}
          sx={{ textTransform: 'none', fontWeight: '650', fontSize: '1rem', color: '#3D3D3D', fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
           {item.label}
        </Button>
      ))}

    </Box>
  );
}