function Project(proj) {
    let mainImg;
    let cap;
    proj.mainImg ? mainImg = "mainImg opacityFilter" : mainImg = "opacityFilter";
    proj.caption ? cap = "caption mainCaption" : cap = "caption subCaption";

    return (
        <a href={proj.href}>
          <figure className="figure greyOverlay">
            <img className={mainImg} src={proj.image} alt={proj.alt} />
              <figcaption className={cap}>
                <h3>{proj.projectTitle}</h3>
                <p>{proj.desc}</p>
              </figcaption>
          </figure>
        </a>
    );
  }
  
  export default Project;