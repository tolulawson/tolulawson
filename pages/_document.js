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
        <meta property='og:image' content='/share_preview.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://tolulawson.com/' />
        <meta property='twitter:title' content='Tolu Lawson — Frontend Software Engineer' />
        <meta property='twitter:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
        <meta property='twitter:image' content='/share_preview.png' />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
