import type { AppProps } from 'next/app';
import { Footer } from '../app/footer/Footer';
import {Nav} from '../app/nav/Nav';
import '../sass/sass/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
