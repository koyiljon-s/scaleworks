import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto',
        textAlign: 'center', 
        borderTop: 1, 
        borderColor: 'divider',
        bgcolor: '#f9fafb'
      }}
    >
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx ={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif', fontSize: '0.85rem', fontWeight: 500 }}
        >
        © {new Date().getFullYear()} Scaleworks. All rights reserved.
      </Typography>
    </Box>
  );
}