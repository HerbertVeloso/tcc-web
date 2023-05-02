import { useEffect, useRef, useState } from 'react';

export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const context2d = canvasRef.current.getContext('2d');
    if (!context2d) return;

    setContext(context2d);
  }, [canvasRef]);

  return { canvasRef, context };
}
