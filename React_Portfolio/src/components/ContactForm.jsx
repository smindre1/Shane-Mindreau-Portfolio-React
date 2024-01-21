import { useState, useEffect } from "react";
import Popup from '../components/Popup';

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    success ? setTimeout(setSuccess(false), 5000) : null;
    console.log("running effect")
  }, [success]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();

    setSuccess(true);
    // setTimeout(setSuccess(false), 5000);

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
    <form onSubmit={handleSubmit}>
      {/* <h2>Contact</h2> */}
      <input type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Subject" autoComplete="off" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <input type="text" placeholder="Phone Number" autoComplete="off" value={number} onChange={(e) => setNumber(e.target.value)} />
      <textarea type="text" placeholder="Message" cols="30" rows="10" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit" onClick={() => setSuccess(true)}>Submit</button>
      <Popup trigger={success} setTrigger={setSuccess}>
        <h3>Thank You For Your Message!</h3>
      </Popup>
    </form>
  );
};

export default ContactForm;
