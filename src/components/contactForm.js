import React from "react"

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/merci"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label>Nom</label>
        <div className="control">
          <input className="input" type="text" name="name" required />
        </div>
      </div>
      <div className="field">
        <label>Email</label>
        <div className="control">
          <input className="input" type="email" name="email" required />
        </div>
      </div>
      <div className="field">
        <label>Message</label>
        <div className="control">
          <textarea className="textarea" name="message" required></textarea>
        </div>
      </div>
      <div className="field has-text-right m-3">
        <div className="control">
          <button type="submit" className="rounded-button">Envoyer</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm