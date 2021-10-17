import Image from 'next/image';
import { AccentLink } from '../../components/AccentLink';
interface ProjectCardIF {
  name: string;
  img: string;
  title: string;
  desc: string;
}
export function ProjectCard({ name, img, title, desc }: ProjectCardIF) {
  return (
    <section className='project-card'>
      <Image src={img} layout='intrinsic' height={1400} width={2400} />
      <article className='project-card__body'>
        <h3 className='project-card__title'>{title}</h3>
        <p className='project-card__desc'>{desc}</p>
      </article>
      <div className='project-card__button'>
        <AccentLink name='Go &rarr;' HREF={'/projects/' + name} />
      </div>
    </section>
  );
}
