"use client";

import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import CropLandscapeRoundedIcon from "@mui/icons-material/CropLandscapeRounded";
import WebAssetRoundedIcon from "@mui/icons-material/WebAssetRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ViewCarouselRoundedIcon from "@mui/icons-material/ViewCarouselRounded";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const features = [
  { label: "Header", icon: CropLandscapeRoundedIcon },
  { label: "Footer", icon: WebAssetRoundedIcon },
  { label: "Click banner", icon: TouchAppRoundedIcon },
  { label: "Button", icon: DashboardCustomizeRoundedIcon },
  { label: "Images", icon: ImageOutlinedIcon },
  { label: "Videos", icon: SmartDisplayRoundedIcon },
  { label: "FAQs", icon: HelpRoundedIcon },

  { label: "Menu composition", icon: AppsRoundedIcon },
  { label: "Content Slider", icon: ViewCarouselRoundedIcon },
  { label: "Social media", icon: CameraAltOutlinedIcon },
  { label: "Mobile Optimization", icon: SmartphoneRoundedIcon },
  { label: "Blogs", icon: ArticleOutlinedIcon },
];

export default function FreeLayoutSection() {
  return (
    <Stack
      py={{ xs: 6, md: 20 }}
      spacing={{ xs: 2.5, md: 15 }}
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Typography
        sx={{
          color: "#1f2028",
          fontWeight: 600, 
          letterSpacing: "-0.03em", 
          lineHeight: 1.15, 
          textAlign: "center",
          fontSize: {
            xs: "2.4rem",
            sm: "2.8rem",
            md: "3.2rem",
            lg: "2.6rem",
          },
          maxWidth: "900px", 
          mx: "auto",
        }}
      >
        Create your own recruitment website
        <br />
        Easily without designers and developers
      </Typography>

      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "#f3f3f5",
          maxWidth: 1200,
          mx: "auto",
          borderRadius: "20px",
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
          py: { xs: 5, sm: 6, md: 10 },
        }}
      >
        <Grid
          container
          alignItems="center"
          columnSpacing={{ xs: 0, md: 6, lg: 10 }}
          rowSpacing={{ xs: 5, md: 0 }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack
              spacing={{ xs: 2.5, md: 3.5 }}
              sx={{
                maxWidth: { xs: "100%", md: 480 },
                
              }}
            >
              <Typography
                component="h2"
                sx={{
                  color: "#1f2028",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.2,
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "1.9rem",
                  },
                }}
              >
                Free layout
                <br />
                Content placement
              </Typography>

              <Typography
                sx={{
                  color: "#7a7b85",
                  fontWeight: 400,
                  lineHeight: 1.55,
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.125rem",
                    md: "1.1rem",
                  },
                  maxWidth: 520,
                }}
              >
                Take full control over your layout, from menus to footers and beyond.
                
                Quickly place elements exactly where you need them with drag-and-drop.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.25 }}>
              {features.map(({ label, icon: Icon }) => (
                <Grid key={label} size={{ xs: 6, sm: 4, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: { xs: 72, sm: 78, md: 76 },
                      borderRadius: "16px",
                      bgcolor: "#fafafa",
                      px: { xs: 1.2, sm: 1.5, md: 1.75 },
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid rgba(0,0,0,0.03)",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#6f7079",
                        fontWeight: 600,
                        fontSize: { xs: "0.76rem", md: "0.82rem" },
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        wordBreak: "keep-all",
                      }}
                    >
                      {label}
                    </Typography>

                    <Box
                      sx={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2f80ff",
                      }}
                    >
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
