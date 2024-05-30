function Resume() {
  return (
    <div className="flexColumn resumePage">
      <div className="resume">
        <section className="resHeading resSecBreak">
          <h2 className="resTitle">Shane Mindreau</h2>
          <p className="resText">shane.mindreau@gmail.com | (646) 526-4839 | New York City, NY</p>
          <p className="resText">|LinkedIn: linkedin.com/in/shane-mindreau | GitHub: github.com/smindre1 |</p>
          <p className="resText">| Portfolio: shane-mindreau.com |</p>
        </section>
        <section className="resSecBreak">
          <p className="resText">
            [<b className="bold italic">Career Summary:</b> I’m a full-stack web developer with a passion for building creative and reactive digital projects. I
            am specialized in using React.js to make dynamic front-end designs as well as developing intuitive backends using MongoDB/SQL databases for robust
            data management.]
          </p>
        </section>
        <section className="resSecBreak">
          <h3 className="secTitle">TECHNICAL SKILLS</h3>
          <ul>
            <li className="resText list">
              <b className="bold">Frontend: </b>
              HTML5, CSS, JQuery, Javascript, Bootstrap, AJAX
            </li>
            <li className="resText list">
              <b className="bold">Backend: </b>
              MySQL, MongoDB, Express, ReactJS, Node, GraphQL, Handlebars
            </li>
          </ul>
        </section>
        <section className="resSecBreak">
          <h3 className="secTitle">PROJECTS</h3>
          <div className="prgBreak">
            <p className="resText">
              <b className="bold">Paws And Found |</b> github.com/smindre1/PawsAndFound | pawsandfound-dd3dbebb5f23.herokuapp.com
            </p>
            <p className="resText prgBreak">
              <b className="bold italic">Role in Project: </b>
              Group Manager, Frontend & Backend development
            </p>
            <ul>
              <li className="resText list">
                <b className="bold">Summary: </b>
                This application is a network that allows people to post about lost pets in the hopes of reuniting them with their owners.
              </li>
              <li className="resText list">
                <b className="bold">Accomplished: </b>
                We have accomplished a reactive MERN application using Apollo to run GraphQL API queries on our backend server. I created some of the server
                models and GraphQL schemas. I developed several pages of the frontend functionality. Also, I assisted my collaborators with a lot of the issues
                they were having with their roles in the client and server side mutations and queries.{" "}
              </li>
              <li className="resText list">
                <b className="bold">Tools/Languages: </b>
                HTML5, CSS, Javascript, Node.js, Express.js, React.js, MongoDB, GraphQL, and Heroku/MongoDB Atlas for deployment.
              </li>
            </ul>
          </div>
          <div className="prgBreak">
            <p className="resText">
              <b className="bold">Present List |</b> github.com/smindre1/Present-List | present-list-fc60525bdd4f.herokuapp.com
            </p>
            <p className="resText prgBreak">
              <b className="bold italic">Role in Project: </b>
              Backend & Frontend development
            </p>
            <ul>
              <li className="resText list">
                <b className="bold">Summary: </b>A way to record gift ideas in a list format for special holidays or events.
              </li>
              <li className="resText list">
                <b className="bold">Accomplished: </b>
                This is a dynamic MVC application that utilizes a mySQL database backend. I was responsible for the API Controllers as well making and assisting
                with handlebar page elements needed for the Frontend.
              </li>
              <li className="resText list">
                <b className="bold">Tools/Languages: </b>
                HTML5, CSS, Javascript, Node.js, Express.js, log in session middleware, Handlebars.js, mySQL (using Sequelize), and Heroku.
              </li>
            </ul>
          </div>
          <div className="prgBreak">
            <p className="resText">
              <b className="bold">Massage Salon Business Website |</b> https://github.com/smindre1/Spa-Maluge-Website | https://spamaluge.com/
            </p>
            <p className="resText">
              <b className="bold">Massage Salon REST API |</b> https://github.com/smindre1/Spa_Maluge_Database
            </p>
            <p className="resText prgBreak">
              <b className="bold italic">Role in Project: </b>
              I built and designed the website as well as its RESTful API counterpart.
            </p>
            <ul>
              <li className="resText list">
                <b className="bold">Summary: </b>
                A modern Vite & React website for 'Spa Maluge' which offers a fast, interactive, and responsive experience. It showcases high-end massage services with a classical baroque theme. Customers can browse services, message the business, and make reservations. There are also secure, non-commercial webpages for business management.
              </li>
              <li className="resText list">
                <b className="bold">Accomplished: </b>
                A dynamic, responsive and clean business website with an effective reservation system that utilizes a separate RESTful API. The business staff can easily manage the business reservations and more through the website, in a secure manner using user authentication.
              </li>
              <li className="resText list">
                <b className="bold">Tools/Languages: </b>
                HTML5, CSS, Javascript, Node.js, MongoDB, React and Vite.
              </li>
            </ul>
          </div>
        </section>
        <section className="resSecBreak">
          <h3 className="secTitle">WORK EXPERIENCE</h3>
          <div className="prgBreak">
            <p className="flexRow gap">
              <li className="resText">
                <b className="bold">EJ's Luncheonette</b>
              </li>
              <li className="resText">May 2022 - Aug 2022</li>
            </p>
            <p className="flexRow gap">
              <li className="resText italic">Phone Sales Associate</li>
              <li className="resText">New York City, NY</li>
            </p>
            <ul>
              <li className="resText list">
                Efficiently managed incoming phone orders for a bustling diner, ensuring accurate transcription of customer requests and timely entry into the
                restaurant's system.
              </li>
              <li className="resText list">
                Demonstrated exceptional communication skills by courteously assisting customers with menu inquiries, order customization, and special requests,
                resulting in high customer satisfaction ratings.
              </li>
              <li className="resText list">
                Actively participated in training new staff members, sharing best practices and fostering a positive work environment.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className="secTitle">EDUCATION</h3>
          <div className="prgBreak">
            <p className="flexRow gap">
              <li className="resText">
                <b className="bold">Columbia University</b>
              </li>
              <li className="resText">January 2024</li>
            </p>
            <p className="flexRow gap">
              <li className="resText italic">Full-Stack Certificate</li>
              <li className="resText">New York City, NY</li>
            </p>
          </div>
          <div className="prgBreak">
            <p className="flexRow gap">
              <li className="resText">
                <b className="bold">Binghamton University</b>
              </li>
              <li className="resText">May 2023</li>
            </p>
            <p className="flexRow gap">
              <li className="resText italic">BA Graphic Design</li>
              <li className="resText">Binghamton, NY </li>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
