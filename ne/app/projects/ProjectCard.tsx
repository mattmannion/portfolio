import Image from 'next/image';
import { AccentLink } from '../../components/AccentLink';
import { project_path } from '../../data/ProjectData';
interface ProjectCardIF {
  img: string;
  title: string;
  desc: string;
  slug: string;
}
export function ProjectCard({ img, title, desc, slug }: ProjectCardIF) {
  return (
    <section className='project-card'>
      <Image src={img} layout='intrinsic' height={1400} width={2400} />
      <article className='project-card__body'>
        <h3 className='project-card__title'>{title}</h3>
        <p className='project-card__desc'>{desc}</p>
      </article>
      <div className='project-card__button'>
        <AccentLink name='Go &rarr;' HREF={project_path + slug} />
      </div>
    </section>
  );
}
