import Project from "./Project";
import Path1 from "../assets/images/song-finder-custom-image.png"
import Path2 from "../assets/images/Present-List-Custom-Image.png"
import Path3 from "../assets/images/project-image-placeholder.png"

const projects = [
  {
    id: 1,
    href: "https://smindre1.github.io/Project-One-Front-End-Dev/",
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
    image: Path3,
    alt: "Project 5 Background",
    projectTitle: "Project Name 5",
    desc: "Code Languages Used",
    mainImg: false,
    caption: false,
  },
];

function moreProjects() {
  location.href = "https://github.com/smindre1/pacey";
};

function ProjectDisplay() {
  return (
    <div className="container">
      <h2 className="title">
        <a id="My-Work-Path">My Work</a>
      </h2>
      <div className="project-images">
        {projects.map((proj) => (
          <Project key={proj.id} href={proj.href} image={proj.image} alt={proj.alt} projectTitle={proj.projectTitle} desc={proj.desc} mainImg={proj.mainImg} caption={proj.caption}/>
        ))}
        <button className="portfolioBtn" onClick={moreProjects}>
          More Of My Work Here!
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
