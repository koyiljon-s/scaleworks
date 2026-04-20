"use client";

import {
  Box,
  ButtonBase,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const featureTitles = [
  "Where hiring goes wrong",
  "Talent is everything",
  "Speed wins",
  "We built the better way",
];

const featureCards = [
  {
    title: "Hiring is broken for tech teams",
    description:
      "Most startups still rely on scattered tools, messy spreadsheets, and slow manual processes. Great candidates drop off, recruiters burn out, and top talent goes to companies with better experiences.",
  },
  {
    title: "Tech talent is the ultimate advantage",
    description:
      "In today’s market, the quality and speed of your hiring directly determines how fast your company can grow. The best founders know that hiring excellent engineers is their biggest competitive edge.",
  },
  {
    title: "Speed and candidate experience matter more than ever",
    description:
      "Top engineers have options. They expect fast, respectful, and professional hiring processes. Companies that deliver a modern experience win talent — those that don’t, lose it.",
  },
  {
    title: "Scaleworks is built for the new reality",
    description:
      "We combine a beautiful custom-domain career site, intuitive Kanban management, smart automation, and powerful analytics — so startups can find excellent tech talent accurately and recruit them significantly faster.",
  },
];

export default function WhyScaleworksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const setCardRef = (index: number) => (node: HTMLDivElement | null) => {
    if (node) {
      cardRefs.current[index] = node;
    }
  };

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
        bgcolor: "#fff",
        color: "#0b1528",
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        <Stack spacing={6} textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Box>
            <Typography
              component="h2"
              sx={{
                mt: 1,
                fontSize: { xs: "2.3rem", md: "3.3rem" },
                fontWeight: 600,
                letterSpacing: 0,
              }}
            >
              Why Scaleworks
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 720,
                mx: "auto",
                color: "text.secondary",
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.65,
              }}
            >
              In a world where talent is the ultimate moat, most startups still hire like it’s 2020. 
              Scaleworks fixes that. We give early-stage teams a modern, delightful, and highly effective way 
              to attract and hire excellent tech talent — faster than ever before.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(220px, 320px) minmax(0, 600px)",
            },
            justifyContent: { md: "space-between" },
            columnGap: { xs: 0, md: 8 },
            rowGap: { xs: 4, md: 0 },
          }}
        >
          {/* Navigation */}
          <Box
            component="nav"
            aria-label="Why Scaleworks sections"
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
                  <Box key={title} component="li">
                    <ButtonBase
                      onClick={() => handleNavClick(index)}
                      aria-current={isActive ? "true" : undefined}
                      sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        borderRadius: 2,
                        px: 1.5,
                        py: 1,
                        color: isActive ? "#1285ff" : "#27272a",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        letterSpacing: 0,
                        textAlign: "left",
                        transition: "background-color 0.2s ease, color 0.2s ease",
                        "&:hover, &:focus-visible": {
                          bgcolor: "rgba(18, 133, 255, 0.08)",
                          color: "#1285ff",
                        },
                        "&:focus-visible": {
                          outline: "2px solid rgba(18, 133, 255, 0.45)",
                          outlineOffset: 2,
                        },
                      }}
                    >
                      {title}
                    </ButtonBase>
                  </Box>
                );
              })}
            </Stack>
          </Box>

          {/* Content Cards */}
          <Stack spacing={6} sx={{ width: "100%", maxWidth: 600, justifySelf: { md: "end" } }}>
            {featureCards.map((card, index) => {
              const itemNumber = String(index + 1).padStart(2, "0");

              return (
                <Box
                  key={card.title}
                  ref={setCardRef(index)}
                  data-card-index={index}
                  sx={{
                    bgcolor: "white",
                    px: { xs: 3, md: 5 },
                    py: { xs: 4, md: 6 },
                    scrollMarginTop: { xs: "96px", md: "128px" },
                    maxWidth: 600,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    borderBottom: "2px solid rgba(12, 25, 55, 0.08)",
                  }}
                >
                  <Box>
                    <Typography
                      component="p"
                      sx={{
                        mb: 1.5,
                        color: "#1285ff",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        fontWeight: 700,
                        letterSpacing: 0,
                        lineHeight: 1,
                      }}
                    >
                      {itemNumber}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 600,
                        letterSpacing: 0,
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
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
