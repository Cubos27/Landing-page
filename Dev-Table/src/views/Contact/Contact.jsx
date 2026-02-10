import './Contact.css'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="contact-title">Get in <span className="highlight">Touch</span></h1>
        <p className="contact-subtitle">
          Ready to start your next project? We're here to help bring your ideas to life.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>devtable276@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+52 1 33 3393 1845</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Available remotely worldwide</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="project">Project Type</label>
                <select id="project" name="project">
                  <option value="">Select a service</option>
                  <option value="landing">Landing Page</option>
                  <option value="mobile">Mobile App</option>
                  <option value="desktop">Desktop App</option>
                  <option value="web">Web App</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <PrimaryButton type="submit">Send Message</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact