"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography } from "@mui/material";

const CARD_DURATION = 4000; // ms each card stays active

interface CardData {
  number: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    number: "01",
    title: "Talent Sourcing",
    description:
      "Identify and attract top candidates through intelligent sourcing channels and AI-powered matching.",
  },
  {
    number: "02",
    title: "Applicant Tracking",
    description:
      "Manage every stage of your pipeline with a unified view of every candidate and their progress.",
  },
  {
    number: "03",
    title: "Interview Scheduling",
    description:
      "Eliminate back-and-forth with automated scheduling that syncs directly to your team's calendars.",
  },
  {
    number: "04",
    title: "Offer & Onboarding",
    description:
      "Send offers, collect e-signatures, and kick off onboarding workflows — all from one place.",
  },
];

// Reusable typography styles (centralized for consistency)
const typographyStyles = {
  fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" as const,
} as const;

const sectionStyles = {
  width: "100%",
  py: { xs: 8, md: 14 },
  px: { xs: 3, md: 8 },
  background: "#ffffff",
  color: "#111111",
} as const;

const containerStyles = {
  maxWidth: 1200,
  mx: "auto",
} as const;

const headingStyles = {
  fontSize: { xs: "1.8rem", md: "2.4rem" },
  fontWeight: 700,
  mb: 2,
  ...typographyStyles,
} as const;

const subtitleStyles = {
  fontSize: { xs: "1rem", md: "1.1rem" },
  color: "#6b7280",
  mb: 8,
  maxWidth: 520,
  lineHeight: 1.7,
  ...typographyStyles,
} as const;

const labelsGridStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
  gap: 8,
  mb: 2,
} as const;

const descriptionsGridStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
  gap: 8,
} as const;

const progressContainerStyles = {
  width: "100%",
  height: "3px",
  backgroundColor: "#e5e7eb",
  borderRadius: "2px",
} as const;

const progressBarStyles = {
  height: "100%",
  width: "100%",
  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  borderRadius: "2px",
  transformOrigin: "left center",
  animation: `progressFill ${CARD_DURATION}ms linear forwards`,
} as const;

interface CardLabelProps {
  card: CardData;
  isActive: boolean;
  onClick: () => void;
  animKey: number;
}

const CardLabel: React.FC<CardLabelProps> = React.memo(({ card, isActive, onClick, animKey }) => (
  <Box
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    tabIndex={isActive ? -1 : 0}
    role="button"
    aria-label={`Select ${card.title}`}
    sx={{
      cursor: isActive ? "default" : "pointer",
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "1.4rem", md: "1.8rem" },
        fontWeight: 700,
        color: isActive ? "#3b82f6" : "#d1d5db",
        lineHeight: 1,
        mb: 0.75,
        ...typographyStyles,
        transition: "color 0.3s ease",
      }}
    >
      {card.number}
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: "1.1rem", md: "1.2rem" },
        fontWeight: 600,
        color: isActive ? "#111111" : "#9ca3af",
        mb: 1.5,
        ...typographyStyles,
        transition: "color 0.3s ease",
      }}
    >
      {card.title}
    </Typography>

    {/* Progress bar - only renders when active */}
    <Box sx={progressContainerStyles}>
      {isActive && (
        <Box
          key={animKey}
          sx={{
            ...progressBarStyles,
            "@keyframes progressFill": {
              from: { transform: "scaleX(0)" },
              to: { transform: "scaleX(1)" },
            },
          }}
        />
      )}
    </Box>
  </Box>
));

interface CardDescriptionProps {
  card: CardData;
  isActive: boolean;
}

const CardDescription: React.FC<CardDescriptionProps> = React.memo(({ card, isActive }) => (
  <Box>
    <Typography
      sx={{
        fontSize: { xs: "1rem", md: "1.2rem" },
        color: isActive ? "#6b7280" : "#d1d5db",
        lineHeight: 1.6,
        ...typographyStyles,
        transition: "color 0.3s ease",
      }}
    >
      {card.description}
    </Typography>
  </Box>
));

export default function AutoRotatingCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState(0); // Used to trigger progress bar animation

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const advanceToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setPhase((prev) => prev + 1);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(advanceToNext, CARD_DURATION);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [advanceToNext]);

  const handleCardSelect = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setPhase((prev) => prev + 1);
  };

  return (
    <Box component="section" sx={sectionStyles}>
      <Box sx={containerStyles}>
        {/* Header */}
        <Typography sx={headingStyles}>How it works</Typography>
        <Typography sx={subtitleStyles}>
          A streamlined process that takes your hiring from first touchpoint to day one.
        </Typography>

        {/* Labels + Progress Bars Row */}
        <Box sx={labelsGridStyles}>
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <CardLabel
                key={card.number}
                card={card}
                isActive={isActive}
                onClick={() => handleCardSelect(index)}
                animKey={phase}
              />
            );
          })}
        </Box>

        {/* Descriptions Row */}
        <Box sx={descriptionsGridStyles}>
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <CardDescription
                key={card.number}
                card={card}
                isActive={isActive}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}