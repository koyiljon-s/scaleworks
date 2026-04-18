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
        width: "100%",
        maxWidth: "1200px",
        maxHeight: "500px",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 5,
        gap: 2,
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 35%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 40%),
          linear-gradient(135deg, #2f6df6 0%, #2357df 55%, #1d4ed8 100%)
        `,
        boxShadow: "0 30px 80px rgba(29, 78, 216, 0.25)",
        py: 10,
        px: 6,
        mx: "auto",
        fontFamily:
          "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Typography
        sx={{
          fontSize: "3.125rem",
          fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#FFFFFF",
          fontWeight: 700,
        }}
      >
        Try it free, talk to our team
      </Typography>
      <Typography
        sx={{
          pb: 4,
          fontSize: "1.4rem",
          fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#FFFFFF",
          fontWeight: 500,
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
          px: 4,
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
