import img1 from "../assets/asset 1.jpeg";
import img2 from "../assets/asset 2.jpeg";
import img3 from "../assets/asset 3.jpeg";
import img4 from "../assets/asset 4.jpeg";
import img5 from "../assets/asset 5.jpeg";
import img6 from "../assets/asset 6.jpeg";
import img7 from "../assets/asset 7.jpeg";
import img8 from "../assets/asset 8.png";
import img9 from "../assets/asset 9.png";
import start from "../assets/asset 13.svg";
import bulb from "../assets/asset 15.svg";

const HeroSection = () => {
  return (
    <div id="home" className="section hero-section">
      <div className="hero-title-container">
        <h1 className="hero-title">
          Take Your <span>Content </span>to the Next Level
        </h1>

        <div className="hero-des">
          <span>
            Unlock your video’s full potential with expert editing that
            captivates and inspires. Whether you’re growing your YouTube channel
            or elevating your brand, I’ll bring your vision to life. Let’s
            create something extraordinary!
          </span>
        </div>

        {/* <button className="hero-btn">I Want Youtube Results</button> */}
      </div>

      {/* <div className="hero-review">
        <div className="hero-review-title">
          Join dozens of channels I've helped go insanely viral in their niches,
          fast.
        </div>
        <div className="hero-images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
        <div className="hero-stars">
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
        </div>
      </div>

      <div className="review-box">
        <div className="left">
          <p className="review-text">
            Working with Nate is like hitting the YouTube jackpot. At just 17,
            he's already a big-picture guy, understanding what I'm trying to say
            in my videos from a holistic perspective.
          </p>
          <button className="">
            See full testimonial <span className="arrow">&rarr;</span>
          </button>
        </div>

        <div className="right">
          <div className="review-post">
            <img src={img5} alt="" />
            <div className="review-right-text">
              <h4>Belinda Ercan</h4>
              <span>0 to 50K subscribers in 5 months</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="do-section">
        <h1 className="title">What do i do ?</h1>
        <span className="black-text">
          To give myself the most control over the performance of posted videos,
          I take care of the following responsibilities for my clients.
        </span>
        <div className="box-container">
          <div className="box">
            <div className="box-title">
              <span>Video ideas</span>
              <img className="box-img" src={bulb} alt="" />
            </div>
            <div className="box-text">
              I come up with viral video ideas in your niche with the potential
              to get 100s of thousands, and even millions of views.
            </div>
          </div>
          <div className="box">
            <div className="box-title">
              <span>Video ideas</span>
              <img className="box-img" src={bulb} alt="" />
            </div>
            <div className="box-text">
              I come up with viral video ideas in your niche with the potential
              to get 100s of thousands, and even millions of views.
            </div>
          </div>
          <div className="box">
            <div className="box-title">
              <span>Video ideas</span>
              <img className="box-img" src={bulb} alt="" />
            </div>
            <div className="box-text">
              I come up with viral video ideas in your niche with the potential
              to get 100s of thousands, and even millions of views.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="main-review">
        <div className="left-review">
          <img src={img6} alt="review-img" />
          <div className="left-review-text">
            <h4>BlackySpeakz</h4>
            <span>1.12M subs</span>
          </div>
        </div>

        <div className="right-review">
          After a brief consultation with Nate, I can vouch for him by saying
          that he puts bringing value to anyone he works with, at the forefront.
          A quality that’s extremely rare in this space, but is very present
          with Nate.
        </div>
      </div> */}

      <button className="book-btn">Book a Free Call</button>
    </div>
  );
};

export default HeroSection;
