import React, { useState, useEffect } from "react";
import axios from "axios";

function BusinessCardView() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/contacts")
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="business-card-container">
      {contacts.map(contact => (
        <div className="business-card" key={contact.customerId}>
          <h2>{contact.contactName}</h2>
          <h3>{contact.contactTitle}</h3>
          <p>{contact.companyName}</p>
          <p>{contact.address}</p>
          <p>{contact.city}, {contact.country} {contact.postalCode}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Fax: {contact.fax}</p>
        </div>
      ))}
    </div>
  );
}
