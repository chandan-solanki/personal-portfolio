import horizontalvideo1 from "../assets/Primary Ep 12 - Ankur Jain Trailer V2.mp4";
import mainhorizontalvideo1 from "../assets/Animations.mp4";
import horizontalvideo2 from "../assets/Happiness Final V2.mp4";
import horizontalvideo3 from "../assets/Real Estate Edit Highlights.mp4";
import handsShakeImg from "../assets/handshake_img.png";

import vvideo1 from "../assets/Grace Beverley Podcast Short.mp4";
import vvideo2 from "../assets/Wyatt.mp4";
import vvideo3 from "../assets/Finy8.mp4";
import vvideo4 from "../assets/Aliens 3 V2.mp4";
import CntViews from "./CntViews";

const MyWorkSection = () => {
  const videoControl = (e) => {
    let video = e.currentTarget;
    // console.log(video);

    // video.muted = false;
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }

    if (video.paused) {
      video.play(); // Play the video
      //   video.muted = true;
    } else {
      video.pause(); // Pause the video
      //   video.muted = false;
    }
  };

  return (
    <div id="mywork" className="section work-section">
      <h1 className="title">
        Your Content{" "}
        <span className="handshake-img">
          {" "}
          <img src={handsShakeImg} alt="handshake-img" />
        </span>{" "}
        My Editing
      </h1>
      <span className="black-text">
        I use proven editing techniques tailored to your needs to achieve the
        results you desire.
      </span>
      <div className="vertical-video-container">
        <div className="vertical-video">
          <video
            onClick={videoControl}
            width="640"
            height="360"
            autoPlay
            controls
            loop
            muted
          >
            <source src={vvideo1} type="video/mp4" />
          </video>
        </div>
        <div className="vertical-video">
          <video
            onClick={videoControl}
            width="640"
            height="360"
            autoPlay
            loop
            controls
            muted
          >
            <source src={vvideo2} type="video/mp4" />
          </video>
        </div>
        <div className="vertical-video">
          <video
            onClick={videoControl}
            width="640"
            height="360"
            autoPlay
            controls
            loop
            muted
          >
            <source src={vvideo3} type="video/mp4" />
          </video>
        </div>
        <div className="vertical-video">
          <video
            onClick={videoControl}
            width="640"
            height="360"
            autoPlay
            controls
            loop
            muted
          >
            <source src={vvideo4} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* <div className="video-box video-box-horizontal">
        <div className="yt-video">
          <video
            onClick={videoControl}
            width=""
            height=""
            autoPlay
            loop
            controls
            muted
          >
            <source src={mainhorizontalvideo1} type="video/mp4" />
          </video>
        </div>
      </div> */}

      <div className="video-container">
        <div className="video-box">
          <div className="yt-video">
            <video
              onClick={videoControl}
              width="640"
              height="360"
              autoPlay
              loop
              controls
              muted
            >
              <source src={horizontalvideo3} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="video-box">
          <div className="yt-video">
            <video
              onClick={videoControl}
              width="640"
              height="360"
              autoPlay
              loop
              controls
              muted
            >
              <source src={horizontalvideo1} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="video-box">
          <div className="yt-video">
            <video
              onClick={videoControl}
              width="640"
              height="360"
              autoPlay
              loop
              controls
              muted
            >
              <source src={horizontalvideo2} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="video-box">
          <div className="yt-video">
            <video
              onClick={videoControl}
              width="640"
              height="360"
              autoPlay
              loop
              controls
              muted
            >
              <source src={mainhorizontalvideo1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <CntViews />
    </div>
  );
};

export default MyWorkSection;
