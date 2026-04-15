"use client";

import { Box, Container, Typography, Stack } from "@mui/material";

const content = [
  "In a fast-moving tech industry with intense talent competition, Scaleworks eliminates the chaos of fragmented hiring tools. We combine a professional career website, intuitive Kanban management, smart automation, and powerful analytics — so you can find top talent accurately and hire them faster than ever. The result? A smoother, faster, and more effective hiring process for your team."
];

export default function HiringNarrative() {
  return (
    <Box
      component="section"
      sx={{
        background: `
          linear-gradient(
            90deg, #0B2A6F 0%, #1E4FD1 50%, #6FA4FF 200%
          )
        `,
        maxWidth: "1200px",
        borderRadius: 5,
        mx: "auto",
        color: "#f8fafc",
        py: { xs: 10, md: 8 },
        px: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack spacing={3}>
            {content.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  fontSize: { xs: "1.85rem", md: "1.7rem" },
                  lineHeight: 1.7,
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                {`"${paragraph}"`}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
