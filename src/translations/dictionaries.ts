interface Translations {
  [key: string]: {
    en: string;
    pt: string;
    ja: string;
  };
}

export const translations: Translations = {
  welcomeBack: {
    en: "Welcome back",
    pt: "Bem-vindo de volta",
    ja: "ようこそ",
  },
  createAccount: {
    en: "Create an account",
    pt: "Crie uma conta",
    ja: "アカウントを作成する",
  },
  orLogInWithEmail: {
    en: "or log in with email",
    pt: "ou logue com email",
    ja: "またはメールでログイン",
  },
  orSignInWithEmail: {
    en: "or sign in with email",
    pt: "ou cadastre-se com email",
    ja: "またはメールでサインイン",
  },
  email: {
    en: "Email",
    pt: "Email",
    ja: "メール",
  },
  password: {
    en: "Password",
    pt: "Senha",
    ja: "パスワード",
  },
  logIn: {
    en: "LOG IN",
    pt: "ENTRAR",
    ja: "ログイン",
  },
  signUp: {
    en: "SIGN UP",
    pt: "CADASTRAR",
    ja: "アカウントを作成する",
  },
  alreadyHaveAnAccount: {
    en: "Already have an account?",
    pt: "Já tem uma conta?",
    ja: "既にアカウントを持っていますか？",
  },
  dontHaveAnAccount: {
    en: "Don't have an account?",
    pt: "Não tem uma conta?",
    ja: "アカウントを持っていませんか？",
  },
  hideThePassword: {
    en: "Hide the password",
    pt: "Esconder a senha",
    ja: "パスワードを非表示にする",
  },
  displayThePassword: {
    en: "Display the password",
    pt: "Exibir a senha",
    ja: "パスワードを表示する",
  },
  rememberMe: {
    en: "Remember me",
    pt: "Lembrar-me",
    ja: "覚えておく",
  },
  forgotPassword: {
    en: "FORGOT PASSWORD?",
    pt: "Esqueceu sua senha?",
    ja: "パスワードを忘れた？",
  },
  termsOfService: {
    en: "Terms of Service",
    pt: "Termos de Serviço",
    ja: "利用規約",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    pt: "Política de Privacidade",
    ja: "プライバシーポリシー",
  },
  agreeTo: {
    en: "I agree to the",
    pt: "Eu concordo com os",
    ja: "同意します",
  },
  and: {
    en: "and",
    pt: "e",
    ja: "と",
  },
  emailPlaceholder: {
    en: "Enter your email",
    pt: "Digite seu email",
    ja: "メールアドレスを入力してください",
  },
  passwordPlaceholder: {
    en: "Enter your password",
    pt: "Digite sua senha",
    ja: "パスワードを入力してください",
  },
  continueWithGoogle: {
    en: "Continue with Google",
    pt: "Continuar com Google",
    ja: "Googleで続ける",
  },
  continueWithMicrosoft: {
    en: "Continue with Microsoft",
    pt: "Continuar com Microsoft",
    ja: "Microsoftで続ける",
  },
  continueWithGithub: {
    en: "Continue with Github",
    pt: "Continuar com Github",
    ja: "Githubで続ける",
  },
};

export type Language = "en" | "pt" | "ja";
