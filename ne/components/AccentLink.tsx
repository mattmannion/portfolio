import Link from 'next/link';

interface AccentButtonIF {
  HREF: string;
  name: string;
}

export function AccentLink({ HREF, name }: AccentButtonIF) {
  return (
    <div className='accent-link'>
      <Link href={HREF} passHref>
        <a className='accent-link__button'>{name}</a>
      </Link>
    </div>
  );
}
