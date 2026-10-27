import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('you@example.com');
    alert('Email copied to clipboard!');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value || 'Project inquiry';
    const message = form.message.value;
    
    window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap contact">
        <div>
          <h2>Let's work together</h2>
          <p className="sub" style={{ marginBottom: 0 }}>
            Have a project in mind, or just want to say hello? I usually reply within a day.
          </p>
          <div className="info">
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>
              <span>
                <small>Email</small>
                you@example.com <button className="btn o s" onClick={handleCopyEmail} type="button">Copy</button>
              </span>
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
              <span>
                <small>Location</small>
                Your City / Remote
              </span>
            </div>
          </div>
          <div className="row">
            <a className="btn o s" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn o s" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <form id="form" onSubmit={handleSendMessage}>
          <h3>Send a message</h3>
          <div className="two">
            <label>
              Your name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email address
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" placeholder="Project inquiry" />
          </label>
          <label>
            Message
            <textarea name="message" required placeholder="Tell me about your project or idea"></textarea>
          </label>
          <button className="btn" type="submit">Send message</button>
          <p className="note" role="status">This opens your email app with the message filled in.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
