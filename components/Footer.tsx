import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: { xs: 2.5, sm: 4, md: 8, lg: 14 }, 
        mt: 'auto',
        textAlign: 'left', 
        borderTop: 1, 
        borderColor: 'divider',
        bgcolor: '#f9fafb'
      }}
    >
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx ={{fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 600 }}
        >
        © {new Date().getFullYear()} Scaleworks. All rights reserved.
      </Typography>
    </Box>
  );
}
