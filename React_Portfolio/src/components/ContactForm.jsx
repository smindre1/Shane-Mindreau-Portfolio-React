import { useState, useRef } from "react";
import Popup from '../components/Popup';

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const subjectId = useRef(null);
  const nameId = useRef(null);
  const emailId = useRef(null);
  const numberId = useRef(null);
  const messageId = useRef(null);

  const sendEmail = async () => {
    const bodyMessage = `Full Name: ${name}<br>Email: ${email}<br>Phone Number: ${number}<br>Message:<br>${message}`;
    
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "portfoliopage3001@gmail.com",
      Password : "D3F7A6A6C51425BFCE0C1A5746D89DB3EA62",
      To : 'shane.mindreau@gmail.com',
      From : "portfoliopage3001@gmail.com",
      Subject : `Portfolio: ${subject}`,
      Body : bodyMessage
  }).then(
    message => alert("Message Sent")
  );
  }

  const checkInputs = () => {
    const items = [subject, name, email, number, message];
    

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
    setSuccess(true);

    try {
      // Reset form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setNumber("");
      setMessage("");

    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <form className="contactForm" autoComplete="off" onSubmit={handleSubmit}>
      {/* <h2>Contact</h2> */}
      <div className="flexRow formDiv">
        <div className="flexColumn formSection">
          <input className="formInput formFields" type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
          <p className="errorTxt">Full Name cannot be blank</p>
        </div>
        <div className="flexColumn formSection">
          <input className="formInput formFields" type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="errorTxt">Email cannot be blank</p>
        </div>
      </div>
      <div className="flexRow formDiv">
        <div className="flexColumn formSection">
          <input className="formInput formFields" type="text" placeholder="Subject" autoComplete="off" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <p className="errorTxt">Subject cannot be blank</p>
        </div>
        <div className="flexColumn formSection">
          <input className="formInput formFields" type="text" placeholder="Phone Number" autoComplete="off" value={number} onChange={(e) => setNumber(e.target.value)} />
          <p className="errorTxt">Phone Number cannot be blank</p>
        </div>
      </div>
      <div className="flexColumn">
        <textarea className="formFields" type="text" placeholder="Message" cols="30" rows="10" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)} />
        <p className="errorTxt">Message cannot be blank</p>
        <button className="formBtn" type="submit">Submit</button>
      </div>
      
      <Popup trigger={success} setTrigger={setSuccess}>
      </Popup>
    </form>
  );
};

export default ContactForm;
