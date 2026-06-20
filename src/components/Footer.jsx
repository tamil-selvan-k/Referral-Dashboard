const Footer = () => {
  return (
    <footer className="footer flex items-center justify-around">
      <div className="footer-item">
        <h1 className="text-[var(--accent)] text-900 text-[1.3rem]">
          Go Business
        </h1>
      </div>
      <div className="footer-item">
        <ul type="none" className="flex gap-[1rem] text-[0.8rem]">
          <li className="hover:text-[var(--accent)] cursor-pointer">
            <a href="#" className="inherit">
              About
            </a>
          </li>
          <li className="hover:text-[var(--accent)] cursor-pointer">
            <a href="#" className="inherit">
              Contact
            </a>
          </li>
          <li className="hover:text-[var(--accent)] cursor-pointer">
            <a href="#" className="inherit">
              Privacy
            </a>
          </li>
          <li className="hover:text-[var(--accent)] cursor-pointer">
            <a href="#" className="inherit">
              Terms
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <p className="text-[0.8rem]">&copy; 2024 Go Business, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
