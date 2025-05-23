import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import "./App.css";
import "./responsive.css";
import MyWorkSection from "./components/MyWorkSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
import { useEffect, useRef, useState } from "react";

//https://x.com/messages/compose?text=EDIT&amp;recipient_id=ns_nainesh

function App() {
  const popRef = useRef(null);
  const [popActive, setPopActive] = useState(false);

  // console.log({ popActive });

  useEffect(() => {
    popRef.current.style.top = scrollY + "px";

    if (popActive) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [popActive]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      // console.log("Touchscreen device detected.");
      document.querySelector(".cursor").style.display = "none";
    } else {
      // console.log("Non-touchscreen device.");
    }
  }, []);

  return (
    <div>
      <div className="main-app">
        <NavBar />
        <HeroSection />
        <MyWorkSection />
        <Testimonials />
        <Footer />
        <PopUp ref={popRef} setPopActive={setPopActive} popActive={popActive} />
      </div>
    </div>
  );
}

export default App;
