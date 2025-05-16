import { useEffect, useRef, useState } from "react";

const CntViews = () => {
  const [cnting, setCnting] = useState([
    { id: 1, start: 2200, cnt: 2365, for: "Video Created" },
    { id: 2, start: 10, cnt: 40, for: "Million Views" },
    { id: 3, start: 344700, cnt: 344857, for: "Total Viewcount (hrs)" },
  ]);
  const [cntActive, cntSetActive] = useState(false);

  const checkSectionInView = () => {
    const section = document.querySelector(".cntview-container");
    const scrollPosition = window.scrollY;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the section is in the viewport
    if (
      scrollPosition >= sectionTop - window.innerHeight / 2 &&
      scrollPosition < sectionBottom - window.innerHeight / 2
    ) {
      // setActiveSection(section.id); // Update the active section
      //   section.style.backgroundColor = "red";
      cntSetActive(true);
    } else {
      section.style.backgroundColor = "";
      cntSetActive(false);
    }
  };

  // Use useEffect to set up and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkSectionInView);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkSectionInView);
    };
  }, []);

  const videoref = useRef(null);
  const millionref = useRef(null);
  const hourref = useRef(null);

  useEffect(() => {
    // console.log();
    let cnt1 = cnting[0].start;
    let cnt2 = cnting[1].start;
    let cnt3 = cnting[2].start;
    if (cntActive) {
      // videoref.current.textContent = 100;
      let id1 = setInterval(() => {
        if (cnt1 >= cnting[0].cnt) {
          clearInterval(id1);
        } else if (cnt1 < cnting[0].cnt) {
          videoref.current.textContent = cnt1;
          cnt1 += 1;
        }
      }, 10);

      let id2 = setInterval(() => {
        if (cnt2 >= cnting[1].cnt) {
          clearInterval(id2);
        } else {
          cnt2 += 1;
          millionref.current.textContent = cnt2;
        }
      }, 50);

      let id3 = setInterval(() => {
        if (cnt3 >= cnting[2].cnt) {
          clearInterval(id3);
        } else {
          hourref.current.textContent = cnt3;
          cnt3 += 1;
        }
      }, 10);
    }

    return () => {
      // clearInterval(id1);
      // clearInterval(id2);
      // clearInterval(id3);
    };
  }, [cntActive]);

  return (
    <div className="cntview-container">
      <div className="line"></div>
      <div className="main-cntview">
        <div className="cnt-box">
          <h1 ref={videoref}>{cnting[0].start}</h1>
          <h2>Video Created</h2>
        </div>
        <div className="vertical-line"></div>
        <div className="cnt-box">
          <h1 ref={millionref}>{cnting[1].start}</h1>
          <h2>Million+ views</h2>
        </div>
        <div className="vertical-line"></div>

        <div className="cnt-box">
          <h1 ref={hourref}>{cnting[2].start}</h1>
          <h2>Total Viewcount (hrs)</h2>
        </div>
      </div>
    </div>
  );
};

export default CntViews;
