interface tech {
  name: string;
  icon: string;
}

export interface ProjectDataIF {
  name: string;
  img: string;
  title: string;
  desc: string;
  github: string;
  location: string;
  techStack: tech[];
}

export const ProjectData = [
  {
    name: 'test-project-1',
    img: '/images/home_hero.jpg',
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
    name: 'test-project-2',
    img: '/images/home_hero.jpg',
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
