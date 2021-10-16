import Image from 'next/image';
import { AccentLink } from '../../components/AccentLink';

const image_size = 400;

export function About() {
  return (
    <>
      <main className='about'>
        {/* section a */}
        <section className='about__item'>
          <div className='about__body'>
            <div className='about__title'>About Me</div>
            <p className='about__text'>
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
              alt='About Icon'
            />
          </div>
        </section>

        {/* section b - Projects*/}
        <section className='about__item'>
          <div className='about__image'>
            <Image
              src='/icons/projects_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size * 1.2}
              alt='Project Icon'
            />
          </div>
          <div className='about__body'>
            <div className='about__title'>My Work</div>
            <p className='about__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
              odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
              facere!
            </p>
            <AccentLink HREF='/projects' name='Go &rarr;' />
          </div>
        </section>

        {/* section C - Blog*/}
        <section className='about__item'>
          <div className='about__body'>
            <div className='about__title'>My Blog</div>
            <p className='about__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
              odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
              facere!
            </p>
            <AccentLink HREF='/blog' name='Go &rarr;' />
          </div>
          <div className='about__image'>
            <Image
              src='/icons/blog_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size}
              alt='Blog Icon'
            />
          </div>
        </section>
      </main>
    </>
  );
}
