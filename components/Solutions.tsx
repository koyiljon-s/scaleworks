"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
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
          background: "white",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={6} alignItems="center">
          <Box textAlign="center" maxWidth={900}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.45rem" },
                fontWeight: 700,
                lineHeight: 1.4,
                color: "black",
                mb: 2,         
              }}
            >
              Streamline Your Entire Hiring Process
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.6,
              }}
            >
              Create professional career sites with custom domains, track every
              applicant in one place, and turn chaotic recruitment into a
              smooth, automated experience.
            </Typography>
          </Box>

          <Button
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "6px",
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#2563EB",
              "&:hover": { bgcolor: "#1D4ED8" },
            }}
          >
            Contact us for introduction
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
