"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2.5,
        py: { xs: 12, md: 20 },
        px: { xs: 3, md: 6 },
        textAlign: "center",
      }}
    >

      {/* Main Heading */}
      <Typography
        sx={{
          maxWidth: "900px",
          fontSize: { xs: "3.25rem", md: "4.8rem" },
          fontFamily: "Inter, -apple-system, sans-serif",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",

          background: "linear-gradient(90deg, #1d4ed8 0%, #2563EB 40%, #3b82f6 75%, #60a5fa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Increase recruitment efficiency
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          pb: 2,
          maxWidth: "650px",
          fontSize: "1.25rem",
          fontFamily: "Inter, -apple-system, sans-serif",
          color: "#666666",
          fontWeight: 600,
          lineHeight: 1.6,
        }}
      >
        Integrate and automate all recruitment processes with Scaleworks
        <br />
        Gain the hiring competitiveness that drives continuous business growth.
      </Typography>

      {/* CTA */}
      <Button
        component="a"
        href="/contact"
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          py: 1.25,
          px: 3.5,
          borderRadius: 2,
          background: "#2f6df6",
          fontWeight: 600,
          fontSize: "1rem",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          textTransform: "none",
          color: "white",
        }}
      >
        Get 7 days free
      </Button>
    </Box>
  );
}