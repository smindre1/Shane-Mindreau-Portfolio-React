import Project from "../components/Project";
import Path1 from "../assets/images/song-finder-custom-image.png"
import Path2 from "../assets/images/Present-List-Custom-Image.png"
import Path3 from "../assets/images/project-image-placeholder.png"
import PawIcon from "../assets/images/icons/Paw_Icon.svg"
import WeatherIcon from "../assets/images/icons/Weather_Icon.svg"
import QuizIcon from "../assets/images/icons/Quiz_Icon.svg"
import Arrow from "../assets/images/Arrow.svg"

import { useState, useRef, useEffect } from "react";

const Portfolio = () => {
  const [display, setDisplay] = useState(0);
  // const [text, setText] = useState(0);
  const oldMain = useRef(null);
  const newMain = useRef(null);
  const textBody = useRef(null);

  const projects = [
    // {
    //   href: "https://smindre1.github.io/Song-Finder/",
    //   repo: "https://github.com/smindre1/Song-Finder",
    //   image: Path1,
    //   alt: "Song Finder Display Image",
    //   icon: "",
    //   projectTitle: "Song Finder",
    //   desc: "Code Used: HTML, CSS, & JS",
    //   purpose: "",
    //   techStack: "",
    // },
    // {
    //   href: "https://present-list-fc60525bdd4f.herokuapp.com/",
    //   repo: "https://github.com/smindre1/Present-List?tab=readme-ov-file",
    //   image: Path2,
    //   alt: "Present List Display Image",
    //   icon: "",
    //   projectTitle: "Present List",
    //   desc: "Code Used: HTML, CSS, JS, SQL",
    //   purpose: "",
    //   techStack: "",
    // },
    {
      href: "https://pawsandfound-dd3dbebb5f23.herokuapp.com/",
      repo: "https://github.com/smindre1/PawsAndFound",
      image: Path3,
      alt: "Paws And Found Display Image",
      icon: PawIcon,
      projectTitle: "Paws And Found",
      desc: "This is a reactive MERN application using Apollo to run GraphQL API queries on our backend server.",
      purpose: "Me and my collaborators have created a lost and found pet blog in which users can post and reply about animals they have lost or found.",
      techStack: "",
    },
    {
      href: "https://smindre1.github.io/Weather-App/",
      repo: "https://github.com/smindre1/Weather-App",
      image: Path3,
      alt: "Weather App Display Image",
      icon: WeatherIcon,
      projectTitle: "Weather App",
      desc: "This is a weather app that takes a User's searched location and provides that location's current weather conditions and a five day forecast for the location.",
      purpose: "",
      techStack: "",
    },
    {
      href: "https://smindre1.github.io/quiz-game/",
      repo: "https://github.com/smindre1/quiz-game",
      image: Path3,
      alt: "Quiz Game Display Image",
      icon: QuizIcon,
      projectTitle: "Quiz Game",
      desc: "This is a program that creates a multiple choice timed quiz. It gives 100 points for each correct answer and deducts time from the timer for every incorrect answer. When the user either runs out of time or questions the program requests initials to tie to the attempt's score.",
      purpose: "",
      techStack: "",
    },
  ];
  const range = projects.length - 1;
  
  const displayAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-20%);
    }
    to {
      opacity: 1;
      transform: translateX(-30%);
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
    newMain.current.style.animation = 'fadeIn 1.25s';
    newMain.current.style.animationFillMode = 'forwards';
    setTimeout(() => {oldMain.current.classList.remove("vanish");
    newMain.current.classList.add("hide"); textBody.current.style.animation = '';}, 2000)
    

    
  }, [display]);


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
        
        <div ref={textBody} className="descDiv flexColumn">
          <style>{textAnimation}</style>
          <h3 className="subtitle lineBreak">{projects[display].projectTitle}</h3>
          <p className="lineBreak description">{projects[display].desc}</p>
          <p className="lineBreak description">{projects[display].purpose}</p>
          <div className="flexRow btnDisplay">
            <button className="portfolioBtns" onClick={() => {window.open(projects[display].href, "_blank")}}>Deployed Site</button>
            <button className="portfolioBtns" onClick={() => {window.open(projects[display].repo, "_blank")}}>Github Repository</button>
          </div>
        </div>
      </div>
      <div className="flexRow iconDiv">
        <button className="leftArrowBtn" onClick={() => {0 != display ? setDisplay(display - 1) : setDisplay(range)}}> <img className="arrow" src={Arrow}></img> </button>
        <img className="iconFadeLeft" src={0 != display ? projects[display - 1].icon : projects[range].icon}></img>
        <img className="icon" src={projects[display].icon} ></img>
        <img className="iconFadeRight" src={range != display ? projects[display + 1].icon : projects[0].icon}></img>
        <button className="rightArrowBtn" onClick={() => {range != display ? setDisplay(display + 1) : setDisplay(0)}}> <img className="arrow" src={Arrow}></img> </button>
      </div>
    </div>
    // <div className="testTwo"></div>
  );
}

export default Portfolio;