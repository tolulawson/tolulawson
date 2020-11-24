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
      <Html>
        <Head />

        <title>Tolu Lawson — Frontend Software Engineer</title>
        <meta name='title' content='Tolu Lawson — Frontend Software Engineer' />
        <meta name='description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://tolulawson.com/' />
        <meta property='og:title' content='Tolu Lawson — Frontend Software Engineer' />
        <meta property='og:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
        <meta property='og:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.png`} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://tolulawson.com/' />
        <meta property='twitter:title' content='Tolu Lawson — Frontend Software Engineer' />
        <meta property='twitter:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
        <meta property='twitter:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.png`} />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
