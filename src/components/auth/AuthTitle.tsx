import React from "react";
import { Typography } from "@mui/material";

interface AuthTitleProps {
  children: React.ReactNode;
}

const AuthTitle: React.FC<AuthTitleProps> = ({ children }) => {
  return (
    <Typography variant="h4" fontWeight="bold" my={5}>
      {children}
    </Typography>
  );
};

export default AuthTitle;
