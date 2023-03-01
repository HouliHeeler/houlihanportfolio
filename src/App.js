import Header from './components/Header';
import Intro from './components/Intro'
import ProjectContainer from './components/ProjectContainer';
import Divider from './components/Divider';
import Bio from './components/Bio';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { useRef } from 'react';

function App() {
  const projects = useRef(null)
  const about = useRef(null);
  const contact = useRef(null)

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div className="background--image"></div>
      <div className="content">
        <Header 
          scrollDown={scrollDown} 
          projectsRef={projects}
          aboutRef={about}
          contactRef={contact} />
        <Intro />
        <Divider name="Projects" ref={projects} />
        <ProjectContainer />
        <Divider name="About Me" ref={about} />
        <Bio />
        <Divider name="Get in Touch" ref={contact} />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
