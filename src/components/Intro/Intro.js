
import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Intro.scss";


const Intro = () => {
  const textRef = useRef(null);

  useEffect(()=> {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      cursorChar: "_",
      strings: ["Student", "Developer", "Enthusiast"],
    });
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/man.png" alt='pic' />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I'm</h2>
          <h1>Oleksiy Kudryashov</h1>
          <h3>Front-end <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
