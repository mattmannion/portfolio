import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
const routes = {
  home: '/',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
};

function location(pathname: string) {
  if (pathname === routes.home) return 'Home';
  if (pathname === routes.projects) return 'Projects';
  if (pathname === routes.blog) return 'Blog';
  if (pathname === routes.contact) return 'Contact';
}

function accent(pathname: string, route: string) {
  if (pathname === route) return 'nav__accent';
  else return '';
}

export function Nav() {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{location(pathname)}</title>
        <meta name='description' content="Matt Mannion's Portfolio and Blog." />
        <link rel='icon' href='/icons/about_me_icon.png' />
      </Head>
      <nav className='nav'>
        <div className='nav__name'>
          <strong>Matt</strong> Mannion
        </div>
        <div className='nav__links'>
          <Link href={routes.home} passHref>
            <div className={accent(pathname, routes.home)}>Home</div>
          </Link>
          <Link href={routes.projects} passHref>
            <div className={accent(pathname, routes.projects)}>Projects</div>
          </Link>
          <Link href={routes.blog} passHref>
            <div className={accent(pathname, routes.blog)}>Blog</div>
          </Link>
          <Link href={routes.contact} passHref>
            <div className={accent(pathname, routes.contact)}>Contact</div>
          </Link>
        </div>
        <div className='nav__icons'>
          <div className='nav__resume' title='Download My Resume'>
            <Image
              src='/icons/download_resume.png'
              layout='intrinsic'
              height={50}
              width={50}
              alt='download resume icon'
            />
          </div>
          <Link href='https://github.com/mattmannion' passHref>
            <a
              className='nav__github'
              target='_blank'
              rel='noreferrer'
              title='To My Github'
            >
              <Image
                src='/icons/github_icon.png'
                layout='intrinsic'
                height={50}
                width={50}
                alt='github icon'
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
