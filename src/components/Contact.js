import { FaPhone, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <section className='project--container'>
      <Fade cascade triggerOnce="true">
        <p className='contact--blurb'>If you’re interested in learning more, I would love to hear from you. Talking about the software development field is always a great time, so feel free to contact me through any of the following channels!</p>
        <ul className="contact--list">
          <li className='contact--item'>
            <FaPhone className='contact--icon'/>
            <a href='tel:6048363662'>(604)836-3662</a>
          </li>
          <li className='contact--item'>
            <FaMailBulk className='contact--icon'/>
            <a href='mailto:luke_houlihan@hotmail.com'>luke_houlihan@hotmail.com</a>
          </li>
          <li className='contact--item'>
            <FaLinkedin className='contact--icon'/>
            <a href='https://linkedin.com/in/luke-houlihan' target="_blank" rel="noreferrer">linkedin.com/in/luke-houlihan</a>
          </li>
          <li className='contact--item'>
            <FaGithub className='contact--icon'/>
            <a href='https://github.com/HouliHeeler' target="_blank" rel="noreferrer">github.com/HouliHeeler</a>
          </li>
        </ul>
      </Fade>
    </section>
  )
}

export default Contact