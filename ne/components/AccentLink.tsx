import Link from 'next/link';

interface AccentButtonIF {
  HREF: string;
  name: string;
  target?: '_blank' | undefined;
}

export function AccentLink({ HREF, name, target }: AccentButtonIF) {
  return (
    <div className='accent-link'>
      <Link href={HREF} passHref>
        <a className='accent-link__button' target={!target ? '' : '_blank'}>
          {name}
        </a>
      </Link>
    </div>
  );
}
