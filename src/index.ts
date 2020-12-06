import { createCanvas, resizeCanvas } from "./utils";

function init(): void {
  const parentEl: HTMLElement = document.body;
  const [canvas, ctx] = createCanvas();

  resizeCanvas(canvas, parentEl)
  window.addEventListener('resize', () => resizeCanvas(canvas, parentEl))

  function animate(now: number): void {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Frame

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

init();