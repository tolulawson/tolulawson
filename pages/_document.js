import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='dark'>
        <Head>
          <meta name='title' content='Tolu Lawson — Software Engineer' />
          <meta name='description' content='I help businesses establish and optimize their web presence by designing and building performant, maintainable and accessible websites tailored for optimal user experience' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='I help businesses establish and optimize their web presence by designing and building performant, maintainable and accessible websites tailored for optimal user experience' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.location.origin : ''}/share_preview.jpg`} />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@tolulawson' />
          <meta name='twitter:creator' content='@tolulawson' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='I help businesses establish and optimize their web presence by designing and building performant, maintainable and accessible websites tailored for optimal user experience' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.jpg`} />

          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link rel='icon' type='image/png' href='favicon-32x32.png' sizes='32x32' />
          <link rel='icon' type='image/png' href='favicon-16x16.png' sizes='16x16' />
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
