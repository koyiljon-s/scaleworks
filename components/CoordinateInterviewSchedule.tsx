"use client";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Calendar, Card, Typography as AntTypography } from "antd";

export default function CoordinateInterviewSchedule() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fff",
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2.25rem",
                sm: "2.75rem",
                md: "3.1rem",
                lg: "2.6rem",
              },
              fontWeight: 600,
              letterSpacing: 0,
              color: "#0b1528",
            }}
          >
            Coordinate interview schedules without the back-and-forth
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
              color: "#4a5568",
              fontWeight: 500,
              maxWidth: 680,
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Compare availability, assign interviewers, and keep every candidate touchpoint visible from one shared calendar.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "1200px" },
            maxWidth: "100%",
            mx: "auto",
            bgcolor: "#fff",
            overflow: "hidden",
            "& .interview-calendar-card": {
              borderColor: "rgba(15, 23, 42, 0.08)",
              width: "100%",
              maxWidth: 490,
            },
            "& .interview-calendar-card .ant-card-head": {
              minHeight: 42,
              borderBottomColor: "rgba(15, 23, 42, 0.08)",
            },
            "& .interview-calendar-card .ant-card-head-title": {
              color: "#0f172a",
              fontSize: "0.95rem",
              fontWeight: 600,
            },
            "& .interview-calendar-card .ant-picker-calendar": {
              background: "transparent",
            },
            "& .interview-calendar-card .ant-picker-calendar-header": {
              paddingInline: 0,
              paddingBlockStart: 0,
            },
            "& .interview-calendar-card .ant-picker-panel": {
              borderTop: "1px solid rgba(15, 23, 42, 0.08)",
            },
            "& .interview-calendar-card .ant-picker-content th": {
              color: "#64748b",
              fontWeight: 600,
            },
            "& .schedule-email-card": {
              width: "100%",
              maxWidth: 420,
              borderRadius: 2,
              background: "#fff",
              overflow: "hidden",
            },
            "& .schedule-email-card .ant-card-body": {
              borderRadius: 0,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 3 },
              minHeight: { xs: 520, md: 560 },
            }}
          >
            <Box
              sx={{
                gridColumn: { xs: "1", md: "1 / 2" },
                bgcolor: "#f4f4f5",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: 2,
                minHeight: { xs: 240, md: "100%" },
                minWidth: 0,
                overflow: "hidden",
                p: { xs: 2, md: 3 },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.45rem", md: "1.75rem" },
                  fontWeight: 600,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  maxWidth: 420,
                }}
              >
                Understand the interviewer schedule at a glance
              </Typography>

              <Typography
                sx={{
                  mt: 1.25,
                  color: "#64748b",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.5,
                  maxWidth: 520,
                }}
              >
                See open time slots and interviewer coverage before sending invites.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 2.5, md: 3 },
                  maxWidth: 490,
                  mx: "auto",
                  width: "100%",
                }}
              >
                <Card
                  className="interview-calendar-card"
                  title="Interview calendar"
                  size="small"
                  variant="outlined"
                  styles={{
                    body: {
                      padding: 12,
                    },
                  }}
                >
                  <Calendar fullscreen={false} />
                </Card>
              </Box>
            </Box>

            <Box
              sx={{
                gridColumn: { xs: "1", md: "2 / 3" },
                bgcolor: "#f4f4f5",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: 2,
                minHeight: { xs: 240, md: "100%" },
                p: { xs: 2, md: 3 },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.45rem", md: "1.75rem" },
                  fontWeight: 600,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  maxWidth: 460,
                }}
              >
                Once your schedule is confirmed, you will be notified immediately
              </Typography>

              <Typography
                sx={{
                  mt: 1.25,
                  color: "#64748b",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.5,
                  maxWidth: 460,
                }}
              >
                Get instant updates when interview times are booked, changed, or ready to share.
              </Typography>

              <Box sx={{ mt: { xs: 3, md: 4 }, maxWidth: 420, mx: "auto" }}>
                <Card
                  className="schedule-email-card"
                  variant="outlined"
                  styles={{
                    body: {
                      padding: 14,
                    },
                  }}
                >
                  <AntTypography.Paragraph
                    style={{
                      color: "#0f172a",
                      fontSize: 13,
                      lineHeight: 1.55,
                      marginBottom: 12,
                    }}
                  >
                    Hi [Candidate Name],
                  </AntTypography.Paragraph>

                  <AntTypography.Paragraph
                    style={{
                      color: "#334155",
                      fontSize: 13,
                      lineHeight: 1.55,
                      marginBottom: 14,
                    }}
                  >
                    We&apos;re pleased to inform you that your interview for the{" "}
                    <AntTypography.Text strong>[Position Title]</AntTypography.Text>{" "}
                    role has been scheduled.
                  </AntTypography.Paragraph>

                  <AntTypography.Paragraph
                    style={{
                      color: "#334155",
                      fontSize: 13,
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}
                  >
                    <AntTypography.Text strong>Date:</AntTypography.Text> April 20, 2026
                    <br />
                    <AntTypography.Text strong>Time:</AntTypography.Text> 09:30 AM
                    <br />
                    <AntTypography.Text strong>Location:</AntTypography.Text>{" "}
                    [Virtual / Office Address]
                  </AntTypography.Paragraph>

                  <AntTypography.Paragraph
                    style={{
                      color: "#334155",
                      fontSize: 13,
                      lineHeight: 1.55,
                      marginBottom: 12,
                    }}
                  >
                    You will receive additional details and reminders prior to your interview.
                  </AntTypography.Paragraph>

                  <AntTypography.Paragraph
                    style={{
                      color: "#334155",
                      fontSize: 13,
                      lineHeight: 1.55,
                      marginBottom: 14,
                    }}
                  >
                    If you have any questions or need to reschedule, please feel free to
                    reply to this email.
                  </AntTypography.Paragraph>

                  <AntTypography.Paragraph
                    style={{
                      color: "#0f172a",
                      fontSize: 13,
                      lineHeight: 1.55,
                      marginBottom: 0,
                    }}
                  >
                    Best regards,
                    <br />
                    [Company Name] Recruiting Team
                  </AntTypography.Paragraph>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
