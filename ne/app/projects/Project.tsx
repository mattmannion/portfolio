import s from './project.module.scss';
import Head from 'next/head';
import { ProjectDataIF } from '/data/ProjectData';
import Image from 'next/image';
import { SixteenByNine } from '/util/util';
import { tech, TechIconProps } from '/util/TechIconProps';
import { AccentLink } from '/components/AccentLink';

function TechList({ tech }: { tech: tech }) {
  return (
    <>
      <div className={s.techIcon}>
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
      <main className={s.project}>
        <h1 className={s.title}>{title}</h1>
        <section className={s.body}>
          <div className={s.imgContainer}>
            <Image
              src={img}
              alt={alt}
              layout='intrinsic'
              {...SixteenByNine(160)}
            />
          </div>
          <article className={s.infoContainer}>
            <div className={s.desc}>{desc}</div>
            <ul className={s.tech}>
              {tech.sort().map((tech, i) => (
                <li key={i}>
                  <TechList tech={tech} />
                </li>
              ))}
            </ul>
          </article>
          <div className={s.links}>
            <div className={s.host}>
              <AccentLink
                HREF={host}
                name='Live Project &nbsp; &rarr;'
                target='_blank'
              />
            </div>
            <div className={s.github}>
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
