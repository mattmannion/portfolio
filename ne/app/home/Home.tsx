import { About } from '/app/home/About';
import { AfterAbout } from '/app/home/AfterAbout';
import { CldImg } from '/util/hooks';
import Image from 'next/image';

export function Home() {
  return (
    <>
      <div className='home'>
        <Image
          className='home__image'
          src={CldImg('/portfolio/img/home_hero_blur')}
          layout='intrinsic'
          width={4096}
          height={1982}
          alt='computer screen with code'
          // placeholder='blur'
          priority
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
