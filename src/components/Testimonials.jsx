
import profileImg from "../assets/my photo (1).png";
import Faqs from "./Faqs";
import CntViews from "./CntViews";

import ytlogo1 from "../assets/ytlogo1.jpg";
import ytlogo2 from "../assets/ytlogo2.jfif";

import vvideo1 from "../assets/Grace Beverley Podcast hb.mp4";
import vvideo2 from "../assets/Joey.mp4";

const Testimonials = () => {
  return (
    <div id="testimonials" className="section testimonials-section">
      <h1 className="title">Don't just take it from me…</h1>

      <div className="testimonials-container">
        <div className="testi-video vertical-video">
          <video
            onClick={() => {}}
            width="640"
            height="360"
            autoPlay
            controls
            loop
            muted
          >
            <source src={vvideo1} type="video/mp4" />
          </video>
          <div className="channel-circle">
            <div className="author-img">
              <img src={ytlogo2} alt="" />
            </div>
            <div className="author-info">
              <span className="pink-clr">Shubham Mittal</span>
              <span className="black-text">Author</span>
            </div>
          </div>
        </div>
        <div className="testi-video vertical-video">
          <video
            onClick={() => {}}
            width="640"
            height="360"
            autoPlay
            controls
            loop
            muted
          >
            <source src={vvideo2} type="video/mp4" />
          </video>
          <div className="channel-circle">
            <div className="author-img">
              <img src={ytlogo1} alt="" />
            </div>
            <div className="author-info">
              <span className="pink-clr">Dear Sir</span>
              <span className="black-text">19M</span>
            </div>
          </div>
        </div>
      </div>

      <div className="whoami">
        <h1 className="title">So, who am I?</h1>
        <span className="whoami-text black-text">
          I have over 4 years of experience on YouTube with a storied background
          in content creation. Learn more about me below.
        </span>

        <div className="whoami-profile">
          <img src={profileImg} alt="profile-img" />

          <div className="right-profile">
            <h1>Hi, I'm Nainesh</h1>
            <p>
              a video editor with over 5 years of experience. I help creators
              and brands boost engagement and views through my editing. Oh, and
              that’s not all about me. I also love reading books, music, and
              tech.
            </p>
          </div>
          {/* <div className="profile-title">
            <div>
              <h3 className="pink-clr">Nate Curtiss</h3>
              <span>30M views on YouTube</span>
            </div>
            <button
              onClick={() => setPopActive(!popActive)}
              className="bio-btn"
            >
              View Bio
              <span className="arrow-btn">&rarr;</span>
            </button>
          </div> */}
        </div>
      </div>

      <CntViews />

      <Faqs />
    </div>
  );
};

export default Testimonials;
