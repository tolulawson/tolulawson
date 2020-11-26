import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Link from 'next/link';

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
          <meta name='description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.png`} />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@tolulawson' />
          <meta name='twitter:creator' content='@tolulawson' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.png`} />

          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        </Head>
        <body>
          <script src='/js/setTheme.js' />
          <nav>
            <Link href='/'>
              <a className='logo'>
                <img src='logo_dark.svg' alt='logo' />
              </a>
            </Link>
            <ul className='navigation'>
              <li><Link href='/'>About</Link></li>
              <li><Link href='/'>Projects</Link></li>
              <li><Link href='/'>Articles</Link></li>
              <li>
                <button type='button'>
                  <img src='dark_mode.svg' alt='dark-mode' />
                </button>
              </li>
            </ul>
          </nav>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
