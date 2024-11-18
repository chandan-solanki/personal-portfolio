import cryptoVideo from "../assets/Crypto Video.mp4";
import ankurVideo from "../assets/Primary EP 12 - Ankur Jain Trailer v2.mp4";
import creatorImg from "../assets/asset 6.jpeg";

import vvideo1 from "../assets/Grace Beverley Podcast hb.mp4";
import vvideo2 from "../assets/Joey.mp4";
import vvideo3 from "../assets/Luke Belmar.mp4";

const MyWorkSection = () => {
  const videoControl = (e) => {
    let video = e.currentTarget;
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
      <h1 className="title">I Help You Go Viral…FAST</h1>
      <span className="black-text">
        Many channels I work with go viral within 1-2 videos. I use my proven
        YouTube processes to get results for your channel time and time again,
        with 30M+ views for creators just like you.
      </span>
      <div className="vertical-video-container">
        <div className="vertical-video">
          <video
            onClick={videoControl}
            width="640"
            height="360"
            autoPlay
            controls
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
            <source src={vvideo1} type="video/mp4" />
          </video>
        </div>
      </div>
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
              <source src={cryptoVideo} type="video/mp4" />
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
              <source src={cryptoVideo} type="video/mp4" />
            </video>
          </div>
          {/* <div className="yt-title">
            <h3>Monopoly GO's EVIL Strategy to Make You Poor</h3>
            <span>1M Views</span>
          </div>
          <div className="creator-name">Belinda Ercan</div> */}
        </div>
        <div className="video-box">
          <div className="yt-video">
            <video
              onClick={videoControl}
              width="640"
              height="360"
              autoPlay
              controls
              loop
              muted
            >
              <source src={cryptoVideo} type="video/mp4" />
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
              controls
              loop
              muted
            >
              <source src={cryptoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;
