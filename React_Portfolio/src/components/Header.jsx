import { useState, useEffect} from "react";

function Header() {
    const [about, setAbout] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [contact, setContact] = useState(false);
    const [resume, setResume] = useState(false);


    const pageSelection = () => {
        const page = window.location.pathname;
        page == "/" ? setAbout(true) : setAbout(false);
        page == "/Portfolio" ? setPortfolio(true) : setPortfolio(false);
        page == "/Contacts" ? setContact(true) : setContact(false);
        page == "/Resume" ? setResume(true) : setResume(false);
    };

    useEffect(() => {
        pageSelection();
    }, [about, portfolio, contact, resume])
    
    // {about ? "highlight menuBarText" : "menuBarText"}
    return (
    <header>
    <h1><a className="logo" href="/">SM</a></h1>
    <nav className="menu">
        <a href="/" className={about ? "highlight menuBarText" : "menuBarText"}>About Me</a>
        <a href="/Portfolio" className={portfolio ? "highlight menuBarText" : "menuBarText"}>Portfolio</a>
        <a href="/Contacts" className={contact ? "highlight menuBarText" : "menuBarText"}>Contacts</a>
        <a href="https://drive.google.com/file/d/1AXLne887RQYqAWeicEdkdTaSZmFcy8w6/view?usp=sharing" target="_blank" className={resume ? "highlight menuBarText" : "menuBarText"}>Resume</a>
    </nav>
    </header>
    );
  }
  
  export default Header;