import { Fade } from "react-awesome-reveal";

function Header({ scrollDown, projectsRef, aboutRef, contactRef }) {
  return (
    <section className="header">
      <Fade cascade triggerOnce="true">
        <ul className="header--links">
            <li onClick={() => scrollDown(projectsRef)}>Projects</li>
            <li onClick={() => scrollDown(aboutRef)}>About</li>
            <li onClick={() => scrollDown(contactRef)}>Contact</li>
        </ul>
      </Fade>
    </section>
  )
}

export default Header