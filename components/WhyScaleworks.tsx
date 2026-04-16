"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import Button from "@mui/material/Button";

export default function WhyScaleworks() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#010818",
        color: "white",
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 50% 65%, rgba(255,255,255,0.85), transparent 35%),
            radial-gradient(circle at 20% 80%, rgba(147,197,253,0.18), transparent 55%),
            radial-gradient(circle at 80% 20%, rgba(165,243,252,0.15), transparent 55%),
            linear-gradient(
              to top,
              #c7e9ff 0%,
              #e0f2fe 40%,
              #f5fbff 70%,
              #ffffff 100%
            )
          `,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={6} alignItems="center">
          <Box textAlign="center" maxWidth={720}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3.25rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "black",
                mb: 2,         
              }}
            >
              Why Scaleworks operators outpace standalone brands
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.6,
              }}
            >
              A purpose-built operating platform that compounds learnings across every acquisition.
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "#010818", pb: 10, py: 8 }}>
        <Button
          href="/contact"
          variant="contained"
          size="large"
          sx={{
            px: 2,
            py: 1,
            borderRadius: "6px",
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 600,
            textTransform: "none",
            bgcolor: "#2563EB",
            '&:hover': { bgcolor: "#1D4ED8" },
          }}
        >
          Contact us for introduction
        </Button>
      </Box>
    </Box>
  );
}
