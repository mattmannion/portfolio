import s from './home.module.scss';
import Image from 'next/image';
import { About } from '/app/home/About';
import { AfterAbout } from '/app/home/AfterAbout';

export function Home() {
  return (
    <>
      <div className={s.home}>
        <div className={s.img}>
          <Image
            src='/images/home_hero_blur.jpg'
            priority
            layout='intrinsic'
            width={4096}
            height={2000}
            alt='computer screen with code'
          />
          <div className={s.overlay} />
        </div>
        <div className={s.info}>
          <div>
            Fullstack <span className={s.accent}>Web</span> Developer
          </div>
        </div>
      </div>
      <About />
      <AfterAbout />
    </>
  );
}
