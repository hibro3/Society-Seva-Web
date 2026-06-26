// LightRays.jsx
// Simple placeholder component for background light rays effect.
// This component renders a full-size canvas that can be extended with WebGL or canvas animations.
// For now, it displays a subtle gradient to avoid runtime errors.

import { useEffect, useRef } from 'react';

export default function LightRays({
  raysOrigin = 'top-right',
  raysColor = '#005fb0',
  pulsating = true,
  noiseAmount = 0.03,
  fadeDistance = 2.5,
  lightSpread = 0.9,
  saturation = 0.8,
  raysSpeed = 0.8,
  followMouse = true,
  mouseInfluence = 0.12,
  className = ''
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw();
    };
    const draw = () => {
      // Simple gradient background as placeholder
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, raysColor);
      grad.addColorStop(1, 'transparent');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [raysColor]);

  return <canvas ref={canvasRef} className={className} />;
}
