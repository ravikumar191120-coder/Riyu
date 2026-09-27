import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  // Fire colorful confetti from left and right
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#f43f5e', '#fbbf24', '#38bdf8', '#34d399', '#a855f7'],
  });

  fire(0.2, {
    spread: 60,
    colors: ['#f43f5e', '#f97316', '#eab308', '#ec4899'],
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerEmojiConfetti = () => {
  // Burst from center
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: ['#f43f5e', '#fbbf24', '#38bdf8'],
    zIndex: 9999,
  });
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: ['#34d399', '#a855f7', '#f43f5e'],
    zIndex: 9999,
  });
};
