"use client";

import { useEffect, useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Box, Typography } from "@mui/material";

const CARD_DURATION = 4000;
const FONT_FAMILY =
  "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

type CardData = {
  number: string;
  title: string;
  description: string;
  features: string[];
};

const cards: CardData[] = [
  {
    number: "01",
    title: "Start up Hiring",
    description: "Launch and hire without a recruiting team.",
    features: [
      "Instant career page",
      "Simple pipelines",
      "Fast decision-making",
    ],
  },
  {
    number: "02",
    title: "Scaling Teams",
    description: "Bring order to growing hiring complexity.",
    features: [
      "Structured workflows",
      "Hiring manager collaboration",
      "Interview standardization",
    ],
  },
  {
    number: "03",
    title: "High-Volume Hiring",
    description: "Handle hundreds of candidates without chaos.",
    features: [
      "Bulk actions",
      "Automated screening",
      "Pipeline filtering",
    ],
  },
  {
    number: "04",
    title: "Employer Branding",
    description: "Turn your careers page into a hiring engine.",
    features: [
      "No-code career site",
      "Custom domain",
      "Candidate experience",
    ],
  },
];

export default function AutoRotatingCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % cards.length);
      setPhase((currentPhase) => currentPhase + 1);
    }, CARD_DURATION);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleCardSelect = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setPhase((currentPhase) => currentPhase + 1);
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 28 },
        px: { xs: 2.5, sm: 3, md: 8 },
        bgcolor: "#ffffff",
        color: "#111111",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              md: "3.2rem",
              lg: "3.2rem",
            },
            fontWeight: 600,
            textAlign: "center",
            mb: 2,
            fontFamily: FONT_FAMILY,
          }}
        >
          Solutions for Every Stage of Hiring
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.4rem" },
            color: "#4a5568",
            mb: 4,
            maxWidth: 520,
            mx: "auto",
            textAlign: "center",
            lineHeight: 1.7,
            fontFamily: FONT_FAMILY,
          }}
        >
          Powerful workflows designed to support startups, growing teams, and enterprise-scale recruitment.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 2.5, sm: 3, md: 8 },
            mb: 2,
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <Box
                key={card.number}
                role="button"
                tabIndex={isActive ? -1 : 0}
                aria-label={`Select ${card.title}`}
                onClick={() => handleCardSelect(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardSelect(index);
                  }
                }}
                sx={{
                  cursor: isActive ? "default" : "pointer",
                  pt: { xs: 2, md: 10 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "5px",
                    bgcolor: "#e5e7eb",
                    borderRadius: "999px",
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  {isActive && (
                    <Box
                      key={phase}
                      sx={{
                        height: "100%",
                        width: "100%",
                        background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                        borderRadius: "999px",
                        transformOrigin: "left center",
                        animation: `progressFill ${CARD_DURATION}ms linear forwards`,
                        "@keyframes progressFill": {
                          from: { transform: "scaleX(0)" },
                          to: { transform: "scaleX(1)" },
                        },
                      }}
                    />
                  )}
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    fontWeight: 500,
                    color: "#111111",
                    lineHeight: 1,
                    mb: 0.75,
                    fontFamily: FONT_FAMILY,
                    transition: "color 0.3s ease",
                  }}
                >
                  {card.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "1.15rem", md: "1.4rem" },
                    fontWeight: 600,
                    color: isActive ? "#111111" : "#9ca3af",
                    mb: 1.25,
                    fontFamily: FONT_FAMILY,
                    transition: "color 0.3s ease",
                    py: { xs: 1, md: 1.5 },
                  }}
                >
                  {card.title}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    display: "grid",
                    gap: 0.75,
                    listStyle: "none",
                    p: 0,
                    m: 0,
                  }}
                >
                  {card.features.map((feature) => (
                    <Box
                      key={feature}
                      component="li"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        color: isActive ? "#4b5563" : "#9ca3af",
                        fontFamily: FONT_FAMILY,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        fontWeight: 500,
                        lineHeight: 1.4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      <CheckRoundedIcon
                        sx={{
                          color: isActive ? "#3b82f6" : "#d1d5db",
                          fontSize: 18,
                          flexShrink: 0,
                          transition: "color 0.3s ease",
                        }}
                      />
                      {feature}
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
