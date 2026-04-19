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
        py: { xs: 10, sm: 12, md: 24 },
        px: { xs: 2.5, sm: 3, md: 6 },
        textAlign: "center",
      }}
    >

      {/* Main Heading */}
      <Typography
        sx={{
          maxWidth: "900px",
          fontSize: { xs: "2.55rem", sm: "3.25rem", md: "4.8rem" },
          fontFamily:
            "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
          maxWidth: "750px",
          fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
          fontFamily:
            "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#71717a",
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        Integrate and automate your entire recruitment process with Scaleworks.
        <br />
        Hire top talent faster and fuel continuous business growth.
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
          px: { xs: 3, md: 3.5 },
          borderRadius: 2,
          background: "#2f6df6",
          fontWeight: 600,
          fontSize: "1rem",
          fontFamily:
            "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          textTransform: "none",
          color: "white",
        }}
      >
        Get 14 days free
      </Button>
    </Box>
  );
}
