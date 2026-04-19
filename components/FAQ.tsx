"use client";

import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FAQ_ITEMS = [
  {
    question: "What does Scaleworks help recruiting teams manage?",
    answer:
      "Scaleworks brings your hiring work into one platform: career site creation, job postings, applicant tracking, talent pool management, interview scheduling, candidate notifications, team collaboration, and pipeline analytics.",
  },
  {
    question: "Can we build a recruitment website without designers or developers?",
    answer:
      "Yes. You can create a branded recruitment website with flexible layouts, menus, banners, images, videos, FAQs, blogs, social links, and mobile optimization. Scaleworks also supports subdomains and custom domain connections depending on your plan.",
  },
  {
    question: "How does Scaleworks help manage candidates after they apply?",
    answer:
      "Teams can track applicants, build talent pools, organize candidates with tags and filters, coordinate interview schedules, and send updates when interviews are booked, changed, or ready to share.",
  },
  {
    question: "What plans are available?",
    answer:
      "Standard covers the recruitment homepage builder, job postings, applications, interview scheduling, announcements, and subdomain registration. Pro adds analytics, templates, surveys, notifications, talent pools, and real-time support. Enterprise adds custom permissions, AI document screening, custom domains, and production support.",
  },
];

export default function FAQ() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: { xs: 2.5, sm: 4, md: 8, lg: 14 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 16 },
          }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "0 0 360px" },
            maxWidth: 420,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.25rem", md: "2.75rem" },
              fontWeight: 600,
              color: "black",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.35,
              color: "#666666",
              mb: 2,
            }}
          >
            Quick answers about building, tracking, and scaling your hiring process with Scaleworks.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          {FAQ_ITEMS.map((faq, index) => (
            <Accordion
              key={faq.question}
              disableGutters
              elevation={0}
              square
              sx={{
                bgcolor: "transparent",
                borderBottom: index === FAQ_ITEMS.length - 1 ? "none" : "1px solid #E2E8F0",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowForwardIosIcon sx={{ 
                  fontSize: "0.9rem", 
                  color: "#3D3D3D",
                  transform: "rotate(0deg)",
                  transition: "transform 0.3s",
                  ".Mui-expanded &": {
                    transform: "rotate(-90deg)",
                  }
                }} />}

                sx={{
                  px: 0,
                  py: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.98rem", md: "1rem" },
                    color: "#0F172A",
                    pr: 1.5,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 3 }}>
                <Typography sx={{ color: "#475569", lineHeight: 1.65 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
