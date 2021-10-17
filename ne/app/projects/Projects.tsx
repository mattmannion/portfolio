import { ProjectCard } from './ProjectCard';

export function ProjectsMain() {
  return (
    <main className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__container'>
        <ProjectCard title='project title' />
      </div>
    </main>
  );
}
