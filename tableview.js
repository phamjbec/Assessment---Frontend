import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/contacts")
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.customerId}>
            <td>{contact.customerId}</td>
            <td>{contact.companyName}</td>
            <td>{contact.contactName}</td>
            <td>{contact.contactTitle}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.city}</td>
            <td>{contact.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
