import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
