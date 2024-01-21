import Face from '../assets/images/face-placeholder.jpg'

function AboutMe() {
    return (
    <div className="flexRow">
        <h2 className="title"><a id="About-Me-Path">About Me</a></h2>
        <article id="aboutMeArticle">
          <figure className="div">
            <img className="leftFigure" id="profile" src={Face} alt="Profile Image" />
          </figure>
          <div className="text">
            <p>N/A</p>
            <p>N/A</p>
          </div>
        </article>
    </div>
    );
  }
  
  export default AboutMe;