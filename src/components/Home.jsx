/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <section className="hero-section">
        <div></div>
        <div className="background"></div>

        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="color-primary">Hello, I'm</h3>
              </div>
              <div className="name mb4">
                <h1>Anjaneyulu Dhamera</h1>
              </div>
              <h4 className="job mb4">
                <p>
                  A{" "}
                  <span className="color-green">Senior Software Engineer</span>{" "}
                  From <span className="color-yellow">Bentonville, AR </span>
                </p>
              </h4>
              <div className="text mb2">
                <p>
                  A passionate full stack developer with a commitment to
                  continuous improvement.
                </p>
              </div>
              <div className="action-btns">
                <button className="btn btn-1 hover-filled-slide-down">
                  <span>About Me</span>
                </button>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dhamera/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="avatar"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
