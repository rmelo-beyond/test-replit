import React from "react";
import { Box, Typography, GlobalStyles } from "@mui/material";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles
        styles={{
          "html, body, #__next": {
            height: "100%",
            margin: 0,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.default",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "50%",
            margin: "1.5rem 0 1.5rem 1.5rem",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "1.5rem",
            background: "linear-gradient(180deg, #42A5F5 0%, #0D47A1 100%)",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Ai-6
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Box sx={{ padding: "5rem 7rem" }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
