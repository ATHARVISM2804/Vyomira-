import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.5; // Decreased size from 2.5 to 1.5
        this.speedX = Math.random() * 0.5 - 0.25; // Slightly reduced speed
        this.speedY = Math.random() * 0.5 - 0.25; // Slightly reduced speed
        this.opacity = Math.random() * 0.5 + 0.2; // Reduced opacity range
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        // Using a more vibrant blue color (adjusted from rgba(59, 130, 246, opacity) to rgba(66, 153, 255, opacity))
        ctx.fillStyle = `rgba(66, 153, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 180; // Reduced from 200 to 180

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connect() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) { // Decreased from 200 to 180
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / 180)})`; // Reduced opacity from 0.2 to 0.15
            ctx.lineWidth = 0.5; // Reduced line width from 0.7 to 0.5
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6, mixBlendMode: 'lighten' }} // Reduced opacity from 0.7 to 0.6
    />
  );
}
