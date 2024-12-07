const Footer = () => {
  return (
    <div id="footer" className="section footer-main">
      <div className="footer-section">
        <div className="footer-left">
          <div className="footer-title">
            <h1 className="title">Ready to transform your videos?</h1>
            <span>
              Book a 15-minute call to create a system tailored to your editing
              needs and craft a game plan to make your content stand out.
            </span>
          </div>
          <button className="footer-btn book-btn">
            {" "}
            <a href="https://calendly.com/nseditingservice/30min">
              Book a Call
            </a>{" "}
          </button>
        </div>
        <div className="footer-right">
          <h3>Social</h3>
          <div className="footer-links">
            <a href="https://www.youtube.com/@nseditingservice">Youtube</a>
            <a href="https://ig.me/m/ns_nainesh">Instagram</a>
            <a href="https://x.com/ns_nainesh">Twitter</a>
            <a href="https://www.linkedin.com/in/ns-nainesh-b68979139/?trk=opento_sprofile_details">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="footer-last">
        <span>
          © Copyright {new Date().getFullYear()} NSEditingService. All rights reserved.
        </span>
        {/* <span>Website by Ryasen Design</span> */}
      </div>
    </div>
  );
};

export default Footer;
