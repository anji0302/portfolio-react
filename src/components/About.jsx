import "./About.scss";
import aboutImg from "../images/about.jpg";

const experience = "7";
const projects = "11";

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
                  <h2 className="number color-green">{experience}</h2>
                  <h5 className="text">
                    Years of <br />
                    Success
                  </h5>
                </div>
              </div>

              {/* Projects */}
              <div className="block projects">
                <div className="wrapper bg-gray">
                  <h2 className="number color-yellow">{projects}</h2>
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
              <div className="mb2">
                <h2>I Can Develop Anything You Want</h2>
              </div>

              <div className="mb2">
                <p>
                  Hello there! I'm a web developer, and I'm very passionate and
                  dedicated to my work. With {experience} years experience as a
                  professional web developer, I have acquired the skills and
                  knowledge necessary to make your project a success. I enjoy
                  every step of the development process, from discussion and
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brush_1"></div>
      <div className="brush_2"></div>
    </section>
  );
}

export default About;
