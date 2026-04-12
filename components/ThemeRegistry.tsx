"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const FONT_FAMILY =
  "var(--font-pretendard), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    allVariants: {
      fontFamily: FONT_FAMILY,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: FONT_FAMILY,
        },
        "*, *::before, *::after": {
          fontFamily: FONT_FAMILY,
        },
      },
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
