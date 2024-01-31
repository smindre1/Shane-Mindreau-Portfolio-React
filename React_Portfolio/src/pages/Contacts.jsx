import Form from '../components/ContactForm'
import Phone from "../assets/images/icons/Phone_Icon.svg"
import Email from "../assets/images/icons/Email_Icon.svg"
import Github from "../assets/images/icons/Github_Icon.svg"
import LinkedIn from "../assets/images/icons/LinkedIn_Icon.svg"


function Contacts() {
  return (
    <div className="contact-page">
      <h2 className='subtitle lineBreak'>Send Me A Message:</h2>
      <Form></Form>
      <nav className="flexRow contact-me-nav">
        <a href="tel:646-526-4839" className="contacts-spacing">
          {/* 646•526•4839 */}
          <img className="contactIcon shrink" src={Phone}></img>
        </a>
        <a href="mailto:shane.mindreau@gmail.com" className="contacts-spacing">
          {/* shane.mindreau@gmail.com */}
          <img className="contactIcon" src={Email}></img>
        </a>
        <a href="https://github.com/smindre1?tab=repositories" className="contacts-spacing">
          {/* GitHub */}
          <img className="contactIcon" src={Github}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/shane-mindreau-458219236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFvAWpoCaRK%2Bpn8NrPy5O5g%3D%3D"
          className="contacts-spacing"
        >
          {/* Linkden */}
          <img className="contactIcon shrink" src={LinkedIn}></img>
        </a>
      </nav>
    </div>
  );
}

export default Contacts;
