import bookCall from "../assets/Book a call 3.svg";
import revisionImg from "../assets/client 3.svg";
import calendarImg from "../assets/calendar 3.svg";

const DoSection = () => {
  return (
    <div className="do-section">
      <h1 className="title">Super simple to get started</h1>
      <div className="box-container">
        <div className="box">
          <div className="box-title">
            <h1>Book a Call</h1>
            <span className="box-text">
              15 minutes to talk about your goals and needs
            </span>
          </div>

          <div className="box-img">
            <img src={calendarImg} alt="call-img" />
          </div>
        </div>
        <div className="box">
          <div className="box-title">
            <h1>Workflow</h1>
            <span className="box-text">
              Steps we go through to create a finished video edit
            </span>
          </div>

          <div className="box-img">
            <img src={bookCall} alt="call-img" />
          </div>
        </div>
        <div className="box">
          <div className="box-title">
            <h1>Revisions</h1>
            <span className="box-text">
              Not satisfied with something, no worries, we can correct that
            </span>
          </div>

          <div className="box-img">
            <img src={revisionImg} alt="revision-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoSection;
