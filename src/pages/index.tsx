import Cocktails from '../components/cocktails';
import FooterSection from '../components/footer';
import Head from 'next/head';
import Header from '../components/header';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>TCT Cocktails</title>
        <meta name="description" content="TCT Bev Matrix" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <div className="dark:bg-gray-900">
        <main className="container mx-auto">
          <Cocktails />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
