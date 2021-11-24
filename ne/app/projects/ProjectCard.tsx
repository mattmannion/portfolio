import s from './projectCard.module.scss';
import Image from 'next/image';
import { AccentLink } from '/components/AccentLink';
import { project_path } from '/data/ProjectData';
interface ProjectCardIF {
  img: string;
  alt: string;
  title: string;
  desc: string;
  slug: string;
}
export function ProjectCard({ img, alt, title, desc, slug }: ProjectCardIF) {
  return (
    <section className={s.projectCard}>
      <div className={s.image}>
        <Image
          src={img}
          layout='intrinsic'
          height={900}
          width={1600}
          alt={alt}
        />
      </div>
      <article className={s.body}>
        <div className={s.title}>{title}</div>
        <p className={s.desc}>
          {desc.length > 200 ? desc.substr(0, 200) + '...' : desc}
        </p>
      </article>
      <div className={s.button}>
        <AccentLink name='Go &rarr;' HREF={project_path + slug} />
      </div>
    </section>
  );
}
