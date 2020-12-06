export function resizeCanvas(canvas: HTMLCanvasElement, parent: HTMLElement): void {
  const ph: number = parent.clientHeight;
  const pw: number = parent.clientWidth;

  if (ph <= pw) canvas.height = canvas.width = ~~(ph - 32);
  else canvas.height = canvas.width = ~~(pw - 32);
}