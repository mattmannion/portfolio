import s from './about.module.scss';
import Image from 'next/image';
import { AccentLink } from '/components/AccentLink';

const image_size = 400;

export function About() {
  return (
    <>
      <main className={s.about}>
        {/* section a */}
        <section className={s.item}>
          <div className={s.body}>
            <div className={s.title}>About Me</div>
            <p className={s.text}>
              Hi, my name is Matt Mannion. I have been programming for over 10
              years as a hobby and professionally for 1. I started with C,
              however these days my favorite technologies to work with are
              Typscript, React, Node, Express, and Sass. Currently I am learning
              Golang. Please check out my projects and Blog(when live...). Feel
              free to use the Contact page to reach out to me. Thanks for
              visiting my website!
            </p>
          </div>
          <div className={s.image}>
            <Image
              src='/icons/about_me_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size}
              alt='About Icon'
              priority
            />
          </div>
        </section>

        {/* section b - Projects*/}
        <section className={s.item}>
          <div className={s.image}>
            <Image
              src='/icons/projects_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size * 1.2}
              alt='Project Icon'
              priority
            />
          </div>
          <div className={s.body}>
            <div className={s.title}>Projects</div>
            <p className={s.text}>
              This is a list of all my favorite projects I have worked on over
              the past year in Web Development. Each including, but not limited
              to: React, Typescript, Node, Postgres, and more. All projects
              include links to their respective Github Repo along with a small
              description and a list of the tech employed.
            </p>
            <AccentLink HREF='/projects' name='Go &rarr;' />
          </div>
        </section>

        {/* section C - Blog*/}
        <section className={s.item}>
          <div className={s.body}>
            <div className={s.title}>Blog</div>
            <p className={s.text}>
              Coming Soon... I plan on posting Guides on Programming, Guitar,
              and Music Theory. Topics on how to use Typescript with React and
              Express will the main focus point in the short term.
            </p>
            <AccentLink HREF='/blog' name='Go &rarr;' />
          </div>
          <div className={s.image}>
            <Image
              src='/icons/blog_icon.png'
              layout='intrinsic'
              height={image_size}
              width={image_size}
              alt='Blog Icon'
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
