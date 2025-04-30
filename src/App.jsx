import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loading from "./components/Loading";

function CursorGlow() {
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
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#1A2421] special-gothic-expanded-one-regular lg:flex lg:justify-between lg:px-40 lg:gap-10">
      <div className="hidden lg:block">
        <CursorGlow />
      </div>
      <ScrollToTopButton />
      <Header />
      <main className="max-w-2xs mx-auto container md:max-w-xl lg:w-[52%] lg:py-24 lg:max-w-3xl">
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </div>
  );
}

export default App;
