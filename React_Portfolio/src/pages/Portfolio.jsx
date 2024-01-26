import Project from "../components/Project";
import Path1 from "../assets/images/song-finder-custom-image.png"
import Path2 from "../assets/images/Present-List-Custom-Image.png"
import Path3 from "../assets/images/project-image-placeholder.png"
import { useState, useRef, useEffect } from "react";

const Portfolio = () => {
  const [display, setDisplay] = useState(0);
  // const [text, setText] = useState(0);
  const oldMain = useRef(null);
  const newMain = useRef(null);
  const textBody = useRef(null);

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
  
  const displayAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(0%);
    }
    to {
      opacity: 1;
      transform: translateX(-123px);
    }
  }
`;

  const textAnimation = `
  @keyframes textAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  `;


  useEffect(() => {
    
    oldMain.current.classList.add("vanish");
    newMain.current.classList.remove("hide");
    
    textBody.current.style.animation = 'textAppear 2s';
    textBody.current.style.animationFillMode = 'forwards';
    newMain.current.style.animation = 'fadeIn 2s';
    newMain.current.style.animationFillMode = 'forwards';
    setTimeout(() => {oldMain.current.classList.remove("vanish");
    newMain.current.classList.add("hide"); textBody.current.style.animation = '';}, 2000)
    
  }, [display]);

  // const rightEnterAnimation = () => {
  //   // const targetCord = oldMain.current.getBoundingClientRect();
  //   // console.log("target", targetCord);
    

  //   // oldMain.current.classList.add("hide");
  //   oldMain.current.classList.add("vanish");
  //   // textBody.current.classList.add("vanish");

  //   newMain.current.classList.remove("hide");
  //   // const actualCord = newMain.current.getBoundingClientRect();
  //   // console.log("actual", actualCord);
  //   newMain.current.classList.add("fade-in");
  //   range != text ? setText(text + 1) : setText(0);
  //   textBody.current.classList.add("textRotate");

  //   range != display ? setDisplay(display + 1) : setDisplay(0);
  //   oldMain.current.classList.remove("vanish");
  //   setTimeout(() => {
  //     newMain.current.classList.add("hide");
  //     textBody.current.classList.remove("textRotate");
  //     // setTimeout(() => {
  //     //   range != display ? setDisplay(display + 1) : setDisplay(0);
  //     //   oldMain.current.classList.remove("vanish");
  //     // }, 500)
      
  //     }, 4000)
    

  // }

  return (
    <div className="flexColumn">
      {/* <h2 className="subtitle">My Work</h2> */}
      <div className="flexRow about-page">
        
        <figure ref={oldMain} className="figure greyOverlay">
          <img className="mainImg opacityFilter" src={projects[display].image} alt={projects[display].alt} />
        </figure>
        <figure ref={newMain} className="figure greyOverlay hide nextImage">
          <style>{displayAnimation}</style>
          <img className="mainImg opacityFilter" src={projects[display].image} alt={projects[display].alt} />
        </figure>
        
        <div ref={textBody} className="flexColumn">
          <style>{textAnimation}</style>
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
    // <div className="testTwo"></div>
  );
}

export default Portfolio;