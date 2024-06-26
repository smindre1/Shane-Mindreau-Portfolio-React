import Path1 from "../assets/images/displays/Pet_Display.svg"
import Path2 from "../assets/images/displays/Present_Display.svg"
import Path3 from "../assets/images/displays/Weather_Display.svg"
import Path4 from "../assets/images/displays/Massage_Salon_Display.svg"
import Path5 from "../assets/images/displays/Quiz_Display.svg"
import Path6 from "../assets/images/project-image-placeholder.png"
import PawIcon from "../assets/images/icons/Paw_Icon.svg"
import PresentIcon from "../assets/images/icons/Present_Icon.svg"
import WeatherIcon from "../assets/images/icons/Weather_Icon.svg"
import QuizIcon from "../assets/images/icons/Quiz_Icon.svg"
import MassageIcon from "../assets/images/icons/Massage_Icon.svg"
import Arrow from "../assets/images/Arrow.svg"
import RedArrow from "../assets/images/redArrow.svg"
// import Github from "../assets/images/icons/Github_Icon.svg"

import { useState, useRef, useEffect } from "react";

const Portfolio = () => {
  const [display, setDisplay] = useState(0);
  const [disabledArw, setDisabledArw] = useState(false);
  const oldMain = useRef(null);
  const newMain = useRef(null);
  const textBody = useRef(null);

  const projects = [
    {
      href: "https://spamaluge.com/",
      repo: "https://github.com/smindre1/Spa-Maluge-Website",
      image: Path4,
      alt: "Massage Parlor Display Image",
      icon: MassageIcon,
      projectTitle: "Spa Maluge (Massage Salon)",
      desc: "A modern business website made with Vite & React that provides a fast, interactive, and responsive user experience. This website is for the purpose of displaying the high-end massage parlor known as 'Spa Maluge', displaying a variety of services in depth with a classical baroque style inspired theme.",
      purpose: "The site features both commercial webpages meant for customers to browse information about the services and business, message the business directly, and to make a reservation. There are also non-commercial webpages that are meant for managing the business, protected with user authentication.",
      techStack: "TechStack: HTML, CSS, JS, MongoDB",
    },
    {
      href: "https://pawsandfound-dd3dbebb5f23.herokuapp.com/",
      repo: "https://github.com/smindre1/PawsAndFound",
      image: Path1,
      alt: "Paws And Found Display Image",
      icon: PawIcon,
      projectTitle: "Paws And Found",
      desc: "This is a reactive MERN application using Apollo to run GraphQL API queries on our backend server. This was created by me, Brandon Rivera, and Nat Rodriguez.",
      purpose: "Welcome to our missing pets blog in which users can post and reply to animals they have either lost or found.",
      techStack: "",
    },
    {
      href: "https://present-list-fc60525bdd4f.herokuapp.com/",
      repo: "https://github.com/smindre1/Present-List?tab=readme-ov-file",
      image: Path2,
      alt: "Present List Display Image",
      icon: PresentIcon,
      projectTitle: "Present List",
      desc: "This is a dynamic MVC application that utilizes a mySQL database backend. This was created by me, Affan Kamal, and Joseph Aro.",
      purpose: "Welcome to our holiday gift planning application! The purpose of this is to create seperate lists for each holiday or each important person in your life, and throughout the year if you get an idea for a wonderful gift for someone add it to your list. Then the next time a holiday or birthday rolls around you will already know what to get everyone!",
      techStack: "TechStack: HTML, CSS, JS, SQL",
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
      image: Path5,
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
      transform: translateX(10%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
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
    const leftBtns = document.getElementsByClassName("leftArrowBtn");
    const rightBtns = document.getElementsByClassName("rightArrowBtn");
    if(disabledArw) {
      leftBtns[0].setAttribute("disabled", "");
      leftBtns[1].setAttribute("disabled", "");
      rightBtns[0].setAttribute("disabled", "");
      rightBtns[1].setAttribute("disabled", "");
    }

    oldMain.current.classList.add("vanish");
    newMain.current.classList.remove("hide");
    
    textBody.current.style.animation = 'textAppear 2s';
    textBody.current.style.animationFillMode = 'forwards';
    newMain.current.style.animation = 'fadeIn 1.25s';
    newMain.current.style.animationFillMode = 'forwards';
    setTimeout(() => {
      oldMain.current.classList.remove("vanish");
      newMain.current.classList.add("hide"); 
      textBody.current.style.animation = '';
      setDisabledArw(false);
      leftBtns[0].removeAttribute("disabled", "");
      leftBtns[1].removeAttribute("disabled", "");
      rightBtns[0].removeAttribute("disabled", "");
      rightBtns[1].removeAttribute("disabled", "");}, 2000)
    

    
  }, [display]);


  return (
    <div className="flexColumn">
      {/* <h2 className="subtitle">My Work</h2> */}
      <div className="portfolioPage">
        <div className="flexRow figureDiv">
          <figure ref={oldMain} className="figure">
            <img className="mainImg" src={projects[display].image} alt={projects[display].alt} />
          </figure>
          <figure ref={newMain} className="figure hide nextImage">
            <style>{displayAnimation}</style>
            <img className="mainImg" src={projects[display].image} alt={projects[display].alt} />
          </figure>
        </div>
        
        
        <div className="descDiv">
          <div ref={textBody} className="flexColumn">
            <style>{textAnimation}</style>
            <h3 className="subtitle lineBreak">{projects[display].projectTitle}</h3>
            <p className="lineBreak description">{projects[display].desc}</p>
            <p className="lineBreak description">{projects[display].purpose}</p>
            <div className="flexRow btnDisplay">
              <button className="portfolioBtns" onClick={() => {window.open(projects[display].href, "_blank")}}>Deployed Site</button>
              <button className="portfolioBtns" onClick={() => {window.open(projects[display].repo, "_blank")}}>Github Repository</button>
            </div>
          </div>
          {/* This secondIconDiv is for when the layout of the site changes according to a medium window display size */}
          <div className="flexRow secondIconDiv">
            <button className="leftArrowBtn" onClick={() => {0 != display ? setDisplay(display - 1) : setDisplay(range); setDisabledArw(true)}}> <img className="arrow" src={disabledArw ? RedArrow : Arrow}></img> </button>
            <img className="iconFadeLeft" src={0 != display ? projects[display - 1].icon : projects[range].icon}></img>
            <img className="icon" src={projects[display].icon} ></img>
            <img className="iconFadeRight" src={range != display ? projects[display + 1].icon : projects[0].icon}></img>
            <button className="rightArrowBtn" onClick={() => {range != display ? setDisplay(display + 1) : setDisplay(0); setDisabledArw(true)}}> <img className="arrow" src={disabledArw ? RedArrow : Arrow}></img> </button>
          </div>
        </div>
      </div>
      <div className="flexRow iconDiv">
        <button className="leftArrowBtn" onClick={() => {0 != display ? setDisplay(display - 1) : setDisplay(range); setDisabledArw(true)}}> <img className="arrow" src={disabledArw ? RedArrow : Arrow}></img> </button>
        <img className="iconFadeLeft" src={0 != display ? projects[display - 1].icon : projects[range].icon}></img>
        <img className="icon" src={projects[display].icon} ></img>
        <img className="iconFadeRight" src={range != display ? projects[display + 1].icon : projects[0].icon}></img>
        <button className="rightArrowBtn" onClick={() => {range != display ? setDisplay(display + 1) : setDisplay(0); setDisabledArw(true)}}> <img className="arrow" src={disabledArw ? RedArrow : Arrow}></img> </button>
      </div>
    </div>
    // <div className="testTwo"></div>
  );
}

export default Portfolio;