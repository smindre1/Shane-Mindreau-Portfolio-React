import { useState, useEffect} from "react";
import HomeIcon from "../assets/images/icons/Home_Icon.svg"
import PortfolioIcon from "../assets/images/icons/Portfolio_Icon.svg"
import ContactsIcon from "../assets/images/icons/Contacts_Icon.svg"
import ResumeIcon from "../assets/images/icons/Resume_Icon.svg"

function PhoneMenu() {
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
    
    return (

    <div className="phoneMenuDiv">
        <nav  className="phoneMenu">
            <a href="/" className={about ? "highlight menuBarText" : "menuBarText"}><img className="mobileIcons" src={HomeIcon}></img></a>
            <a href="/Portfolio" className={portfolio ? "highlight menuBarText" : "menuBarText"}><img className="mobileIcons" src={PortfolioIcon}></img></a>
            <a href="/Contacts" className={contact ? "highlight menuBarText" : "menuBarText"}><img className="mobileIcons" src={ContactsIcon}></img></a>
            <a href="https://drive.google.com/file/d/1hhlTWV-XAbcyiVjyo_NWa3JYaHtBa27k/view?usp=sharing" target="_blank" className={resume ? "highlight menuBarText" : "menuBarText"}><img className="mobileIcons" src={ResumeIcon}></img></a>
        </nav>
    </div>
    );
  }
  
  export default PhoneMenu;