"use client";

import { Box, Typography, Stack, Paper } from "@mui/material";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import ModeCommentSharpIcon from "@mui/icons-material/ModeCommentSharp";
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';

type ServiceItem = {
  title: string;
  icon: typeof DashboardCustomizeSharpIcon;
};

const services: ServiceItem[] = [
  {
    title: "Recruitment Website Builder",
    icon: DashboardCustomizeSharpIcon,
  },
  {
    title: "Talent Pool Management",
    icon: DescriptionSharpIcon,
  },
  {
    title: "Automated Candidate Notifications",
    icon: NotificationsSharpIcon,
  },
  {
    title: "Coordinate Interview Schedule",
    icon: ModeCommentSharpIcon,
  },
  {
    title: "Real-Time Communication Tools",
    icon: PeopleSharpIcon,
  },
  {
    title: "Job posting & Applicant Tracking",
    icon: DashboardCustomizeSharpIcon,
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: `
        radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.25), transparent 60%),
        radial-gradient(ellipse at 50% 90%, rgba(255,255,255,0.06), transparent 45%),
        linear-gradient(
          to top,
          #000005 0%,
          #03091f 35%,
          #0d1f5c 60%,
          #1d4ed8 80%,
          #7ab8e8 100%
        )
      `,
        p: { xs: 2.5, sm: 4, md: 8 },
        mt: { xs: 4, md: 0 },
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "stretch" },
          gap: { xs: 5, md: 12 },
          maxWidth: "1000px",
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            alignSelf: { xs: "auto", md: "stretch" },
            py: { xs: 0, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.33rem" },
              fontWeight: 700,
              fontFamily:
                "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              mb: 2,
            }}
          >
            Powerful tools we offer 
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "rgba(255,255,255,0.8)",
              maxWidth: 420,
              lineHeight: 1.6,
              fontFamily:
                "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Explore the recruiting tools and workflows that help your team
            source, nurture, and hire talent without friction.
          </Typography>

        </Box>

        <Stack
          spacing={2.5}
          sx={{ flex: 1, width: "100%", alignSelf: { xs: "auto", md: "stretch" } }}
        >
          {services.map(({ title, icon: Icon }) => (
            <Paper
              key={title}
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                gap: 1.5,
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#3D3D3D",
                }}
              >
                <Icon fontSize="medium" sx={{ color: "white" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontWeight: 350,
                    color: "white",
                    mb: 0.5,
                    lineHeight: 1.35,
                    fontFamily:
                      "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
