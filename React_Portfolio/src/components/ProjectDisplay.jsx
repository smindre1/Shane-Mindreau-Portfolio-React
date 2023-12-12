import Project from "./Project";

const projects = [
  {
    id: 1,
    href: "https://smindre1.github.io/Project-One-Front-End-Dev/",
    image: "./assets/images/song-finder-custom-image.png",
    alt: "Project 1 Background",
    projectTitle: "Song Finder",
    desc: "Code Used: HTML, CSS, & JS",
    mainImg: true,
  },
  {
    id: 2,
    href: "https://present-list-fc60525bdd4f.herokuapp.com/",
    image: "./assets/images/Present-List-Custom-Image.png",
    alt: "Project 2 Background",
    projectTitle: "Present List",
    desc: "Code Used: HTML, CSS, JS, SQL",
    mainImg: false,
  },
  {
    id: 3,
    href: "https://github.com/smindre1/pacey",
    image: "./assets/images/project-image-placeholder.png",
    alt: "Project 3 Background",
    projectTitle: "Project Name 3:",
    desc: "Code Languages Used",
    mainImg: false,
  },
  {
    id: 4,
    href: "https://github.com/smindre1/pacey",
    image: "./assets/images/project-image-placeholder.png",
    alt: "Project 4 Background",
    projectTitle: "Project Name 4:",
    desc: "Code Languages Used",
    mainImg: false,
  },
  {
    id: 5,
    href: "https://github.com/smindre1/pacey",
    image: "./assets/images/project-image-placeholder.png",
    alt: "Project 5 Background",
    projectTitle: "Project Name 5",
    desc: "Code Languages Used",
    mainImg: false,
  },
];

function ProjectDisplay() {
  return (
    <div class="container">
      <h2 class="title">
        <a id="My-Work-Path">My Work</a>
      </h2>
      <div class="project-images">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <button class="portfolioBtn" id="additionalProjects">
          More Of My Work Here!
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
