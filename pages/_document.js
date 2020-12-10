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
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' rel='stylesheet' />
          <meta name='title' content='Tolu Lawson — Software Engineer' />
          <meta name='description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.location.origin : ''}/share_preview.png`} />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@tolulawson' />
          <meta name='twitter:creator' content='@tolulawson' />
          <meta property='og:url' content='https://tolulawson.com/' />
          <meta property='og:title' content='Tolu Lawson — Software Engineer' />
          <meta property='og:description' content='Software engineer with years of experience defining requirements, designing, implementing, testing, and delivering complex web applications and interactive experiences.' />
          <meta property='og:image' content={`${typeof window !== 'undefined' ? window.loation.origin : ''}/share_preview.png`} />

          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link rel='icon' type='image/png' href='favicon-32x32.png' sizes='32x32' />
          <link rel='icon' type='image/png' href='favicon-16x16.png' sizes='16x16' />
        </Head>
        <body>
          <script src='/js/setTheme.js' />
          <header>
            <div className='header-wrapper'>
              <Link href='/'>
                <a className='logo'>
                  <img src='logo_dark.svg' alt='logo' />
                </a>
              </Link>
              <nav className='navigation'>
                <span className={`${process.browser && window.location.pathname.endsWith('about') ? 'current-menu' : ''}`}><Link href='/about'>About</Link></span>
                <span><Link href='/'>Projects</Link></span>
                <span><Link href='/'>Articles</Link></span>
                <span>
                  <button type='button'>
                    <img src='dark_mode.svg' alt='dark-mode' />
                  </button>
                </span>
              </nav>
            </div>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
