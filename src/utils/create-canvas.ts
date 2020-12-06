export function createCanvas(parentId?: string): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  let parent: HTMLElement;
  
  if (parentId) parent = document.getElementById(parentId) as HTMLElement;
  else parent = document.body;

  parent.appendChild(canvas);

  return [canvas, ctx];
}