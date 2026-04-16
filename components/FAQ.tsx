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
    question: "Do I need to install anything to start using Scaleworks?",
    answer:
      "Scaleworks runs in the cloud, so you can log in from any browser. We only recommend installing the onboarding assistant if you want real-time alerts on desktop.",
  },
  {
    question: "Does Scaleworks integrate with my existing ATS?",
    answer:
      "Yes. We ship native connectors for the most popular ATS platforms and provide an open API. Configure integrations from the admin settings without writing code.",
  },
  {
    question: "Can I customize the interview workflows?",
    answer:
      "You can tailor every stage, automation rule, and approver directly from the workflow builder. Drag and drop steps or add conditional logic in minutes.",
  },
  {
    question: "Is support included during the trial?",
    answer:
      "Absolutely. Our success engineers monitor your workspace and reply within one business day. Use the in-product chat or email us anytime.",
  },
];

export default function FAQ() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: 14,
        py: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 8, md: 16 },
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
              fontSize: "2.75rem",
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
              fontSize: "1.1rem",
              lineHeight: 1.2,
              color: "#666666",
              mb: 2,
            }}
          >
            Contact us if you need more details. We&apos;ll get back to you quickly.
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
                    fontSize: "1rem",
                    color: "#0F172A",
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
