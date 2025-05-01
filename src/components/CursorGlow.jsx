import { useRef, useEffect } from "react";

export default function CursorGlow() {
  return function CursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
      const cursorGlow = glowRef.current;

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let currentX = mouseX;
      let currentY = mouseY;
      const smoothing = 0.08;

      const animate = () => {
        if (cursorGlow) {
          currentX += (mouseX - currentX) * smoothing;
          currentY += (mouseY - currentY) * smoothing;
          cursorGlow.style.transform = `translate(${currentX - 100}px, ${
            currentY - 100
          }px)`;
        }
        requestAnimationFrame(animate);
      };

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      document.addEventListener("mousemove", handleMouseMove);
      animate();

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <div
        id="cursor-glow"
        ref={glowRef}
        className="fixed w-[200px] h-[200px] rounded-full pointer-events-none z-50 mix-blend-screen blur-2xl"
        style={{ backgroundColor: "rgba(34, 48, 44, 0.3)", left: 0, top: 0 }}
      />
    );
  };
}
