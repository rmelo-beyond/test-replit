import { AppProps } from "next/app";
import { LanguageProvider } from "../features/translations/LanguageContext";
import { Provider } from 'react-redux';
import { store } from '../features/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </Provider>
  );
}

export default MyApp;
