import testiImg from "../assets/asset 4.jpeg";
import profileImg from "../assets/asset 11.png";
import Faqs from "./Faqs";
import CntViews from "./CntViews";

const Testimonials = ({ popActive, setPopActive }) => {
  return (
    <div id="testimonials" className="section testimonials-section">
      <h1 className="title">Don't just take it from me…</h1>

      <div className="testimonials-container">
        <div className="testi-box">
          <span className="testi-text">
            Nate is…the person behind me realizing I could be maximizing my
            YouTube Channel a lot more. He went over my processes and made them
            more efficient. He is extremely knowledgeable.
          </span>
          <div className="testi-review-box">
            <img src={testiImg} alt="testi-img" />
            <div className="testi-review-text">
              <h4 className="pink-clr">Aaron Battley </h4>
              <span>Youtuber</span>
            </div>
          </div>
        </div>
        <div className="testi-box">
          <span className="testi-text">
            Nate is…the person behind me realizing I could be maximizing my
            YouTube Channel a lot more. He went over my processes and made them
            more efficient. He is extremely knowledgeable.
          </span>
          <div className="testi-review-box">
            <img src={testiImg} alt="testi-img" />
            <div className="testi-review-text">
              <h4 className="pink-clr">Aaron Battley </h4>
              <span>Youtuber</span>
            </div>
          </div>
        </div>
        <div className="testi-box">
          <span className="testi-text">
            Nate is…the person behind me realizing I could be maximizing my
            YouTube Channel a lot more. He went over my processes and made them
            more efficient. He is extremely knowledgeable.
          </span>
          <div className="testi-review-box">
            <img src={testiImg} alt="testi-img" />
            <div className="testi-review-text">
              <h4 className="pink-clr">Aaron Battley </h4>
              <span>Youtuber</span>
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
          <div className="profile-title">
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
          </div>
        </div>
      </div>

      <CntViews />

      <Faqs />
    </div>
  );
};

export default Testimonials;
