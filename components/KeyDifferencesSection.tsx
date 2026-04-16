"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import Image from "next/image";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import {
  Box,
  ButtonBase,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const featureTitles = [
  "All-in-one ecosystem",
  "Direct sourcing",
  "Building a talent pool",
  "Massive hiring",
];

const featureCards = [
  {
    title: "Operating system for your hiring",
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

type ServiceItem = {
  title: string;
  icon: ElementType<SvgIconProps>;
  accent: string;
  surface: string;
};

const serviceItems: ServiceItem[] = [
  {
    title: "Recruitment Website Builder",
    icon: LanguageRoundedIcon,
    accent: "#1285ff",
    surface: "#eaf4ff",
  },
  {
    title: "Subdomain and Custom Domain Registration",
    icon: PublicRoundedIcon,
    accent: "#0f9f6e",
    surface: "#e8f8f1",
  },
  {
    title: "Customize Announcement",
    icon: CampaignRoundedIcon,
    accent: "#8b5cf6",
    surface: "#f3efff",
  },
  {
    title: "Coordinate Interview Schedule",
    icon: EventAvailableRoundedIcon,
    accent: "#d97706",
    surface: "#fff4df",
  },
  {
    title: "Real-time Communication Tools",
    icon: ForumRoundedIcon,
    accent: "#0891b2",
    surface: "#e7f8fb",
  },
];

export default function KeyDifferencesSection() {
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
      <Container maxWidth="lg">
        <Stack spacing={6} textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Box>
            <Typography
              component="h2"
              sx={{
                mt: 1,
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 600,
                letterSpacing: 0,
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
            component="nav"
            aria-label="Key difference sections"
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
                        transition:
                          "background-color 0.2s ease, color 0.2s ease",
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

          <Stack spacing={6}>
            {featureCards.map((card, index) => (
              <Box
                key={card.title}
                ref={setCardRef(index)}
                data-card-index={index}
                sx={{
                  bgcolor: "white",
                  px: { xs: 3, md: 5 },
                  py: { xs: 4, md: 6 },
                  minHeight: { xs: 360, md: 420 },
                  scrollMarginTop: { xs: "96px", md: "128px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  borderBottom: "2px solid rgba(12, 25, 55, 0.08)",
                }}
              >
                <div>
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
                </div>
                {index === 0 ? (
                  <Box
                    component="section"
                    aria-labelledby="launch-stack-heading"
                    sx={{
                      flex: 1,
                      minHeight: { xs: 220, md: 280 },
                      borderRadius: 2,
                      bgcolor: "#f8fbff",
                      border: "1px solid rgba(18, 133, 255, 0.12)",
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 2.5,
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.5}
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            color: "#64748b",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          Launch stack
                        </Typography>
                        <Typography
                          id="launch-stack-heading"
                          component="h4"
                          sx={{
                            mt: 0.5,
                            color: "#0b1528",
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                            fontWeight: 700,
                            lineHeight: 1.25,
                          }}
                        >
                          Everything needed to go live
                        </Typography>
                      </Box>
                      <Chip
                        label="5 core services"
                        size="small"
                        sx={{
                          alignSelf: { xs: "flex-start", sm: "center" },
                          borderRadius: 2,
                          bgcolor: "white",
                          color: "#1285ff",
                          border: "1px solid rgba(18, 133, 255, 0.18)",
                          fontWeight: 700,
                        }}
                      />
                    </Stack>

                    <List
                      disablePadding
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 1.25,
                      }}
                    >
                      {serviceItems.map(({ title, icon: Icon, accent, surface }) => (
                        <ListItem
                          key={title}
                          disableGutters
                          sx={{
                            gridColumn:
                              title === "Real-time Communication Tools"
                                ? { sm: "1 / -1" }
                                : undefined,
                            minHeight: 72,
                            bgcolor: "white",
                            border: "1px solid rgba(12, 25, 55, 0.08)",
                            borderRadius: 2,
                            px: { xs: 1.5, md: 2 },
                            py: 1.4,
                            gap: 1.25,
                            boxShadow: "0 8px 20px rgba(15, 23, 42, 0.04)",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              width: 38,
                              height: 38,
                              borderRadius: 2,
                              bgcolor: surface,
                              color: accent,
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={title}
                            primaryTypographyProps={{
                              fontWeight: 650,
                              color: "#0b1528",
                              lineHeight: 1.25,
                              fontSize: { xs: "0.95rem", md: "1rem" },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ) : index === 2 ? (
                  <Box
                    sx={{
                      flex: 1,
                      minHeight: { xs: 220, md: 280 },
                      borderRadius: 2,
                      bgcolor: "#f3f4f6",
                      border: "1px solid rgba(12, 25, 55, 0.08)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: { xs: 1, md: 1.5 },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        overflowX: { xs: "auto", sm: "hidden" },
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      <Image
                        src="/talent_pool.png"
                        width={2370}
                        height={982}
                        alt="Talent pool management table with candidate details, filters, tags, and review status"
                        sizes="(max-width: 768px) 100vw, 720px"
                        style={{
                          display: "block",
                          width: "100%",
                          minWidth: "640px",
                          height: "auto",
                          borderRadius: 8,
                        }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: 2,
                      bgcolor: "#eef2ff",
                      border: "1px dashed rgba(10, 20, 45, 0.24)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: { xs: 220, md: 280 },
                      color: "#4c51bf",
                      fontWeight: 600,
                      letterSpacing: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    Mockup Area
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
