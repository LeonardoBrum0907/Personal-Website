import { PrismicPreview } from '@prismicio/next';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { PrismicProvider } from '@prismicio/react';
import NextNProgress from 'nextjs-progressbar';
import { linkResolver, repositoryName } from '../services/prismic';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

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
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
