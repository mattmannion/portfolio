import Image from 'next/image';

export function Home() {
  return (
    <>
      <div className='home'>
        <Image
          className='home__image'
          src='/images/home_hero_blur.jpg'
          layout='responsive'
          width={854}
          height={400}
          alt='computer screen with code'
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
