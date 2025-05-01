import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loading from "./components/Loading";
import CursorGlow from "./components/CursorGlow";

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
