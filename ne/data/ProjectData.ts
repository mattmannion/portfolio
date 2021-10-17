interface tech {
  name: string;
  icon: string;
}

export interface ProjectDataIF {
  img: string;
  title: string;
  alt: string;
  desc: string;
  github: string;
  location: string;
  techStack: tech[];
  slug: string;
}

export const project_path = '/projects/';
export const images = '/images/';

export const ProjectData: ProjectDataIF[] = [
  {
    slug: 'test-project-1',
    img: images + 'home_hero.jpg',
    alt: 'test project',
    title: 'Test Project',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic eius debitis sed unde? Veritatis, eligendi consequuntur. Libero, pariatur tempore.',
    github: '#',
    location: '#',
    techStack: [
      {
        name: 'typescript',
        icon: '',
      },
      {
        name: 'sass',
        icon: '',
      },
    ],
  },
  {
    slug: 'test-project-2',
    img: images + 'home_hero.jpg',
    alt: 'test project 2',
    title: 'Test Project',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic eius debitis sed unde? Veritatis, eligendi consequuntur. Libero, pariatur tempore.',
    github: '#',
    location: '#',
    techStack: [
      {
        name: 'typescript',
        icon: '',
      },
      {
        name: 'sass',
        icon: '',
      },
    ],
  },
];
