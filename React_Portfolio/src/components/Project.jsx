function Project(proj) {
    let mainImg = "";
    proj.mainImg ? mainImg = "mainImg" : mainImg;

    return (
        <a href={proj.href}>
          <figure class="figure greyOverlay">
            <img class= {mainImg + 'opacityFilter'} src={proj.image} alt={proj.alt} />
              <figcaption class="caption mainCaption">
                <h3>{proj.projectTitle}</h3>
                <p>{proj.desc}</p>
              </figcaption>
          </figure>
        </a>
    );
  }
  
  export default Project;