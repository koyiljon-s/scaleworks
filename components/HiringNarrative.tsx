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
          radial-gradient(ellipse at 100% 50%, rgba(59,130,246,0.25), transparent 60%),
          radial-gradient(ellipse at 900% 50%, rgba(255,255,255,0.06), transparent 45%),
          linear-gradient(
            to right,
            #000005 0%,
            #03091f 35%,
            #0d1f5c 60%,
            #1d4ed8 80%,
            #7ab8e8 100%
          )
        `,
        color: "#f8fafc",
        py: { xs: 10, md: 8 },
        px: { xs: 2.5, sm: 4, md: 10, lg: 18 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack spacing={3}>
            {content.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.45rem", md: "1.7rem" },
                  lineHeight: { xs: 1.55, md: 1.7 },
                  textAlign: "left",
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
