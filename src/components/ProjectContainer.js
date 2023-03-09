import CatechizeImage from '../images/CatechizeShot.png'
import SmithListImage from '../images/SmithList.png'
import ScoreboardImage from '../images/Scoreboard.png'
import VornbrockImage from '../images/Vornbrock.png'
import Project from '../components/Project';

function ProjectContainer() {
  return (
    <section className="project--container">
      <Project 
        projectName="Catechize" 
        url={CatechizeImage}
        stance="odd"
        siteUrl="https://thebigcatechism.netlify.app/"
        blurb="A trivia app where you can build a quiz to your specifications, and make things harder on your friends when it's their turn!" />
      <Project 
        projectName="SmithList" 
        url={SmithListImage}
        stance="even"
        siteUrl="https://smithlist.herokuapp.com"
        blurb="A web app built to help you find recipes and compile the ingredients into a single, manageable shopping list" />
      <Project 
        projectName="Scoreboard" 
        url={ScoreboardImage}
        stance="odd"
        siteUrl="https://scoreboard.herokuapp.com"
        blurb="A fully functional web app designed to quickly track tonights game scores and stats, the stats of your favourite players, and the season standings at a glance" />
      <Project 
        projectName="Vornbrock" 
        url={VornbrockImage}
        stance="even"
        siteUrl="https://vornbrock.com"
        blurb="A custom website built on the React library to exact client specifications" />
    </section>
  )
}

export default ProjectContainer
