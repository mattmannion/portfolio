import { ProjectDataIF } from '../../data/ProjectData';
import Image from 'next/image';
import { SixteenByNine } from '../../util/util';
import { TechChoices, TechIconProps } from '../../util/TechIconProps';

function TechList({ tech }: { tech: TechChoices }) {
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
    <main className='project'>
      <h1 className='project__title'>{title}</h1>
      <section className='project__body'>
        <div className='project__img-container'>
          <Image
            src={img}
            alt={alt}
            layout='intrinsic'
            {...SixteenByNine(160)}
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
          <div className='project__host'>{host}</div>
          <div className='project__github'>{github}</div>
        </div>
      </section>
    </main>
  );
}
