import Face from "../assets/images/face-placeholder.jpg";

function AboutMe() {
  return (
    <div className="flexRow about-page">
      <article className="flexColumn bio">
        <h2 className="name">Shane Mindreau</h2>
        <div>
          <p>N/A</p>
          <p>N/A</p>
        </div>
      </article>
      <figure>
          <img id="profile" src={Face} alt="Profile Image" />
        </figure>
    </div>
  );
}

export default AboutMe;
