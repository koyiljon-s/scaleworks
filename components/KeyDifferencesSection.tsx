"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const featureTitles = [
  "Recruitment homepage builder",
  "Direct sourcing",
  "Building a talent pool",
  "Massive hiring",
];

const featureCards = [
  {
    title: "Recruitment homepage builder",
    description:
      "Launch a polished careers experience in minutes with templates, brand controls, and live previews tailored to every role.",
  },
  {
    title: "Direct sourcing",
    description:
      "Engage high-intent talent directly from curated channels and automate follow-ups with collaborative workflows.",
  },
  {
    title: "Building a talent pool",
    description:
      "Create dynamic pools by skill, seniority, or geography and surface the right candidates with AI-boosted search.",
  },
  {
    title: "Massive hiring",
    description:
      "Coordinate high-volume campaigns with batching, evaluation snapshots, and centralized approvals at enterprise scale.",
  },
];

export default function KeyDifferencesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleNavClick = (index: number) => {
    const node = cardRefs.current[index];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-card-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#f8fafc",
        color: "#0b1528",
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 4,
                color: "text.secondary",
                fontWeight: 600,
              }}
            >
              Why Scaleworks
            </Typography>
            <Typography
              component="h2"
              sx={{
                mt: 1,
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Key differences that keep teams scaling
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 640,
                mx: "auto",
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              A sticky overview keeps priorities visible as you explore each high-impact capability in depth.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "320px minmax(0, 1fr)",
            },
            columnGap: { xs: 0, md: 6 },
            rowGap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              position: { xs: "static", md: "sticky" },
              top: { md: "120px" },
              alignSelf: "flex-start",
            }}
          >
            <Stack spacing={2} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {featureTitles.map((title, index) => {
                const isActive = index === activeIndex;
                return (
                  <Typography
                    key={title}
                    component="li"
                    tabIndex={0}
                    onClick={() => handleNavClick(index)}
                    sx={{
                      color: isActive ? "#1285ff" : "#27272a",
                      cursor: { xs: "default", md: "pointer" },
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      transition: "color 0.2s ease",
                      userSelect: "none",
                    }}
                  >
                    {title}
                  </Typography>
                );
              })}
            </Stack>
          </Box>

          <Stack spacing={6}>
            {featureCards.map((card, index) => (
              <Box
                key={card.title}
                data-card-index={index}
                sx={{
                  bgcolor: "white",
                  borderRadius: 6,
                  px: { xs: 3, md: 5 },
                  py: { xs: 4, md: 6 },
                  boxShadow:
                    "0 25px 60px rgba(10, 20, 45, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: "1px solid rgba(12, 25, 55, 0.08)",
                  minHeight: { xs: 360, md: 420 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <div>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "text.secondary",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    {card.description}
                  </Typography>
                </div>
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    bgcolor: "#eef2ff",
                    border: "1px dashed rgba(10, 20, 45, 0.24)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: { xs: 220, md: 280 },
                    color: "#4c51bf",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Mockup Area
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
