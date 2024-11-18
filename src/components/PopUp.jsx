import { forwardRef } from "react";
import closePng from "../assets/close.png";

const PopUp = forwardRef(({ popActive, setPopActive }, popRef) => {
  return (
    <div
      onClick={() => setPopActive(false)}
      style={popActive ? { display: "flex" } : { display: "none" }}
      className="popup-container"
      ref={popRef}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="popup-main"
      >
        <div className="popup-header">
          <h2>Nate Curtiss</h2>
          <div onClick={() => setPopActive(false)} className="close-icon">
            <img src={closePng} alt="close-icon" />
          </div>
        </div>
        <p>
          I'm a YouTube strategist and creative director with over 4 years and
          30 million views of YouTube experience. I started my YouTube journey
          making game development videos when I was just 14 years old. I grew
          the channel and began to edit for larger creators in my niche, with
          numerous videos hitting over 100K, and even 2M views before I turned
          16. Eventually, I started the N8Wealth YouTube channel, and blew it up
          with the very first video, and several videos after. This led me to a
          number of additional opportunities in the consulting and agency
          spaces, leading to my my role now in the strategy and creative
          direction world.
        </p>
      </div>
    </div>
  );
});

export default PopUp;
