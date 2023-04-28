import { AppProps } from 'next/app';
import { FC, Suspense } from 'react';
import { Flowbite, Spinner } from 'flowbite-react';
import { flowbiteTheme as theme } from '../theme';
import '../styles/globals.css';

const App: FC<AppProps> = function ({ Component, pageProps }): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading...
        </div>
      }
    >
      <Flowbite theme={{ theme }}>
        <Component {...pageProps} />
      </Flowbite>
    </Suspense>
  );
};

export default App;
