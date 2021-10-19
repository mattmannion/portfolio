import { tech } from '../util/TechIconProps';

export interface ProjectDataIF {
  img: string;
  title: string;
  alt: string;
  desc: string;
  github: string;
  host: string;
  tech: tech[];
  slug: string;
}

export const project_path = '/projects/';
export const images = '/images/';

export const ProjectData: ProjectDataIF[] = [
  {
    slug: 'portfolio-site',
    img: images + 'home_hero.jpg',
    alt: 'Portfolio snapshot',
    title: 'Portfolio Site / MattMannion.com',
    desc: `
    My site is built using NextJS. It includes the usage of many native NextJS features along with typescript(tsx) and sass(scss). 
    This site also has a backing ExpressJS server also using typescript, however it is not serving any data at this time.
    I also plan to building an Admin Panel (in plain React[CRA]) for the Blog section. This page will receive constant updates as it's My main personal page. The Blog is 'under contruction'.
    `,
    github: 'https://github.com/mattmannion/portfolio',
    host: 'https://mattmannion.com',
    tech: ['typescript', 'sass', 'expressjs', 'nextjs', 'react'],
  },
];
