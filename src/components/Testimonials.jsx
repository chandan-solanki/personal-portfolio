import profileImg from "../assets/my photo new.png";
import Faqs from "./Faqs";
import CntViews from "./CntViews";

import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import ytlogo1 from "../assets/ytlogo1.jpg";
import ytlogo2 from "../assets/ytlogo2.jfif";
import aliLogo from "../assets/ali agent logo.jpeg";
import bijonProfile from "../assets/bijon profile img.jpeg";
import KylaMontanoProfile from "../assets/Kyla Montano.jpeg";
import DavidProfile from "../assets/david.jpeg";
import lizDavisProfile from "../assets/liz davis.jpeg";

import vvideo1 from "../assets/Shubham Mittal Testimonial.mp4";
import vvideo2 from "../assets/Dearsir - Testimonial.mp4";
import aliAgentVideo from "../assets/Ali The Agent Testi Post.mp4";
import BjionTestimonial from "../assets/Bjion - Testimonial.mp4";
import kylaVideo from "../assets/Kyla Testimonial.mp4";
import davidVideo from "../assets/david testimonial.mp4";
import lizDavisVideo from "../assets/Edited Liz Davis Testimonial Website Video.mp4";
import DoSection from "./DoSection";

// Swiper imports
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialVideos = [
  {
    video: lizDavisVideo,
    img: lizDavisProfile,
    name: "Liz Davis",
    role: "Real Estate Agent",
  },
  {
    video: aliAgentVideo,
    img: aliLogo,
    name: "Ali the Agent",
    role: "Real Estate Agent",
  },
  {
    video: BjionTestimonial,
    img: bijonProfile,
    name: "Bjion Henry",
    role: "CEO of navreo.ai",
  },

  { video: vvideo2, img: ytlogo1, name: "Dear Sir", role: "19M Subscribers" },
  {
    video: davidVideo,
    img: DavidProfile,
    name: "David Dinat",
    role: "Founder, ErotalMedia",
  },
  {
    video: kylaVideo,
    img: KylaMontanoProfile,
    name: "Kyla Montano",
    role: "Real Estate Agent",
  },
  { video: vvideo1, img: ytlogo2, name: "Shubham Mittal", role: "Author" },
];

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div id="testimonials" className="section testimonials-section">
      <h1 className="title">Don't just take it from me…</h1>

      <div className="testimonials-swiper-wrapper">
        <button
          className="testi-nav-btn testi-nav-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <img src={leftArrow} alt={"left-arrow"} />
        </button>

        <Swiper
          onSwiper={setSwiperInstance}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="testimonials-swiper"
        >
          {testimonialVideos.map((item, index) => (
            <SwiperSlide key={index} className="testi-slide">
              <div className="testi-video vertical-video">
                <video width="640" height="360" autoPlay controls loop muted>
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="channel-circle">
                  <div className="author-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="author-info">
                    <span className="pink-clr">{item.name}</span>
                    <span className="black-text">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="testi-nav-btn testi-nav-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <img src={rightArrow} alt={"right-arrow"} />
        </button>
      </div>

      <DoSection />

      <div className="whoami">
        {/* <h1 className="title">So, who am I?</h1>
        <span className="whoami-text black-text">
          I have over 4 years of experience on YouTube with a storied background
          in content creation. Learn more about me below.
        </span> */}

        <div className="whoami-profile">
          <img src={profileImg} alt="profile-img" />

          <div className="right-profile">
            <h1>Face Behind the Brand</h1>
            <p>
              Hi, I'm Nainesh, a video editor with over 5 years of experience. I
              help creators and founders to build strategic videos that drive
              revenue and leads.
            </p>
            <p>
              Oh, and that’s not all about me. I also love reading books, music,
              and tech.
            </p>
            <button className="work-with-btn book-btn">
              {" "}
              <a href="https://calendly.com/nseditingservice/30min">
                {" "}
                Work with me
              </a>{" "}
            </button>
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

      <Faqs />
    </div>
  );
};

export default Testimonials;
