import s from './accentLink.module.scss';
import Link from 'next/link';

interface AccentButtonIF {
  HREF: string;
  name: string;
  target?: '_blank' | undefined;
}

export function AccentLink({ HREF, name, target }: AccentButtonIF) {
  return (
    <div className={s.accentLink}>
      <Link href={HREF} passHref>
        <a className={s.accentLink__button} target={!target ? '' : '_blank'}>
          {name}
        </a>
      </Link>
    </div>
  );
}
