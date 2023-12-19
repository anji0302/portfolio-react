import "./About.scss";
import aboutImg from "../images/about.jpg";
import brush1 from "../images/brush1.png";
import brush2 from "../images/brush2.png";
import {
  EXPERIENCE,
  PROJECTS,
  RESUME_LINK,
} from "../constants/system.constants";

function About() {
  return (
    <section className="About-Section">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="image">
              <img src={aboutImg} alt="about" />
              {/* Years */}
              <div className="block years">
                <div className="wrapper bg-gray">
                  <h2 className="number color-green">{EXPERIENCE}</h2>
                  <h5 className="text">
                    Years of <br />
                    Success
                  </h5>
                </div>
              </div>

              {/* Projects */}
              <div className="block projects">
                <div className="wrapper bg-gray">
                  <h2 className="number color-yellow">{PROJECTS}</h2>
                  <h5 className="text">
                    Real time
                    <br />
                    Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="">
              <div className="">
                <h4 className="color-primary">I'm a Developer</h4>
              </div>
              <div className="title mb2">
                <h2>I Can Develop Anything You Want</h2>
              </div>

              <div className="mb2">
                <p>
                  Hello there! I'm a web developer, and I'm very passionate and
                  dedicated to my work. With {EXPERIENCE} years experience as a
                  professional web developer, I have acquired the skills and
                  knowledge necessary to make your project a success. I enjoy
                  every step of the development process, from discussion and
                  collaboration.
                </p>
              </div>

              <div className="external-link">
                <a href={RESUME_LINK} target="_blank" rel="noreferrer">
                  Find more here
                </a>
                &nbsp;
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brush_1">
        <img src={brush1} alt="brush" />
      </div>
      <div className="brush_2">
        <img src={brush2} alt="brush" />
      </div>
    </section>
  );
}

export default About;
