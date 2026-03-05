import { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Thank you ${name}! Your message has been sent.`);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
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
        
                <button type="submit" id="submitBtn">Send</button>
        
            </form>
        </section>
    );
}

export default Contact;