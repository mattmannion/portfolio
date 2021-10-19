import { ImageProps } from 'next/image';

const size = 50;
const path = '/icons/';
const svg = '_icon.svg';
const png = '_icon.png';

export type tech =
  | 'expressjs'
  | 'golang'
  | 'mongodb'
  | 'nextjs'
  | 'nodejs'
  | 'postgres'
  | 'react'
  | 'sass'
  | 'typescript';

function ImgFmt(tech: tech, fmt: 'png' | 'svg'): ImageProps {
  switch (fmt) {
    case 'png':
      return {
        src: path + tech + png,
        alt: tech,
        layout: 'intrinsic',
        width: size,
        height: size,
      };

    case 'svg':
      return {
        src: path + tech + svg,
        alt: tech,
        layout: 'intrinsic',
        width: size,
        height: size,
      };
  }
}

export function TechIconProps(tech_name: tech): ImageProps {
  switch (tech_name) {
    case 'expressjs':
      return { ...ImgFmt('expressjs', 'png') };

    case 'golang':
      return { ...ImgFmt('golang', 'svg') };

    case 'mongodb':
      return { ...ImgFmt('mongodb', 'svg') };

    case 'nextjs':
      return { ...ImgFmt('nextjs', 'svg') };

    case 'nodejs':
      return { ...ImgFmt('nodejs', 'svg') };

    case 'postgres':
      return { ...ImgFmt('postgres', 'svg') };

    case 'react':
      return { ...ImgFmt('react', 'svg') };

    case 'sass':
      return { ...ImgFmt('sass', 'svg') };

    case 'typescript':
      return { ...ImgFmt('typescript', 'svg') };
  }
}
