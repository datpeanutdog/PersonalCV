import { useState } from "react";
import ContactList from "./ContactList"; 

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const [refreshKey, setRefreshKey] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
        
        setName("");
        setEmail("");
        setMessage("");

       
        setRefreshKey(prev => prev + 1); 
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong!");
      });
  }

  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" id="submitBtn">
            Send
          </button>
        </form>
      </section>

      <section className="card" style={{ marginTop: "20px" }}>
        <ContactList key={refreshKey} />
      </section>
    </>
  );
}

export default Contact;