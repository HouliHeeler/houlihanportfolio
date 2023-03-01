import { Fade } from "react-awesome-reveal";

function Intro() {
  return (
    <Fade duration="3000" triggerOnce="true">
      <section className="intro">
        <h1>Hi, I'm Luke.</h1>
        <h1>Your next Software Engineer.</h1>
        <h3>Take a look around and see what I've been working on</h3>
      </section>
    </Fade>
  )
}

export default Intro