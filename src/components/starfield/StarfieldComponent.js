import React, { useRef, useEffect, useCallback } from "react";
import "./StarfieldComponent.css";

const StarfieldComponent = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animationRef = useRef(null);

  const createStars = useCallback((width, height, count = 200) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(width, height, 200);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      // Smooth mouse movement interpolation
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.02;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.02;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(0.5, "#0d1025");
      gradient.addColorStop(1, "#0a0a1a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      starsRef.current.forEach((star, index) => {
        // Calculate movement based on mouse position
        const dx = mouseRef.current.x - width / 2;
        const dy = mouseRef.current.y - height / 2;

        // Gentle drift based on mouse
        star.x += star.speed + dx * 0.01 * ((index % 3) + 1) * 0.01;
        star.y += star.speed + dy * 0.01 * ((index % 3) + 1) * 0.01;

        // Wrap around screen
        if (star.x > width) star.x = 0;
        if (star.x < 0) star.x = width;
        if (star.y > height) star.y = 0;
        if (star.y < 0) star.y = height;

        // Twinkle effect
        const twinkle =
          Math.sin(time * star.twinkleSpeed * 10 + star.twinkleOffset) * 0.3 +
          0.7;
        const alpha = star.brightness * twinkle;

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Add glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          const glowGradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 2
          );
          glowGradient.addColorStop(0, `rgba(200, 220, 255, ${alpha * 0.3})`);
          glowGradient.addColorStop(1, "rgba(200, 220, 255, 0)");
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createStars]);

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.targetX = e.clientX;
    mouseRef.current.targetY = e.clientY;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      onMouseMove={handleMouseMove}
    />
  );
};

export default StarfieldComponent;
