"use client";
import React, { useRef, useEffect, useState } from "react";

export const SparklesCore = ({
  id,
  background,
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#FFFFFF",
  className,
  particleDensity = 100
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const handleResize = () => {
      if (canvas) {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    particles.current = Array.from({ length: particleDensity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: speed * (Math.random() * 0.5 + 0.2),
      directionX: Math.random() * 2 - 1,
      directionY: Math.random() * 2 - 1,
    }));
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle) => {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.directionX * particle.speed;
        particle.y += particle.directionY * particle.speed;
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.directionX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.directionY *= -1;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <div className={`h-full w-full ${className || ""}`}>
      <canvas
        id={id || "sparkles"}
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: background || "transparent",
        }}
      />
    </div>
  );
};
