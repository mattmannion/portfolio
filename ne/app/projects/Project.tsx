import { ProjectDataIF } from '../../data/ProjectData';

export function Project(props: ProjectDataIF) {
  return (
    <main className='project'>
      <div>{JSON.stringify(props)}</div>
    </main>
  );
}
