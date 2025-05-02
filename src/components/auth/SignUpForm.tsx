import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BRInput from "@/components/mui/inputs/BRInput";
import { useTranslation } from "@/translations/useTranslation";
interface SignUpFormProps {
  onSwitchToLogin: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSwitchToLogin }) => {
  const { getText } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Stack gap={3}>
        <BRInput
          label={getText("email")}
          placeholder={getText("emailPlaceholder")}
        />

        <BRInput
          label={getText("password")}
          placeholder={getText("passwordPlaceholder")}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword
                    ? getText("hideThePassword")
                    : getText("displayThePassword")
                }
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        <FormControlLabel
          control={<Checkbox value="terms" color="primary" />}
          label={
            <Typography variant="body1">
              {getText("agreeTo")}{" "}
              <Link href="#" sx={{ fontWeight: 500 }}>
                {getText("termsOfService")}
              </Link>{" "}
              {getText("and")}{" "}
              <Link href="#" sx={{ fontWeight: 500 }}>
                {getText("privacyPolicy")}
              </Link>
            </Typography>
          }
        />
      </Stack>

      <Button fullWidth variant="contained" sx={{ mt: 5, py: 1 }}>
        {getText("createAccount")}
      </Button>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body1" component="span" color="text.secondary">
          {getText("alreadyHaveAnAccount")}{" "}
        </Typography>
        <Link
          variant="body1"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onSwitchToLogin();
          }}
          sx={{
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          {getText("logIn")}
        </Link>
      </Box>
    </>
  );
};

export default SignUpForm;
