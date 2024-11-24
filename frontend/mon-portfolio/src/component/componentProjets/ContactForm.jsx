import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);

    // Vous pouvez envoyer les données via une requête HTTP ici (fetch ou axios)
    alert('Votre message a été envoyé !');
  };

  return (
    <div id="contactContainer">
      <h2 className="contactTitle">Me contacter</h2>
      <div className="emailBlock">
        <p className="emailText">allan.gcx@gmail.com</p>
        <button
          className="copyButton"
          onClick={() => navigator.clipboard.writeText('allan.gcx@gmail.com')}
        >
          📋 Copier
        </button>
      </div>

      <p className="orText">Ou, si vous préférez un formulaire</p>

      <form onSubmit={handleSubmit} className="contactForm">
        <label className="formLabel">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="formInput"
            required
          />
        </label>
        <label className="formLabel">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Que souhaitez-vous dire ?"
            className="formTextArea"
            required
          ></textarea>
        </label>
        <button type="submit" className="submitButton">
          ENVOYER
        </button>
      </form>
    </div>
  );
};

export default ContactForm;