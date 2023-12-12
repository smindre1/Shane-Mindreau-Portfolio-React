function Project(props) {
    return (
        <a href={props.href}>
          <figure class="figure greyOverlay">
            <img class="MainImg opacityFilter" src={props.image} alt={props.alt} />
              <figcaption class="caption mainCaption">
                <h3>{props.projectTitle}</h3>
                <p>{props.desc}</p>
              </figcaption>
          </figure>
        </a>
    );
  }
  
  export default Project;