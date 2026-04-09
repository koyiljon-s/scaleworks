"use client";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";

export default function ContactSales() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll be in touch soon.");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 8, mt: 16 }}>
        <Typography
          color="text.primary"
          sx={{
            fontWeight: 700,
            fontSize: "2.7rem",
            fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Considering adoption?
        </Typography>
        <Typography
          color="text.primary"
          sx={{
            fontWeight: 700,
            fontSize: "2.7rem",
            fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Talk to the Scaleworks team first
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          mb: 8,
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            flex: 1,
            maxWidth: 500,
            borderRadius: 3,
            border: 1.5,
            borderColor: "#E0E0E0",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            align="left"
            sx={{
              fontFamily:
                "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 600,
              mb: 4,
            }}
          >
            Fill in the form
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2, maxWidth: 480, mx: "auto", width: "100%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      pointerEvents: "auto",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      pointerEvents: "auto",
                    },
                  }}
                />
              </Box>

              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    pointerEvents: "auto",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    pointerEvents: "auto",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    pointerEvents: "auto",
                  },
                }}
              />

              <Box sx={{ position: "relative", zIndex: 9999 }}>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details"
                  className="details-textarea"
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  display: "flex",
                  mx: "auto",
                  width: "100%",
                  borderRadius: 2,
                  bgcolor: "#2563EB",
                  "&:hover": { bgcolor: "#1D4ED8" },
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  fontFamily:
                    "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  textTransform: "none",
                }}
              >
                Send inquiry
              </Button>

              <Typography
                component="h1"
                gutterBottom
                align="center"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 300,
                  color: "#666666",
                }}
              >
                We'll get back to you within 24 hours.
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box
          sx={{
            width: { xs: "100%", md: 450 },
            flexShrink: 0,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box
            sx={{
              pt: { xs: 2, md: 22 },
              borderBottom: "2px solid #E0E0E0",
              pb: 4,
              width: "100%",
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <MenuBookIcon sx={{ color: '#3D3D3D' }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  mb: 0,
                  pl: 2
                }}
              >
                User Guide
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 2,
                pl: 6,
                fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              Knowledgebase for all Scaleworks customers.
            </Typography>
            <Typography
              component="a"
              href="/user-guide"
              sx={{
                pl: 6,
                color: "#2563EB",
                textDecoration: "none",
                fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              View User Guide →
            </Typography>
          </Box>

          <Box
            sx={{
              borderBottom: "2px solid #E0E0E0",
              pb: 4,
              width: "100%",
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <DescriptionIcon sx={{ color: '#3D3D3D' }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  mb: 0,
                  pl: 2
                }}
              >
                Pricing
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 2,
                pl: 6,
                fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              Plans tailored to your scale and use case.
            </Typography>
            <Typography
              component="a"
              href="/pricing"
              sx={{
                pl: 6,
                color: "#2563EB",
                textDecoration: "none",
                fontFamily: "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              View Pricing →
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}