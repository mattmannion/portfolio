import Image from 'next/image';
import { About } from '/app/home/About';
import { AfterAbout } from '/app/home/AfterAbout';

export function Home() {
  return (
    <>
      <div className='home'>
        <Image
          className='home__image'
          src='/images/home_hero_blur.jpg'
          layout='intrinsic'
          width={4096}
          height={1960}
          alt='computer screen with code'
        />
        <div className='home__info'>
          <div>
            Fullstack <span className='home__accent'>Web</span> Developer
          </div>
        </div>
      </div>
      <About />
      <AfterAbout />
    </>
  );
}
