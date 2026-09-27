import React, { useEffect, useState, useCallback, useRef } from 'react';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  dx: number;
  dy: number;
  rot: number;
}

export const MouseTrail: React.FC = () => {
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const lastPos = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const idCounter = useRef(0);

  // Consistent with scrapbook theme: tiny stars, brain cells, and sparkles
  const EMOJIS = ['✨', '⭐', '🧠', '🌟', '🧠', '✨', '💡', '🧠'];

  const spawnParticle = useCallback((x: number, y: number) => {
    idCounter.current += 1;
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    // Random slight spread
    const dx = (Math.random() - 0.5) * 40;
    const dy = -20 - Math.random() * 30; // Float upwards
    const rot = (Math.random() - 0.5) * 60;
    const size = emoji === '🧠' ? 14 + Math.random() * 6 : 12 + Math.random() * 6;

    const newParticle: TrailParticle = {
      id: idCounter.current,
      x: x + (Math.random() - 0.5) * 12,
      y: y + (Math.random() - 0.5) * 12,
      emoji,
      size,
      dx,
      dy,
      rot,
    };

    setParticles((prev) => [...prev.slice(-24), newParticle]);

    // Cleanup after 850ms
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 850);
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

      // Throttle: spawn only if moved at least 15px or 40ms passed
      if (dist > 15 || now - lastPos.current.time > 50) {
        lastPos.current = { x: e.clientX, y: e.clientY, time: now };
        spawnParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [spawnParticle]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden" 
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none animate-trail"
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              fontSize: `${p.size}px`,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
              '--rot': `${p.rot}deg`,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity',
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};
