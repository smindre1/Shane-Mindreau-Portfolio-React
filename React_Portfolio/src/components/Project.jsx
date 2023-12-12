// import Path from '../../public/images/project-image-placeholder.png';
// proj.image
function Project(proj) {
    let mainImg = "";
    proj.mainImg ? mainImg = "mainImg" : mainImg;
    let newPath = '../assets/images/' + 'project-image-placeholder.png'

    return (
        <a href={proj.href}>
          <figure className="figure greyOverlay">
            <img className= {mainImg + 'opacityFilter'} src={proj.image} alt={proj.alt} />
              <figcaption className="caption mainCaption">
                <h3>{proj.projectTitle}</h3>
                <p>{proj.desc}</p>
              </figcaption>
          </figure>
        </a>
    );
  }
  
  export default Project;