"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function TryItFree() {
  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "800px",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        py: 14,
        px: 6,
      }}
    >
      <Typography
        sx={{
          fontSize: "3.125rem",
          fontFamily: "Inter, -apple-system, sans-serif",
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
          fontFamily: "Inter, -apple-system, sans-serif",
          color: "#FFFFFF",
          fontWeight: 500,
        }}
      >
        Leave an inquiry and a specialist will reach out within 24 hours.
      </Typography>
      <Button
        component="a"
        href="#contact"
        variant="contained"
        size="large"
        sx={{
          py: 1.5,
          px: 4,
          borderRadius: 2,
          background: 'white',
          fontWeight: 700,
          fontSize: "1rem",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          textTransform: "none",
          color: '#3D3D3D'
        }}
      >
        Start free for 7 days
      </Button>
    </Box>
  );
}
