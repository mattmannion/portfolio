import s from './projects.module.scss';
import { Fragment } from 'react';
import { ProjectData, ProjectDataIF } from '/data/ProjectData';
import { ProjectCard } from '/app/projects/ProjectCard';

export function ProjectsMain() {
  return (
    <main className={s.projects}>
      <h1 className={s.title}>Projects</h1>
      <div className={s.container}>
        {ProjectData.map(({ img, alt, title, desc, slug }: ProjectDataIF) => (
          <Fragment key={slug}>
            <ProjectCard
              img={img}
              alt={alt}
              title={title}
              desc={desc}
              slug={slug}
            />
          </Fragment>
        ))}
      </div>
    </main>
  );
}
