import Fade from 'react-reveal/Fade';

function Project({ projectName, url, blurb, stance, siteUrl }) {
  return (
    <section className="project">
        {stance === 'even' ?
            <Fade left>
                <div className="project--items">
                    <a href={siteUrl} target="_blank" rel="noreferrer">
                        <img src={url} alt={projectName} />
                    </a>
                    <div>
                        <h4>{projectName}</h4>
                        <p>{blurb}</p>
                    </div>
                </div>
            </Fade>
             :
            <Fade right>
                <div className="project--items">
                    <div>
                        <h4>{projectName}</h4>
                        <p>{blurb}</p>
                    </div>
                    <a id="odd--element" href={siteUrl} target="_blank" rel="noreferrer">
                        <img src={url} alt={projectName} />
                    </a>
                </div>
            </Fade>
        }
        
    </section>
  )
}

export default Project