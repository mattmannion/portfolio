import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Project } from '/app/projects/Project';
import { ProjectData, ProjectDataIF } from '/data/ProjectData';

export default function ProjectPage(props: ProjectDataIF) {
  return (
    <div className='fade-in-effect'>
      <Project {...props} />
    </div>
  );
}

//////////////////////////////
//// Dynamic Page Setting ////
//////////////////////////////

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const project = ProjectData.find((f: ProjectDataIF) => f.slug === slug);
  return {
    props: {
      ...project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ProjectData.map(({ slug }: ProjectDataIF) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
