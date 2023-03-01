import ResumeImg from '../images/resume.png'
import ResumePDF from '../images/Luke_Houlihan_Resume_22.pdf'
import { FaFileDownload } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

function Bio() {
  return (
    <Fade>
      <section className="project--container, about--me">
        <h2>A Brief Bio</h2>
        <div>
          <p>My name is Luke Houlihan, and I am a burgeoning Software Engineer. This career quickly piqued my interests, with its constant problem solving and outside the box thinking. Every day presents a new coding challenge that provides so many great 'Eureka' moments. The feeling of solving something that had previously been a roadblock is underappreciated!</p>
          <p>My previous careers lay in restaurant management, and more recently plumbing and gasfitting. Both afforded me many skills that I think translate well into software development. The list includes but is not limited to diagnosing and troubleshooting issues, time management, working with a team, organizational skills, taking diligent notes, and working well under pressure.</p>
          <p>While I’m not sitting in front of the computer working through the latest challenge, I’m often playing basketball or squash, exploring BC’s many gorgeous parks, or sitting around with the dog and a crossword puzzle!</p>
        </div>
        <h2>Resume</h2>
        <div className="resume--container">
          <a 
            href={ResumePDF} 
            target="_blank" 
            rel="noreferrer" 
            className="image--container">
              <img src={ResumeImg} alt="Resume Screenshot"/>
          </a>
          <a href={ResumePDF} download ><FaFileDownload />Download PDF</a>
        </div>
      </section>
    </Fade>
  )
}

export default Bio