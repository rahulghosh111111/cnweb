"use client";
import React, { useRef, useEffect } from "react";

export const BackgroundBeams = ({ className }) => {
  const beamRef = useRef(null);
  
  useEffect(() => {
    if (!beamRef.current) return;
    
    const canvas = beamRef.current;
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Create beams with the new color scheme
    const beams = [];
    const beamCount = 10;
    
    for (let i = 0; i < beamCount; i++) {
      const useRedColor = Math.random() > 0.5;
      const color = useRedColor 
        ? `rgba(141, 14, 14, ${Math.random() * 0.3 + 0.1})` // #8d0e0e with opacity
        : `rgba(250, 89, 53, ${Math.random() * 0.3 + 0.1})`; // #fa5935 with opacity
      
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 10 + 1,
        speed: Math.random() * 0.5 + 0.1,
        length: Math.random() * canvas.height,
        color: color,
      });
    }
    
    const drawBeams = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      beams.forEach((beam) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(0, beam.y, 0, beam.y + beam.length);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, beam.color);
        gradient.addColorStop(1, "transparent");
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x, beam.y + beam.length);
        ctx.stroke();
        
        beam.y -= beam.speed;
        if (beam.y + beam.length < 0) {
          beam.y = canvas.height;
          beam.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(drawBeams);
    };
    
    drawBeams();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={beamRef}
      className={`opacity-30 pointer-events-none ${className || ""}`}
      style={{ position: "absolute", inset: 0 }}
    />
  );
};
