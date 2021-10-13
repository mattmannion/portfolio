import { useRouter } from 'next/router';
import Link from 'next/link';

function accent(pathname: string, route: string) {
  if (pathname === route) return 'nav__accent';
  else return '';
}

const routes = {
  home: '/',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
};

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <>
      <nav className='nav'>
        <div className='nav__name'>
          <strong>Matt</strong> Mannion
        </div>
        <div className='nav__links'>
          <Link href={routes.home}>
            <div className={accent(pathname, routes.home)}>Home</div>
          </Link>
          <Link href={routes.projects}>
            <div className={accent(pathname, routes.projects)}>Projects</div>
          </Link>
          <Link href={routes.blog}>
            <div className={accent(pathname, routes.blog)}>Blog</div>
          </Link>
          <Link href={routes.contact}>
            <div className={accent(pathname, routes.contact)}>Contact</div>
          </Link>
        </div>
        <div className='nav__icons'>
          <div>resume</div>
          <div>github</div>
        </div>
      </nav>
    </>
  );
}
