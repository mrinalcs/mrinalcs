import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "Mrinal' Portfullio",
    description: "Hello! I am Mrinal and currently pursuing my Bachelor's degree in Statistics, a fascinating field. I'm passionate about exploring patterns in data, applying statistical methods, and gaining insights that can have a meaningful impact.",
    image: '/images/photo.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
            <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">

  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&display=swap" as="style">

  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&display=swap" rel="stylesheet">


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
