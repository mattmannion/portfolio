import { tech } from '../util/TechIconProps';

export interface ProjectDataIF {
  slug: string;
  img: string;
  title: string;
  alt: string;
  desc: string;
  github: string;
  host: string;
  tech: tech[];
}

export const project_path = '/projects/';
const images = '/images/';

export const ProjectData: ProjectDataIF[] = [
  {
    slug: 'ea-production-list',
    img: images + 'ea_pl.png',
    alt: 'ea production list',
    title: 'Everything Attachments Production List',
    desc: `A production list that fetches data from EA's order database and splits each order into individual items before inserting them into a Postgres database for the final list. The final list only contains items made at the EA factory. The list is comprised of three parts: the first part shows where the orders are in the manufacturing process, the second part shows items ready to be shipped, and the third and final part shows an archive of all the past shipped orders/items. This project was challenging because Volusion does not allow for Post requests to their database from outside of their native admin panel. To get around this issue, I created a database with Postgres that will store all the relevant orders and update them daily by the overall order number and the item number to ensure the most up-to-date data for the plant to produce their items. This project was connected to EA's database and since I am no longer working there, the majority of the applications update features are no longer functional. This app is a copy of the one used at the plant and is just for show. The user interface is complete with a real-time search for all columns and rows along with pagination, a quick list for items by groups, the ability to add orders by the order number, and more. If this project interests you, please email me for the login information. I will be changing the password and username weekly. One last side note: this project is hosted on Heroku, so it may have a cold start as it wakes.`,
    github: 'https://github.com/mattmannion/EA-software-suite',
    host: 'https://ea-software-suite.herokuapp.com/',
    tech: ['typescript', 'sass', 'postgres', 'expressjs', 'react'],
  },
  {
    slug: 'king-land-management',
    img: images + 'landscaping.png',
    alt: 'landscaping',
    title: 'King Land Management',
    desc: `A simple landscaping website made for King Land Management. This site was made with React and styled with Sass. Just an infomational page, quick and to the point. This site is hosted with Bluehost by the customer's request and I have their permission to use this site in my Portfolio.`,
    github: 'https://github.com/mattmannion/landscaping-site',
    host: 'https://kinglandmanagementllc.com/',
    tech: ['react', 'sass'],
  },
  {
    slug: 'tic-tac-toe',
    img: images + 'ttt.png',
    alt: 'tic-tac-toe snapshot',
    title: 'Simple Tic-Tac-Toe Game',
    desc: `Simple Tic-Tac-Toe Game made with Typescript. No websockets used or anything, just a game where two people can play eachother with one screen. Works best with a smartphone or tablet.`,
    github: 'https://github.com/mattmannion/tictactoe',
    host: 'https://tictactoe-game-mm.netlify.app/',
    tech: ['typescript', 'sass'],
  },
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
