import Image from 'next/image';
import { AccentLink } from '/components/AccentLink';
import { project_path } from '/data/ProjectData';
import { CldImg } from '/util/hooks';
interface ProjectCardIF {
  img: string;
  alt: string;
  title: string;
  desc: string;
  slug: string;
}
export function ProjectCard({ img, alt, title, desc, slug }: ProjectCardIF) {
  return (
    <section className='project-card'>
      <div className='project-card__image'>
        <Image
          src={CldImg(img)}
          layout='intrinsic'
          height={900}
          width={1600}
          alt={alt}
          placeholder='blur'
          priority
        />
      </div>
      <article className='project-card__body'>
        <div className='project-card__title'>{title}</div>
        <p className='project-card__desc'>
          {desc.length > 200 ? desc.substr(0, 200) + '...' : desc}
        </p>
      </article>
      <div className='project-card__button'>
        <AccentLink name='Go &rarr;' HREF={project_path + slug} />
      </div>
    </section>
  );
}
