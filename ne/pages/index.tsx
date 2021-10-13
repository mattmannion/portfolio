import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='home'>
        <Image
          className='home__image'
          src='/images/home_hero_blur.jpg'
          layout='intrinsic'
          width='4096'
          height='2160'
        />
        <div className='home__info'>
          <div>
            Fullstack <span className='home__accent'>Web</span> Developer
          </div>
        </div>
      </div>
    </>
  );
}
