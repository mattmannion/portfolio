export function btnpd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
}

export function SixteenByNine(pixels: number) {
  const width = pixels * 16;
  const height = pixels * 9;

  return { width, height };
}

export function SquareImg(pixels: number) {
  const width = pixels;
  const height = pixels;

  return { width, height };
}
