"use client";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function ContactSales() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', gap: 4, mb: 8, mt: 16 }}>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 700, fontFamily: 'Inter, -apple-system, sans-serif' }}
        >
          Considering adoption?
        </Typography>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 700, fontFamily: 'Inter, -apple-system, sans-serif' }}
        >
          Talk to the Scaleworks team first
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, maxWidth: 900, mx: 'auto', alignItems: 'flex-start' }}>
        <Paper elevation={0} sx={{ p: 4, flex: 1, borderRadius: 3, border: 1.5, borderColor: '#E0E0E0' }}>
          <Typography variant="h5" component="h1" gutterBottom align="left" sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif', fontWeight: 600, mb: 6 }}>
            Fill in the form
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: 480, mx: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, pointerEvents: 'auto' } }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, pointerEvents: 'auto' } }}
                />
              </Box>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, pointerEvents: 'auto' } }}
              />
              <Box sx={{ display: "flex", gap: 3 }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, pointerEvents: 'auto' } }}
                />
              </Box>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, pointerEvents: 'auto' } }}
              />
              <Box sx={{ position: 'relative', zIndex: 9999 }}>
                <InputBase
                  multiline
                  rows={4}
                  name="details"
                  value={formData.message}
                  onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your needs..."
                  sx={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: 2,
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                  }}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ py: 2, display: "flex", mx: "auto", width: 480, borderRadius: 2, bgcolor: '#2563EB', '&:hover': { bgcolor: '#1D4ED8' }, fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif', textTransform: 'none' }}
              >
                Send inquiry
              </Button>
              <Typography component="p" align="center" sx={{ fontSize: '1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif', fontWeight: 300, color: '#666666', mt: 2 }}>
                We'll get back to you within 24 hours.
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box sx={{ flex: 1, mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontFamily: 'Inter, -apple-system, sans-serif' }}>
            Before you contact us
          </Typography>
          
          <Link href="/user-guide" style={{ textDecoration: 'none' }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                borderRadius: 2, 
                border: '1px solid #E0E0E0',
                '&:hover': { borderColor: '#2563EB', bgcolor: '#f0f7ff' },
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 2, 
                  bgcolor: '#E3F2FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MenuBookIcon sx={{ color: '#2563EB' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Inter, -apple-system, sans-serif', mb: 0.5 }}>
                    User Guide
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                    Knowledgebase for all Notifly customers.
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: '#2563EB', mt: 1 }} />
              </Box>
            </Paper>
          </Link>

          <Link href="/plans" style={{ textDecoration: 'none' }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                borderRadius: 2, 
                border: '1px solid #E0E0E0',
                '&:hover': { borderColor: '#2563EB', bgcolor: '#f0f7ff' },
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 2, 
                  bgcolor: '#FFF3E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <AttachMoneyIcon sx={{ color: '#F57C00' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Inter, -apple-system, sans-serif', mb: 0.5 }}>
                    Plans & Pricing
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                    Choose the plan that fits your needs.
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: '#2563EB', mt: 1 }} />
              </Box>
            </Paper>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}