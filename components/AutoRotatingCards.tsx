"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const activeCard = cards[activeIndex];

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
        py: { xs: 8, md: 14 },
        px: { xs: 3, md: 8 },
        bgcolor: "#ffffff",
        color: "#111111",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "2.4rem",
              sm: "2.8rem",
              md: "3.2rem",
              lg: "2.6rem",
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
            fontSize: { xs: "1.2rem", md: "1.4rem" },
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
          aria-live="polite"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 3 },
            mb: { xs: 6, md: 8 },
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              height: { xs: 280, sm: 340, md: 380 },
              maxHeight: 380,
              justifySelf: "center",
              borderRadius: "8px",
              bgcolor: "#f3f4f6",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {activeCard.number === "04" && (
              <Image
                src="/recruitment-page-builder.png"
                alt="Recruitment website builder layout tools"
                width={1422}
                height={798}
                sizes="(max-width: 768px) 100vw, 600px"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              height: { xs: 280, sm: 340, md: 380 },
              maxHeight: 380,
              justifySelf: "center",


              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 700,
                lineHeight: 1,
                color: "#3b82f6",
                fontFamily: FONT_FAMILY,
              }}
            >
              {activeCard.number}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.9rem", md: "2.1rem" },
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#111111",
                fontFamily: FONT_FAMILY,
              }}
            >
              {activeCard.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                pb: "1.4rem",
                lineHeight: 1.65,
                color: "#4b5563",
                fontFamily: FONT_FAMILY,
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              {activeCard.description}
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "grid",
                gap: 1,
                listStyle: "none",
                py: 2,
                m: 0,
              }}
            >
              {activeCard.features.map((feature) => (
                <Box
                  key={feature}
                  component="li"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#71717a",
                    fontFamily: FONT_FAMILY,
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    fontWeight: 500,
                    lineHeight: 1.4,
                    py: 0.7,
                  }}
                >
                  <CheckRoundedIcon
                    sx={{
                      color: "#3b82f6",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  />
                  {feature}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 8,
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
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "5px",
                    bgcolor: "#e5e7eb",
                    borderRadius: "999px",
                    mb: 1.5,
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
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                    fontWeight: 600,
                    color: isActive ? "#111111" : "#9ca3af",
                    mb: 1.5,
                    fontFamily: FONT_FAMILY,
                    transition: "color 0.3s ease",
                  }}
                >
                  {card.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
