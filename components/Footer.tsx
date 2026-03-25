import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 14, 
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
        sx ={{fontFamily: 'Inter, -apple-system, sans-serif', fontSize: '1rem', fontWeight: 600 }}
        >
        © {new Date().getFullYear()} Scaleworks. All rights reserved.
      </Typography>
    </Box>
  );
}