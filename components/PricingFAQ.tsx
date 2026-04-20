"use client";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

const PRICING_FAQ_ITEMS = [
  {
    question: "Which plan should we start with?",
    answer:
      "Standard is best for teams that need a hiring site, job postings, applicant management, and interview scheduling. Pro is better when you need analytics, templates, surveys, notifications, talent pools, and faster support. Enterprise is for teams with custom permissions, AI screening, custom domains, or production support requirements.",
  },
  {
    question: "Can we try Scaleworks before choosing a paid plan?",
    answer:
      "Yes. Standard and Pro include a free trial option, so your team can test the hiring workflow before committing. If you need Enterprise features, contact sales and we will help scope the right setup.",
  },
  {
    question: "How does monthly pricing work?",
    answer:
      "Standard and Pro are listed as monthly plans. The maximum subscription period for each paid period is 30 days from the payment date.",
  },
  {
    question: "Why does Enterprise have custom pricing?",
    answer:
      "Enterprise pricing depends on your team size, permission structure, custom domain needs, AI document screening usage, and production support requirements. We scope those details with you before recommending a price.",
  },
];

export default function PricingFAQ() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: { xs: 2, md: 2 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 12 },
          }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 360px" },
              maxWidth: 420,
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.25rem", md: "2.75rem" },
                fontWeight: 600,
                color: "#0f172a",
                textTransform: "uppercase",
                mb: 1,
                letterSpacing: 0,
              }}
            >
              Pricing FAQ
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.45,
                color: "#64748b",
              }}
            >
              Clear answers about plans, trials, billing, and custom pricing.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            {PRICING_FAQ_ITEMS.map((faq, index) => (
              <Accordion
                key={faq.question}
                disableGutters
                elevation={0}
                square
                sx={{
                  bgcolor: "transparent",
                  borderBottom:
                    index === PRICING_FAQ_ITEMS.length - 1 ? "none" : "1px solid #E2E8F0",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "#3D3D3D",
                        transform: "rotate(0deg)",
                        transition: "transform 0.3s",
                        ".Mui-expanded &": {
                          transform: "rotate(-90deg)",
                        },
                      }}
                    />
                  }
                  sx={{
                    px: 0,
                    py: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.98rem", md: "1rem" },
                      color: "#0f172a",
                      fontWeight: 500,
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
      </Container>
    </Box>
  );
}
