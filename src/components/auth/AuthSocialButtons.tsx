import React from "react";
import { Box, Button } from "@mui/material";
import { Google, Microsoft, GitHub } from "@mui/icons-material";
import { useTranslation } from "../../translations/useTranslation";
const AuthSocialButtons: React.FC = () => {
  const { getText } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="outlined"
        startIcon={<Google />}
        fullWidth
        sx={{ height: "3.5rem" }}
      >
        {getText("continueWithGoogle")}
      </Button>

      <Button
        variant="outlined"
        startIcon={<Microsoft />}
        fullWidth
        sx={{ height: "3.5rem" }}
      >
        {getText("continueWithMicrosoft")}
      </Button>
      
      <Button
        variant="outlined"
        startIcon={<GitHub />}
        fullWidth
        sx={{ height: "3.5rem" }}
      >
        {getText("continueWithGithub")}
      </Button>
    </Box>
  );
};

export default AuthSocialButtons;
