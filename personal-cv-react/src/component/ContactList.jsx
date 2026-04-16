import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h3>Saved Contacts</h3>
      <ul style={{ padding: 0 }}>
        {contacts.map((contact) => (
          <li 
            key={contact.id} 
            style={{ 
              listStyle: "none", 
              marginBottom: "15px", 
              padding: "10px", 
              borderBottom: "1px solid #eee" 
            }}
          >
            {/* Displaying Name, Email, and Message */}
            <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{contact.name}</div>
            <div style={{ color: "#555", fontSize: "0.9rem" }}>{contact.email}</div>
            <p style={{ margin: "5px 0 0 0", fontStyle: "italic" }}>"{contact.message}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;