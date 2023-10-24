import Head from 'next/head';

import App from '../components/app/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>A B Electrical & Maintenance</title>

        <meta name="description" content="A B Electrical" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
		
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="A B Electrical" />
        <meta name="description" content="A B Electrical & Maintenance" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://a-belectrical.co.uk/" />
        <meta property="og:title" content="A B Electrical & Maintenance" />
        <meta property="og:description" content="A B Electrical & Maintenance" />
        <meta property="og:image" content="http://a-belectrical.co.uk/images/meta/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://a-belectrical.co.uk/" />
        <meta property="twitter:title" content="A B Electrical & Maintenance" />
        <meta property="twitter:description" content="A B Electrical & Maintenance" />
        <meta property="twitter:image" content="http://a-belectrical.co.uk/images/meta/banner.png" />
      </Head>
      <App />
    </>
  )
}
