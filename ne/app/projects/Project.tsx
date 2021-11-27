import Head from 'next/head';
import { ProjectDataIF } from '/data/ProjectData';
import Image from 'next/image';
import { SixteenByNine } from '/util/util';
import { tech, TechIconProps } from '/util/TechIconProps';
import { AccentLink } from '/components/AccentLink';
import { CldImg } from '/util/hooks';

function TechList({ tech }: { tech: tech }) {
  return (
    <>
      <div className='project__tech-icon'>
        <Image {...TechIconProps(tech)} />
      </div>
      <p>{tech}</p>
    </>
  );
}

export function Project({
  title,
  img,
  alt,
  desc,
  github,
  host,
  tech,
}: ProjectDataIF) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content="Matt Mannion's Portfolio and Blog." />
        <link rel='icon' href='/icons/about_me_icon.png' />
      </Head>
      <main className='project'>
        <h1 className='project__title'>{title}</h1>
        <section className='project__body'>
          <div className='project__img-container'>
            <Image
              src={CldImg(img)}
              alt={alt}
              layout='intrinsic'
              {...SixteenByNine(160)}
              priority
            />
          </div>
          <article className='project__info-container'>
            <div className='project__desc'>{desc}</div>
            <ul className='project__tech'>
              {tech.sort().map((tech, i) => (
                <li key={i}>
                  <TechList tech={tech} />
                </li>
              ))}
            </ul>
          </article>
          <div className='project__links'>
            <div className='project__host'>
              <AccentLink
                HREF={host}
                name='Live Project &nbsp; &rarr;'
                target='_blank'
              />
            </div>
            <div className='project__github'>
              <AccentLink
                HREF={github}
                name='Github Repo &rarr;'
                target='_blank'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
