import { useRef, useState } from "react";
import "./Contacts.scss";

const Contacts = () => {
  const [message, setMessage] = useState(false)
  const textRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    textRef.current.value = "";


  }
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="hands" />
      </div>
      <div className="right">
        <h2>Contacts</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Your Message..." ref={textRef} ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for contacting me. Will reply asap =)</span> }
        </form>
      </div>
    </div>
  );
};

export default Contacts;
