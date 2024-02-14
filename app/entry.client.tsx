import { startTransition, StrictMode, useMemo, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import { getInitialNamespaces } from 'remix-i18next';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { RemixBrowser } from '@remix-run/react';
import { ThemeProvider } from '@mui/material/styles';
import Backend from 'i18next-http-backend';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ClientStyleContext from '~/contexts/ClientStyleContext';
import createEmotionCache from '~/contexts/createEmotionCache';
import i18n from '~/i18n';
import muiTheme from '~/utils/MUI/muiTheme';

import type { ReactNode } from 'react';

interface ClientCacheProviderProps {
  children: ReactNode;
}

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
  const [cache, setCache] = useState(createEmotionCache());

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    [],
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
};

const hydrate = async () => {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      ...i18n,
      ns: getInitialNamespaces(),
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      detection: {
        order: ['htmlTag'],
        caches: [],
      },
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <ClientCacheProvider>
            <ThemeProvider theme={muiTheme}>
              <RemixBrowser />
            </ThemeProvider>
          </ClientCacheProvider>
        </StrictMode>
      </I18nextProvider>,
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
