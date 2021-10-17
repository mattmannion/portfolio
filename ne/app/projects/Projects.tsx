import { ProjectData, ProjectDataIF } from '../../data/ProjectData';
import { ProjectCard } from './ProjectCard';

export function ProjectsMain() {
  return (
    <main className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__container'>
        {ProjectData.map(({ name, img, title, desc }: ProjectDataIF) => (
          <ProjectCard name={name} img={img} title={title} desc={desc} />
        ))}
      </div>
    </main>
  );
}
