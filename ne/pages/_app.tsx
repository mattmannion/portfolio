import type { AppProps } from 'next/app';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
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
