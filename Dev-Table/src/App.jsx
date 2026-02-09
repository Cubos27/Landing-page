import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">DevTable</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              The Future of <span className="highlight">Technology</span> Starts Here
            </h1>
            <p className="hero-subtitle">
              We build cutting-edge digital solutions that transform your business into a technological powerhouse
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Start Your Journey</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-grid">
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Revolutionary Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>AI Integration</h3>
                <p>Harness the power of artificial intelligence to automate and optimize your workflows</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>Cloud Solutions</h3>
                <p>Scalable cloud infrastructure that grows with your business needs</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>Cybersecurity</h3>
                <p>Enterprise-grade security to protect your digital assets and data</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guaranteed</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TechCorp</h3>
              <p>Leading the digital transformation revolution</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@techcorp.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TechCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
