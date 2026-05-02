import { useState } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus('Form is not configured yet. Please add your Web3Forms access key.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: formData.subject || 'New contact request',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          redirect: '',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('Thank you! Your message has been received. We will contact you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(result.error || 'Unable to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Unable to submit the form at this time. Please try again later.');
      console.error('Web3Forms error:', error);
    }
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
