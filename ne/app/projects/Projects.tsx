import { Fragment } from 'react';
import { ProjectData, ProjectDataIF } from '../../data/ProjectData';
import { ProjectCard } from './ProjectCard';

export function ProjectsMain() {
  return (
    <main className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__container'>
        {ProjectData.map(({ img, title, desc, slug }: ProjectDataIF) => (
          <Fragment key={slug}>
            <ProjectCard img={img} title={title} desc={desc} slug={slug} />
          </Fragment>
        ))}
      </div>
    </main>
  );
}
