import { ProjectDataIF, TechType } from '../../data/ProjectData';
import Image from 'next/image';
import { SixteenByNine } from '../../util/util';

function TechIcons({ name, icon }: TechType) {
  return (
    <div>
      {name}
      {icon}
    </div>
  );
}

export function Project({
  title,
  img,
  alt,
  desc,
  github,
  host,
  techStack,
}: ProjectDataIF) {
  return (
    <main className='project'>
      <h1 className='project__title'>{title}</h1>
      <section className='project__body'>
        <div className='project__img-cont'>
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
            {techStack.map((tech, i) => (
              <li key={i}>
                <TechIcons {...tech} />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
