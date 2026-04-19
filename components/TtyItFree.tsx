"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function TryItFree() {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
        display: "flex",
        width: { xs: "calc(100% - 32px)", md: "100%" },
        maxWidth: "1200px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: { xs: 3, md: 5 },
        gap: 2,
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 35%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 40%),
          linear-gradient(135deg, #2f6df6 0%, #2357df 55%, #1d4ed8 100%)
        `,
        boxShadow: "0 30px 80px rgba(29, 78, 216, 0.25)",
        py: { xs: 6, md: 10 },
        px: { xs: 2.5, sm: 4, md: 6 },
        mx: "auto",
        fontFamily:
          "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3.125rem" },
          fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#FFFFFF",
          fontWeight: 700,
          lineHeight: 1.15,
        }}
      >
        Try it free, talk to our team
      </Typography>
      <Typography
        sx={{
          pb: { xs: 2, md: 4 },
          fontSize: { xs: "1rem", md: "1.4rem" },
          fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#FFFFFF",
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        Leave an inquiry and a specialist will reach out within 24 hours.
      </Typography>
      <Button
        component="a"
        href="/contact"
        variant="contained"
        size="large"
        sx={{
          py: 1.5,
          px: { xs: 3, md: 4 },
          borderRadius: 2,
          background: 'white',
          fontWeight: 700,
          fontSize: "1rem",
          fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          textTransform: "none",
          color: '#3D3D3D'
        }}
      >
        Start free for 14 days
      </Button>
    </Box>
  );
}
