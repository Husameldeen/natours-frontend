function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img
          src="https://res.cloudinary.com/peis3mhm/image/upload/v1787858262/logo-green.png"
          alt="Natours logo"
        />
      </div>
      <ul className="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright">&copy; 2026, by Husameldeen</p>
    </div>
  );
}

export default Footer;
