import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit: ", message, name, email);
    try {
      // Reset form after successful submission
      setMessage("");
      setName("");
      setEmail("");
      console.log("failed");

    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact</h2>
      <label>
        Message:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br></br>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br></br>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
