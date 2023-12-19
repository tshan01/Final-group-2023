import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="theme-color" content="#yourColorValue" /> 
          {/* Add custom tags in the head here */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
