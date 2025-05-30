import Face2 from "../assets/images/face-placeholder.jpg"
import Face from "../assets/images/Shane_Profile_Photo.jpg"
import HTML from "../assets/images/icons/TechStack_Icons/HTML_Icon.svg"
import CSS from "../assets/images/icons/TechStack_Icons/CSS_Icon.svg"
import Javascript from "../assets/images/icons/TechStack_Icons/Javascript_Icon.svg"
import React_Icon from "../assets/images/icons/TechStack_Icons/React_Icon.svg"
import GraphQL from "../assets/images/icons/TechStack_Icons/GraphQL_DB_Icon.svg"
import SQL from "../assets/images/icons/TechStack_Icons/SQL_DB_Icon.svg"
import MongoDB from "../assets/images/icons/TechStack_Icons/MongoDB_Icon.svg"
import CPlus from "../assets/images/icons/TechStack_Icons/C++_Icon.png"

function AboutMe() {
  return (
    <div className="aboutPage">
      <article className="flexColumn bio">
        <h2 className="subtitle name">Shane Mindreau</h2>
        <div>
          <h3 className="role">Software Developer</h3>
          <div className="introDiv">
            <p className="intro">Welcome! I'm Shane Mindreau, a software developer with a passion for building creative and reactive digital projects. I have background experience in Full-Stack Web Development and Graphic Design, where I specialized in using React.js and MongoDB/SQL databases to make dynamic front-end designs with robust data management.</p>
            {/* This appear only for screens 560px and below */}
            <div className="flexColumn mobileItem">
                <img className="profile" src={Face} alt="Profile Image" /> 
              {/* <p className="bodyText profileTag">shane.mindreau@gmail.com</p>
              <p className="bodyText profileTag">(646) 526-4839</p> */}
            </div>
            {/* This appear only for screens 530px and below */}
            <p className="mobileIntro">Welcome! I'm Shane Mindreau, a software developer with a passion for building creative and reactive digital projects. I have background experience in Full-Stack Web Development and Graphic Design, where I specialized in using React.js and MongoDB/SQL databases to make dynamic front-end designs with robust data management.</p>
          </div>
          
          <h4 className="prgTitle">Tech Stack</h4>
          <div className="techStack">
            <div className="techIconDiv">
              <img className="techStackIcon" src={HTML} alt="HTML Icon"></img>
              <p className="techLabel">HTML5</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={CSS} alt="CSS Icon"></img>
              <p className="techLabel">CSS</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={Javascript} alt="Javascript Icon"></img>
              <p className="techLabel">Javascript</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIconB" src={CPlus} alt="C++ Icon"></img>
              <p className="techLabel">C++</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={React_Icon} alt="React Icon"></img>
              <p className="techLabel">React.js</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={GraphQL} alt="GraphQL Icon"></img>
              <p className="techLabel">GraphQL</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={SQL} alt="SQL Icon"></img>
              <p className="techLabel">SQL</p>
            </div>
            <div className="techIconDiv">
              <img className="techStackIcon" src={MongoDB} alt="MongoDB Icon"></img>
              <p className="techLabel">MongoDB</p>
            </div>
          </div>
          {/* <p className="bodyText">- Node.js</p>
          <p className="bodyText">- MERN stack</p>
          <p className="bodyText">- RESTful APIs</p>
          <p className="bodyText">- GraphQL APIs</p>
          <p className="bodyText bulletPoint">*** And more in my Resume section!</p> */}
          <h4 className="prgTitle educationTitle">Education</h4>
          <p className="bodyText">BA Computer Science, Hunter College (<i>In Progress</i>)</p>
          <p className="bodyText">Full-Stack Certificate, Columbia University</p>
          <p className="bodyText">BA Graphic Design, Binghamton University</p>
        </div>
      </article>
      <div className="flexColumn notMobileItem">
        <figure className="circle">
          <img className="profile" src={Face} alt="Profile Image" /> 
        </figure>
        <p className="bodyText profileTag hide">shane.mindreau@gmail.com</p>
        <p className="bodyText profileTag hide">(646) 526-4839</p>
      </div>
      
    </div>
  );
}

export default AboutMe;
