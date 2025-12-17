import { useSEO } from '../hooks/useSEO';

function ContactUs() {
  useSEO({
    title: 'Contact Us | MSES',
    description: 'Contact Mid-South Environmental Services for environmental response, service coordination, or general inquiries. 24/7 emergency response line: 844-637-4855.',
    canonical: 'https://mses.online/contact-us'
  });

  return (
    <div className="page">
      <section>
        <h1>Contact Us</h1>
        <p>For environmental response, service coordination, or general inquiries, contact Mid-South Environmental Services using the information below. Direct access and clear communication are available for both emergency response and planned work.</p>
      </section>

      <section className="emergency-contact">
        <h2>24/7 Emergency Response</h2>
        <a href="tel:844-637-4855" className="emergency-phone">Call: 844-637-4855</a>
      </section>

      <section>
        <h2>General Inquiries</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">Send Message</button>
        </form>
        <p className="form-note">For urgent matters, please call our 24/7 emergency line. For general inquiries submitted via this form, we aim to respond as promptly as possible, typically within one business day.</p>
      </section>

      <section>
        <p className="closing-text">Mid-South Environmental Services provides direct access to experienced personnel when timing and coordination matter.</p>
      </section>
    </div>
  );
}

export default ContactUs;
