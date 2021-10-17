import Image from 'next/image';
import { AccentLink } from '../../components/AccentLink';
import { project_path } from '../../data/ProjectData';
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
      <Image src={img} layout='intrinsic' height={576} width={1024} alt={alt} />
      <article className='project-card__body'>
        <div className='project-card__title'>{title}</div>
        <p className='project-card__desc'>{desc}</p>
      </article>
      <div className='project-card__button'>
        <AccentLink name='Go &rarr;' HREF={project_path + slug} />
      </div>
    </section>
  );
}
