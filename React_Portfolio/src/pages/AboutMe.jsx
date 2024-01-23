import Face from "../assets/images/face-placeholder.jpg";

function AboutMe() {
  return (
    <div className="flexRow about-page">
      <article className="flexColumn bio">
        <h2 className="name">Shane Mindreau</h2>
        <div>
          <h3 className="subtitle">Full-Stack Web Developer</h3>
          <p className="bodyText">Welcome! I'm Shane, a full-stack web developer with a passion for building creative and reactive digital projects. I am specialized in using React.js to make dynamic front-end designs as well as MongoDB/SQL databases for robust data management.</p>
          <h3 className="subtitle">I'm Also Proficient In...</h3>
          <li className="bodyText">- Node.js</li>
          <p className="bodyText">- MERN stack</p>
          <p className="bodyText">- RESTful APIs</p>
          <p className="bodyText">- GraphQL APIs</p>
          <p className="bodyText bulletPoint">*** And more in my Resume section!</p>
          <h3 className="subtitle">Education</h3>
          <p className="bodyText">Full-Stack Certificate, Colombia University Coding Bootcamp</p>
          <p className="bodyText">BA Graphic Design, Binghamton University</p>
        </div>
      </article>
      <figure>
          <img id="profile" src={Face} alt="Profile Image" />
        </figure>
    </div>
  );
}

export default AboutMe;
