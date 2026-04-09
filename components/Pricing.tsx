"use client";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

type Tier = {
  name: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel?: string;
} & (
  | {
      pricingType: "fixed";
      price: string;
      cadence: string;
    }
  | {
      pricingType: "custom";
      priceLabel: string;
    }
);

const tiers: readonly Tier[] = [
  {
    name: "Standard",
    description: "Perfect for testing recruiting automations on a small team.",
    pricingType: "fixed",
    price: "$25",
    cadence: "/ month",
    ctaLabel: "Start free trial",
    features: [
      "Up to 2 concurrent hiring workflows",
      "Automated interview scheduling",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "Unlock collaboration tools and data visibility as you scale.",
    pricingType: "fixed",
    price: "$50",
    cadence: "/ month",
    highlighted: true,
    ctaLabel: "Start free trial",
    features: [
      "Unlimited hiring workflows",
      "Team permissions & shared templates",
      "Pipeline analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    description: "Advanced automation for enterprises with complex approvals.",
    pricingType: "custom",
    priceLabel: "Contact us",
    ctaLabel: "Talk to sales",
    features: [
      "Territory & budget controls",
      "HRIS + ATS integrations",
      "Dedicated success partner",
    ],
  },
];

export default function Pricing() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5} textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3.25rem" },
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            Choose the plan that’s right for you
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              color: "#475467",
              maxWidth: "720px",
              mx: "auto",
              textAlign: "center",
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Not sure which plan is right for you? Contact us.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 0 }}
          sx={{
            alignItems: { xs: "stretch", md: "center" },
          }}
        >
          {tiers.map((tier, index) => {
            const isHighlighted = Boolean(tier.highlighted);
            const isFirst = index === 0;
            const isLast = index === tiers.length - 1;

            return (
              <Box
                key={tier.name}
                sx={{
                  flex: 1,
                  display: "flex",
                  minWidth: 0,
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    width: "100%",
                    minHeight: {
                      xs: "auto",
                      md: isHighlighted ? 580 : 520,
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: isHighlighted ? 2 : 1,
                    bgcolor: isHighlighted ? "#fff" : "#f8fafc",
                    borderColor: isHighlighted ? "rgba(59,130,246,0.45)" : "#e2e8f0",
                    borderWidth: isHighlighted ? 1.5 : 1,
                    borderRadius: {
                      xs: "20px",
                      md: isHighlighted
                        ? "24px"
                        : isFirst
                        ? "20px 0 0 20px"
                        : isLast
                        ? "0 20px 20px 0"
                        : 0,
                    },
                    transform: {
                      xs: "none",
                      md: isHighlighted ? "translateY(-12px)" : "none",
                    },
                    boxShadow: isHighlighted
                      ? "0 0 0 1px rgba(59,130,246,0.14), 0 18px 45px rgba(15,23,42,0.08), 0 8px 24px rgba(59,130,246,0.14)"
                      : "0 8px 24px rgba(15,23,42,0.05)",
                    transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: isHighlighted ? "translateY(-14px)" : "translateY(-6px)",
                      },
                      boxShadow: isHighlighted
                        ? "0 0 0 1px rgba(59,130,246,0.18), 0 24px 60px rgba(15,23,42,0.10), 0 10px 28px rgba(59,130,246,0.16)"
                        : "0 14px 32px rgba(15,23,42,0.08)",
                      borderColor: isHighlighted ? "rgba(59,130,246,0.5)" : "#cbd5e1",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.5,
                      px: 4,
                      py: 4,
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1.5}
                    >
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: { xs: "1.75rem", md: "2rem" },
                          fontWeight: 700,
                          color: "#111827",
                        }}
                      >
                        {tier.name}
                      </Typography>

                      {tier.badge ? (
                        <Chip
                          size="small"
                          label={tier.badge}
                          sx={{
                            height: 40,
                            px: 1,
                            borderRadius: "10px",
                            border: "1px solid",
                            borderColor: "rgba(59,130,246,0.18)",
                            bgcolor: "rgba(59,130,246,0.06)",
                            color: "#2563eb",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                          }}
                        />
                      ) : null}
                    </Stack>

                    <Typography
                      sx={{
                        color: "#6b7280",
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {tier.description}
                    </Typography>

                    <Divider sx={{ borderColor: "rgba(15,23,42,0.08)" }} />

                    <Box>
                      {tier.pricingType === "fixed" ? (
                        <Stack direction="row" alignItems="baseline" spacing={1}>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: "2rem",
                              fontWeight: 550,
                              lineHeight: 1,
                              color: "#0f172a",
                              letterSpacing: "-0.04em",
                            }}
                          >
                            {tier.price}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "#6b7280",
                              fontSize: "1rem",
                              fontWeight: 500,
                            }}
                          >
                            {tier.cadence}
                          </Typography>
                        </Stack>
                      ) : (
                        <Typography
                          sx={{
                            fontSize: "1.8rem",
                            fontWeight: 600,
                            lineHeight: 1.1,
                            color: "#0f172a",
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {tier.priceLabel}
                        </Typography>
                      )}
                    </Box>

                    <Stack component="ul" spacing={2} sx={{ listStyle: "none", p: 0, m: 0 }}>
                      {tier.features.map((feature) => (
                        <Stack
                          key={feature}
                          component="li"
                          direction="row"
                          spacing={1.5}
                          alignItems="flex-start"
                        >
                          <CheckRoundedIcon
                            fontSize="small"
                            sx={{ color: "#2563eb", mt: "3px", flexShrink: 0 }}
                          />
                          <Typography
                            sx={{
                              color: "#1f2937",
                              fontWeight: 500,
                              lineHeight: 1.6,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 4, pb: 4, pt: 0 }}>
                    <Button
                      fullWidth
                      size="large"
                      variant={isHighlighted ? "contained" : "outlined"}
                      sx={{
                        minHeight: 42,
                        borderRadius: "6px",
                        textTransform: "none",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        fontFamily:
                          "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        ...(isHighlighted
                          ? {
                              bgcolor: "#2563eb",
                              color: "#fff",
                              borderColor: "#2563eb",
                              "&:hover": {
                                bgcolor: "#1d4ed8",
                                borderColor: "#1d4ed8",
                              },
                            }
                          : {
                              bgcolor: "#f8f9fb",
                              color: "black",
                              borderColor: "#cbd5e1",
                              "&:hover": {
                                bgcolor: "#f8fafc",
                                borderColor: "#94a3b8",
                              },
                            }),
                      }}
                    >
                      {tier.ctaLabel}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            color: "#64748b",
            textAlign: "left",
          }}
        >
          * The maximum subscription period for the plans above is 30 days from the payment date.
        </Typography>
      </Container>
    </Box>
  );
}
