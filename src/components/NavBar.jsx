import { useState, useRef, useEffect } from "react";
import logo from "../assets/NS Editing Service Logo Violet.png";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navbarRef = useRef(null);
  const linksRef = useRef(null);

  function onOfMenu() {
    setActiveMenu(!activeMenu);
  }

  useEffect(() => {
    console.log(navbarRef.current);
    document.addEventListener("click", (e) => {
      if (
        !navbarRef.current.contains(e.target) &&
        e.target !== navbarRef.current
      ) {
        setActiveMenu(false);
      }
    });

    return () => document.removeEventListener("click");
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
    // const targetPosition = section.offsetTop - navbarHeight;
    const targetPosition = section.offsetTop - navbarHeight - 100;
    console.log({targetPosition})

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  return (
    <nav
      ref={navbarRef}
      className={!activeMenu ? `navbar` : `navbar active-hamburger-menu`}
    >
      <div
        className="logo-container"
        onClick={() => {
          setActiveMenu(false);
          scrollToSection("home");
        }}
      >
        <div className="logo-img">
          <a>
            {" "}
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>

      <div
        ref={linksRef}
        style={activeMenu ? { opacity: 1, display: "flex" } : {}}
        className="links-container"
      >
        <a
          onClick={() => {
            setActiveMenu(false);
            scrollToSection("home");
          }}
          data-name="home"
          className="links-btn"
        >
          <span>Home</span>
        </a>
        <a
          onClick={() => {
            setActiveMenu(false);
            scrollToSection("mywork");
          }}
          data-name="mywork"
          className="links-btn"
        >
          <span>My Work</span>
        </a>
        <a
          onClick={() => {
            setActiveMenu(false);
            scrollToSection("testimonials");
          }}
          data-name="testimonials"
          className="links-btn"
        >
          <span>Testimonials</span>
        </a>
        <a
          onClick={() => {
            setActiveMenu(false);
            scrollToSection("footer");
          }}
          data-name="footer"
          className="links-btn"
        >
          <span>Book a Call</span>
        </a>
      </div>

      <div onClick={() => onOfMenu()} className="hamburger-menu">
        {/* <img src="" alt="" /> */}
        <span style={activeMenu ? { width: "40%" } : {}}></span>
        <span style={activeMenu ? { width: "70%" } : {}}></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
