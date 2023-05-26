import { GameObject } from '../types/Game';

type DrawInCanvasProps = {
  context: CanvasRenderingContext2D;
  object: GameObject;
}

// export function drawInCanvas({ context, object: { url, x, y, width, height } }: DrawInCanvasProps) {
//   const object = new Path2D();
//   const img = new Image();
//   img.src = url;

//   img.onload = () => {
//     // context?.drawImage(img, x, y, width, height);
//     object.(img, x, y, width, height);
//   };
// }
