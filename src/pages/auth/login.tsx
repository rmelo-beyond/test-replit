import React, { useState } from "react";
import { Divider, Tab, Tabs, Typography } from "@mui/material";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthSocialButtons from "@/components/auth/AuthSocialButtons";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import AuthTitle from "@/components/auth/AuthTitle";
import { useTranslation } from "@/features/translations/useTranslation";
import { useGetPokemonByNameQuery } from "@/features/api/api";

const LoginPage = () => {
  const [tab, setTab] = useState(0);
  const { getText } = useTranslation();

  const { data } = useGetPokemonByNameQuery("pikachu");

  console.log({ DATA: data });
  console.log({ ENVTEST: process.env.NEXT_PUBLIC_TEST });

  return (
    <AuthLayout>
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3, borderBottom: "thin solid rgba(0, 0, 0, 0.12)" }}
      >
        <Tab
          label={getText("logIn")}
          sx={{ fontWeight: 500, fontSize: "0.875rem" }}
        />
        <Tab
          label={getText("signUp")}
          sx={{ fontWeight: 500, fontSize: "0.875rem" }}
        />
      </Tabs>

      {tab === 0 && (
        <>
          <AuthTitle>{getText("welcomeBack")}</AuthTitle>
          <AuthSocialButtons />
          <Divider sx={{ my: 5 }}>
            <Typography variant="body2" color="text.secondary">
              {getText("orLogInWithEmail")}
            </Typography>
          </Divider>
          <LoginForm onSwitchToSignUp={() => setTab(1)} />
        </>
      )}

      {tab === 1 && (
        <>
          <AuthTitle>{getText("createAccount")}</AuthTitle>
          <AuthSocialButtons />
          <Divider sx={{ my: 5 }}>
            <Typography variant="body2" color="text.secondary">
              {getText("orSignInWithEmail")}
            </Typography>
          </Divider>
          <SignUpForm onSwitchToLogin={() => setTab(0)} />
        </>
      )}
    </AuthLayout>
  );
};

export default LoginPage;
