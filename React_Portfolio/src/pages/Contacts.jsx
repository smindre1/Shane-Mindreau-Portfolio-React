import Form from '../components/ContactForm'

function Contacts() {
  return (
    <div className="container contacts">
      <h2 id="Contact-Me-Path" className="title">
        Contact Me
      </h2>
      <Form></Form>
      <br></br>
      <nav id="contact-me-nav">
        <a href="tel:646-526-4839" className="contacts-spacing">
          646•526•4839
        </a>
        <a href="mailto:shane.mindreau@gmail.com" className="contacts-spacing">
          shane.mindreau@gmail.com
        </a>
        <a href="https://github.com/smindre1?tab=repositories" className="contacts-spacing">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shane-mindreau-458219236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFvAWpoCaRK%2Bpn8NrPy5O5g%3D%3D"
          className="contacts-spacing"
        >
          Linkden
        </a>
      </nav>
    </div>
  );
}

export default Contacts;
