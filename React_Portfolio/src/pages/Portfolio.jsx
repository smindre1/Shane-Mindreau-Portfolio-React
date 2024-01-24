import Project from "../components/Project";
import Path1 from "../assets/images/song-finder-custom-image.png"
import Path2 from "../assets/images/Present-List-Custom-Image.png"
import Path3 from "../assets/images/project-image-placeholder.png"
import { useState } from "react";

const Portfolio = () => {
  const [display, setDisplay] = useState(0);

  const projects = [
    {
      id: 1,
      href: "https://smindre1.github.io/Project-One-Front-End-Dev/",
      repo: "",
      image: Path1,
      alt: "Project 1 Background",
      projectTitle: "Song Finder",
      desc: "Code Used: HTML, CSS, & JS",
      mainImg: true,
      caption: true,
    },
    {
      id: 2,
      href: "https://present-list-fc60525bdd4f.herokuapp.com/",
      repo: "",
      image: Path2,
      alt: "Project 2 Background",
      projectTitle: "Present List",
      desc: "Code Used: HTML, CSS, JS, SQL",
      mainImg: false,
      caption: false,
    },
    {
      id: 3,
      href: "https://github.com/smindre1/pacey",
      repo: "",
      image: Path3,
      alt: "Project 3 Background",
      projectTitle: "Project Name 3:",
      desc: "Code Languages Used",
      mainImg: false,
      caption: false,
    },
    {
      id: 4,
      href: "https://github.com/smindre1/pacey",
      repo: "",
      image: Path3,
      alt: "Project 4 Background",
      projectTitle: "Project Name 4:",
      desc: "Code Languages Used",
      mainImg: false,
      caption: false,
    },
    {
      id: 5,
      href: "https://github.com/smindre1/pacey",
      repo: "",
      image: Path3,
      alt: "Project 5 Background",
      projectTitle: "Project Name 5",
      desc: "Code Languages Used",
      mainImg: false,
      caption: false,
    },
  ];
  const range = projects.length - 1;
  function moreProjects() {
    location.href = "https://github.com/smindre1/pacey";
  };

  return (
    <div className="flexColumn">
      {/* <h2 className="subtitle">My Work</h2> */}
      <div className="flexRow about-page">
        
        <figure className="figure greyOverlay">
          <img className="mainImg opacityFilter" src={projects[display].image} alt={projects[display].alt} />
        </figure>
        
        <div className="flexColumn">
          <h3 className="subtitle">{projects[display].projectTitle}</h3>
          <button href={projects[display].href}>Deployed Site</button>
          <button href={projects[display].href}>Github Repository</button>
          <p>{projects[display].desc}</p>
        </div>
      </div>
      <div className="flexRow">
        <button onClick={() => {0 != display ? setDisplay(display - 1) : setDisplay(range)}}> {'<'} </button>
        <button onClick={() => {range != display ? setDisplay(display + 1) : setDisplay(0)}}> {'>'} </button>
      </div>
    </div>

    // <div className="flexRow">
    //   <h2 className="subtitle">My Work</h2>
    //   <div className="project-images">
    //     {projects.map((proj) => (
    //       <Project key={proj.id} proj={proj}
          
    //       href={proj.href} image={proj.image} alt={proj.alt} projectTitle={proj.projectTitle} desc={proj.desc} mainImg={proj.mainImg} caption={proj.caption}/>
    //     ))}
    //     <button className="portfolioBtn" onClick={moreProjects}>
    //       More Of My Work Here!
    //     </button>
    //   </div>
    // </div>
    // <div className="testTwo"></div>
  );
}

export default Portfolio;