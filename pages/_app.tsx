import type { AppProps } from 'next/app';

import { CubedProvider } from '../contexts/CubedContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CubedProvider>
      <Component {...pageProps} />
    </CubedProvider>
  );
}

export default MyApp;
