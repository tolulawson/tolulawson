/* eslint-disable react/jsx-props-no-spreading */
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
