import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo('.app-container', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' });
  }, []);

  return (
    <ReactLenis root>
      <Background3D />
      <main className="app-container min-h-screen selection:bg-accent selection:text-white relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
