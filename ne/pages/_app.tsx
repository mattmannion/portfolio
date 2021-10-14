// import Head from 'next/head';
// import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import '../sass/sass/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // let { pathname } = useRouter();
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
