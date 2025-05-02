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
interface LoginFormProps {
  onSwitchToSignUp: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignUp }) => {
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={getText("rememberMe")}
          />
          <Button variant="text">{getText("forgotPassword")}</Button>
        </Box>
      </Stack>

      <Button fullWidth variant="contained" sx={{ mt: 5, py: 1 }}>
        {getText("logIn")}
      </Button>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body1" component="span" color="text.secondary">
          {getText("dontHaveAnAccount")}{" "}
        </Typography>
        <Link
          variant="body1"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onSwitchToSignUp();
          }}
          sx={{
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          {getText("signUp")}
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
