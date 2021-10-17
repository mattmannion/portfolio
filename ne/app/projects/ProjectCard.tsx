import Image from 'next/image';
interface ProjectCardIF {
  title: string;
}
export function ProjectCard({ title }: ProjectCardIF) {
  return (
    <article className='project-card'>
      <Image
        src='/images/home_hero.jpg'
        layout='intrinsic'
        height={400}
        width={600}
      />
      <h3 className='project-card__title'>{title}</h3>
    </article>
  );
}
