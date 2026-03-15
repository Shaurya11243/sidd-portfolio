import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I am</h2>
            <h1>
              Siddharth
              <br />
              <span>Shaurya</span>
            </h1>
            
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Computer Science</div>
              <div className="landing-h2-2">Cloud Computing</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Problem Solver</div>
              <div className="landing-h2-info-1">Lifelong Learner</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
