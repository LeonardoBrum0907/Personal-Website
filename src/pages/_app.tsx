import { PrismicPreview } from '@prismicio/next';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { PrismicProvider } from '@prismicio/react';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { linkResolver, repositoryName } from '../services/prismicio';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import '../i18n/index';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={theme}>
          <NextNProgress
            color={theme.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />
          <Toaster position="bottom-right" />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
