const Footer = () => {
  return (
    <div id="footer" className="section footer-main">
      <div className="footer-section">
        <div className="footer-left">
          <div className="footer-title">
            <h1 className="title">Let's work together!</h1>
            <span> really want to blow up your channel.</span>
          </div>
          <button className="footer-btn book-btn">Book a Free Call</button>
        </div>
        <div className="footer-right">
          <h3>Social</h3>
          <div className="footer-links">
            <a href="">Youtube</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Linkdin</a>
          </div>
        </div>
      </div>

        <div className="line"></div>
      <div className="footer-last">
        <span>© Copyright {new Date().getFullYear()} N8Wealth. All rights reserved.</span>
        <span>Website by Ryasen Design</span>
      </div>
    </div>
  );
};

export default Footer;
