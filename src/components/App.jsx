import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm'; 


export const App = () => {

  return (
    <div>
      <h1>Phonebook</h1>
    <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter ... /> */}
      {/* <ContactList ... /> */}
    </div>

  );
};
