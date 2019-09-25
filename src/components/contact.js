import React from "react"
import './contact.scss';

const Contact = () => {
  return(
    <section id="contact" className="contact">
        <div className="container">
            <div className="primary"></div>
            <div className="secondary"></div>
            <h2 className="section-title">Contact</h2>
            <p className="section-desc">Send an email to me at </p>
            <h1 className="email-address">shirleywang527@gmail.com</h1>
            <p className="section-desc">I'd like to hear from you at any time. Don't be a stranger!</p>
        </div>
    </section>
    )
}

export default Contact