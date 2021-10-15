import Image from 'next/image';

const image_size = 400;

export function About() {
  return (
    <>
      <main className='about'>
        {/* section a */}
        <div className='about__item'>
          <div>
            <div className='about__title'>About Me</div>
            <p className='about__body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
              odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
              facere!
            </p>
          </div>
          <div className='about__image'>
            <Image
              src='/icons/about_me_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size}
            />
          </div>
        </div>

        {/* section b */}
        <div className='about__item'>
          <div className='about__image'>
            <Image
              src='/icons/projects_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size * 1.1}
            />
          </div>
          <div>
            <div className='about__title'>My Work</div>
            <p className='about__body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
              odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
              facere!
            </p>
          </div>
        </div>

        {/* section C */}
        <div className='about__item'>
          <div>
            <div className='about__title'>My Blog</div>
            <p className='about__body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
              odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
              facere!
            </p>
          </div>
          <div className='about__image'>
            <Image
              src='/icons/blog_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size}
            />
          </div>
        </div>
      </main>
    </>
  );
}
