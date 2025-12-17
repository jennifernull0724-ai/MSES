import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="site-header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/staff">Staff</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <a href="tel:844-637-4855" className="header-phone">
        <span className="header-phone-label">24/7 Emergency:</span>
        <strong>844-637-4855</strong>
      </a>
      <div className="header-accent">
        <div className="accent-rule accent-rule-primary"></div>
        <div className="accent-rule accent-rule-secondary"></div>
      </div>
    </header>
  );
}

export default Nav;
