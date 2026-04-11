"use client";

import {
  Box,
  Typography,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
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
    title: "Job Posting & Candidate Management",
    icon: DescriptionSharpIcon,
  },
  {
    title: "Automated Email & SMS Notifications",
    icon: NotificationsSharpIcon,
  },
  {
    title: "Interview Scheduling & Coordination",
    icon: ModeCommentSharpIcon,
  },
  {
    title: "Real-Time Communication Tools",
    icon: PeopleSharpIcon,
  },
  {
    title: "Applicant Tracking System (ATS)",
    icon: DashboardCustomizeSharpIcon,
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background:
          "radial-gradient(circle at 70% 60%, #1e4fa3 0%, #020617 60%)",
        p: { xs: 4, md: 8 },
        mt: { xs: 6, md: 20 },
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "stretch" },
          gap: { xs: 4, md: 6 },
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
              fontSize: "2.2rem",
              fontWeight: 700,
              fontFamily:
                "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              mb: 2,
            }}
          >
            What services we provide
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "rgba(255,255,255,0.8)",
              maxWidth: 420,
              lineHeight: 1.6,
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
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 350,
                    color: "white",
                    mb: 0.5,
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
