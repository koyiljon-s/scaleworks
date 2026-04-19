'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';

export const navItems = [
  { label: 'Why Scaleworks', href: '/#why' },
  { label: 'Products', href: '/#products' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Pricing', href: '/pricing' },
];

type NavLinksProps = {
  direction?: 'row' | 'column';
  onNavigate?: () => void;
  sx?: SxProps<Theme>;
};

export default function NavLinks({
  direction = 'row',
  onNavigate,
  sx,
}: NavLinksProps) {
  const isColumn = direction === 'column';

  return (
    <Box
      component="nav"
      aria-label="Primary navigation"
      sx={{
        display: 'flex',
        flexDirection: direction,
        alignItems: isColumn ? 'stretch' : 'center',
        gap: isColumn ? 1 : 3,
        ...sx,
      }}
    >
      {navItems.map(item => (
        <Button 
          key={item.href} 
          component={Link}
          href={item.href}
          onClick={onNavigate}
          sx={{
            justifyContent: isColumn ? 'flex-start' : 'center',
            minHeight: isColumn ? 44 : 36,
            px: isColumn ? 1 : 1.5,
            textTransform: 'none',
            fontWeight: '650',
            fontSize: '1rem',
            color: '#3D3D3D',
            fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}>
           {item.label}
        </Button>
      ))}
    </Box>
  );
}
