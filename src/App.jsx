import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{
        position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(94,235,200,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(94,235,200,0.025) 1px, transparent 1px)',
        backgroundSize:'56px 56px',
      }} />
      <div style={{
        position:'fixed', inset:0, zIndex:9999, pointerEvents:'none', opacity:0.03,
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize:'300px 300px',
      }} />
      <Cursor />
      <Navbar />
      <main style={{ position:'relative', zIndex:1 }}>
        <Hero />
        <Socials />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
