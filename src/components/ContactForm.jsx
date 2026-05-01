import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      console.log('Contact request sent', formData);
      setStatus('Thank you! Your message has been received. We will contact you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="field-group">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required />
      </div>
      <div className="field-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="button button-primary">Send Message</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
