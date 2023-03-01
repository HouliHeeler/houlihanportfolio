import Fade from 'react-reveal/Fade';

function Header({ scrollDown, projectsRef, aboutRef, contactRef }) {
  return (
    <Fade>
      <section className="header delay">
        <ul className="header--links">
            <li onClick={() => scrollDown(projectsRef)}>Projects</li>
            <li onClick={() => scrollDown(aboutRef)}>About</li>
            <li onClick={() => scrollDown(contactRef)}>Contact</li>
        </ul>
      </section>
    </Fade>
  )
}

export default Header