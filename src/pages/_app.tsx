import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { linkResolver, repositoryName } from '../../prismicio';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import AnalyticsGoogle from '../components/Analytics';
import { Analytics } from "@vercel/analytics/next"

import { LanguageOptionContextProvider } from '../context/LanguageOptionsContext';
import '../i18n/index';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} legacyBehavior>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={theme}>
          <LanguageOptionContextProvider>
            <NextNProgress
              color={theme.primary}
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow
            />
            <AnalyticsGoogle />
            <Toaster position="bottom-right" />
            <Component {...pageProps} />
            <GlobalStyles />
            <Analytics />
          </LanguageOptionContextProvider>
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
