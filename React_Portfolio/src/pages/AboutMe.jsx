import Face from "../assets/images/face-placeholder.jpg";

function AboutMe() {
  return (
    <div className="flexRow about-page">
      <article className="flexColumn bio">
        <h2 className="subtitle">Shane Mindreau</h2>
        <div>
          <h3 className="prgTitle">Full-Stack Web Developer</h3>
          <p className="intro">Welcome! I'm Shane, a full-stack web developer with a passion for building creative and reactive digital projects. I am specialized in using React.js to make dynamic front-end designs as well as MongoDB/SQL databases for robust data management.</p>
          <h3 className="prgTitle">I'm Also Proficient In...</h3>
          <p className="bodyText">- Node.js</p>
          <p className="bodyText">- MERN stack</p>
          <p className="bodyText">- RESTful APIs</p>
          <p className="bodyText">- GraphQL APIs</p>
          <p className="bodyText bulletPoint">*** And more in my Resume section!</p>
          <h3 className="prgTitle">Education</h3>
          <p className="bodyText">Full-Stack Certificate, Colombia University Coding Bootcamp</p>
          <p className="bodyText">BA Graphic Design, Binghamton University</p>
        </div>
      </article>
      <div className="flexColumn">
        <figure>
          <img id="profile" src={Face} alt="Profile Image" /> 
        </figure>
        <p className="bodyText">shane.mindreau@gmail.com</p>
        <p className="bodyText">(646) 526-4839</p>
      </div>
      
    </div>
  );
}

export default AboutMe;
