import type { AppProps } from 'next/app';
import Nav from '../components/nav/Nav';
import '../sass/sass/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
