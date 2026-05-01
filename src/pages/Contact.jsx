import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h1>Get in Touch with Mirai X Ventures</h1>
          <p>
            Fill out the form and our team will respond promptly to help you with product enquiries, pricing, and orders.
          </p>
        </div>
      </div>
      <div className="contact-layout">
        <div className="contact-details">
          <div className="contact-box">
            <h2>Contact Information</h2>
            <p>Reach out for support, bulk orders, or product advice.</p>
            <ul>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+917303511253">+91 7303511253</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:foil_kraft@hotmail.com">foil_kraft@hotmail.com</a>
              </li>
              <li>
                <strong>Address:</strong>
                <p>7259, Shop No.2, Ground Floor Prem Nagar, Shakti Nagar North Delhi - 110007</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
