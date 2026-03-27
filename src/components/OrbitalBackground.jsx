import { useEffect, useRef } from 'react';

export default function OrbitalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawOrbit = (cx, cy, rx, ry, rotation, color, width, dashOffset, opacity) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.globalAlpha = opacity;
      ctx.setLineDash([8, 16]);
      ctx.lineDashOffset = dashOffset;
      ctx.stroke();
      ctx.restore();
    };

    const drawGlowOrb = (x, y, radius, color, glowSize) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius + glowSize);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.4, color.replace('1)', '0.4)'));
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, radius + glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawPlanet = (angle, orbitCx, orbitCy, orbitRx, orbitRy, orbitRotation, size, color) => {
      const cos = Math.cos(orbitRotation);
      const sin = Math.sin(orbitRotation);
      const px = orbitRx * Math.cos(angle);
      const py = orbitRy * Math.sin(angle);
      const x = orbitCx + px * cos - py * sin;
      const y = orbitCy + px * sin + py * cos;

      // Glow
      drawGlowOrb(x, y, size, color, size * 3);

      // Core
      const coreGradient = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, 0, x, y, size);
      coreGradient.addColorStop(0, 'rgba(255,255,255,0.9)');
      coreGradient.addColorStop(0.5, color);
      coreGradient.addColorStop(1, color.replace('1)', '0.6)'));
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();
    };

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.55;
      const cy = canvas.height * 0.45;

      // Large outer orbit ring
      drawOrbit(cx, cy, 340, 220, time * 0.15 + 0.3, 'rgba(99, 102, 241, 0.25)', 1.5, time * 80, 0.6);
      drawOrbit(cx, cy, 340, 220, time * 0.15 + 0.3, 'rgba(99, 102, 241, 0.08)', 30, time * 80, 0.3);

      // Medium orbit ring
      drawOrbit(cx, cy, 240, 160, -time * 0.2 + 1.2, 'rgba(168, 85, 247, 0.3)', 1.5, -time * 60, 0.5);
      drawOrbit(cx, cy, 240, 160, -time * 0.2 + 1.2, 'rgba(168, 85, 247, 0.06)', 24, -time * 60, 0.3);

      // Small inner orbit ring
      drawOrbit(cx, cy, 130, 90, time * 0.3, 'rgba(236, 72, 153, 0.35)', 1.5, time * 100, 0.5);
      drawOrbit(cx, cy, 130, 90, time * 0.3, 'rgba(236, 72, 153, 0.06)', 18, time * 100, 0.3);

      // Central glowing core
      drawGlowOrb(cx, cy, 8, 'rgba(129, 140, 248, 1)', 60);
      drawGlowOrb(cx, cy, 4, 'rgba(255, 255, 255, 1)', 15);

      // Orbiting planets
      drawPlanet(time * 0.8, cx, cy, 340, 220, time * 0.15 + 0.3, 5, 'rgba(99, 102, 241, 1)');
      drawPlanet(time * 0.8 + Math.PI, cx, cy, 340, 220, time * 0.15 + 0.3, 3, 'rgba(129, 140, 248, 1)');
      drawPlanet(-time * 1.1, cx, cy, 240, 160, -time * 0.2 + 1.2, 4, 'rgba(168, 85, 247, 1)');
      drawPlanet(time * 1.5 + 1, cx, cy, 130, 90, time * 0.3, 3, 'rgba(236, 72, 153, 1)');

      // Extra floating micro-particles
      for (let i = 0; i < 30; i++) {
        const px = cx + Math.sin(time * 0.5 + i * 2.1) * (100 + i * 12);
        const py = cy + Math.cos(time * 0.4 + i * 1.7) * (60 + i * 8);
        const alpha = 0.15 + Math.sin(time * 2 + i) * 0.1;
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="orbital-canvas"
        aria-hidden="true"
      />
      {/* Film grain noise overlay — same technique as Redactify */}
      <div className="noise-overlay" aria-hidden="true">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.04" />
        </svg>
      </div>
    </>
  );
}
