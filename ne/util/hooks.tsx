import { buildUrl } from 'cloudinary-build-url';

export function CldImg(img: string) {
  return buildUrl(img, {
    cloud: {
      cloudName: 'dtdss7awy',
    },
  });
}
