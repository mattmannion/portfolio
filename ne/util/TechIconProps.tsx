import { ImageProps } from 'next/image';

const size = 50;
const path = '/icons/';
const svg = '_icon.svg';
const png = '_icon.png';

export type TechChoices =
  | 'expressjs'
  | 'golang'
  | 'mongodb'
  | 'nextjs'
  | 'nodejs'
  | 'postgres'
  | 'react'
  | 'sass'
  | 'typescript';

interface TechIF {
  [key: string]: TechChoices;
}

export const tech: TechIF = {
  expressjs: 'expressjs',
  go: 'golang',
  mongodb: 'mongodb',
  nextjs: 'nextjs',
  nodejs: 'nodejs',
  postgres: 'postgres',
  react: 'react',
  sass: 'sass',
  typescript: 'typescript',
};

type LayoutValue = 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;

interface ImgSettingsIF {
  layout: LayoutValue;
  width: number;
  height: number;
}

const ImgSettings: ImgSettingsIF = {
  layout: 'intrinsic',
  width: size,
  height: size,
};

export function TechIconProps(tech_name: TechChoices): ImageProps {
  switch (tech_name) {
    case tech.expressjs:
      return {
        src: path + tech.expressjs + png,
        alt: tech.expressjs,
        ...ImgSettings,
      };

    case tech.go:
      return { src: path + tech.go + svg, alt: tech.go, ...ImgSettings };

    case tech.mongodb:
      return {
        src: path + tech.mongodb + svg,
        alt: tech.mongodb,
        ...ImgSettings,
      };

    case tech.nextjs:
      return {
        src: path + tech.nextjs + svg,
        alt: tech.nextjs,
        ...ImgSettings,
      };

    case tech.nodejs:
      return {
        src: path + tech.nodejs + svg,
        alt: tech.nodejs,
        ...ImgSettings,
      };

    case tech.postgres:
      return {
        src: path + tech.postgres + svg,
        alt: tech.postgres,
        ...ImgSettings,
      };

    case tech.react:
      return { src: path + tech.react + svg, alt: tech.react, ...ImgSettings };

    case tech.sass:
      return { src: path + tech.sass + svg, alt: tech.sass, ...ImgSettings };

    case tech.typescript:
      return {
        src: path + tech.typescript + svg,
        alt: tech.typescript,
        ...ImgSettings,
      };

    default:
      return { src: path + 'about_me' + png, alt: 'about_me', ...ImgSettings };
  }
}
